// src/pages/Dashboard/TradeLane.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./Tradelane.css";   // reuse same CSS

// ── Icons ───────────────────────────────────
const Icon = ({ path }) => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

// ── Country / Category Dropdowns ─────────────
const countries = ["India","Nepal","United States","China"];
const categories = ["Electronics","Food","Textiles","Machinery","Pharmaceuticals"];

const CountrySelect = ({ label, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = countries.filter(c => c.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="select-group">
      <label>{label}</label>
      <div className="dropdown">
        <button className="dropdown-btn" onClick={() => setOpen(!open)}>
          {value || "Select country"} <Icon path="M19 9l-7 7-7-7" />
        </button>
        {open && (
          <div className="dropdown-menu">
            <input type="text" placeholder="Search..." value={search} onChange={e=>setSearch(e.target.value)} className="search-input" autoFocus />
            {filtered.map(c=>(
              <div key={c} className="dropdown-item" onClick={()=>{onChange(c);setOpen(false);setSearch("");}}>{c}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CategorySelect = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="select-group">
      <label>Product Category</label>
      <div className="dropdown">
        <button className="dropdown-btn" onClick={() => setOpen(!open)}>
          {value || "Select category"} <Icon path="M19 9l-7 7-7-7" />
        </button>
        {open && (
          <div className="dropdown-menu">
            {categories.map(c=>(
              <div key={c} className="dropdown-item" onClick={()=>{onChange(c);setOpen(false);}}>{c}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ── TradeLaneItem ───────────────────────────
const TradeLaneItem = ({ lane, onClick, isSelected }) => (
  <div className={`trade-lane-item ${isSelected?"selected":""}`} onClick={onClick}>
    <div className="lane-route">{lane.from} to {lane.to}</div>
    <div className="lane-category">{lane.category}</div>
  </div>
);

// ── DocumentCard ───────────────────────────
const DocumentCard = ({ title, desc, onView }) => (
  <div className="doc-card">
    <h4>{title}</h4><p>{desc}</p>
    <div className="doc-actions">
      <button className="btn-outline">Download</button>
      <button className="btn-green" onClick={onView}>View Rules</button>
    </div>
  </div>
);

// ── RulesModal ─────────────────────────────
const RulesModal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="modal-header"><h3>{title} - Rules</h3><button className="close-btn" onClick={onClose}>×</button></div>
        <div className="modal-body">
          <p><strong>Purpose:</strong> Official proof of sale and value.</p>
          <p><strong>Format:</strong> PDF only. Must include HS codes.</p>
          <p><strong>Submit:</strong> 48 hours before shipment.</p>
        </div>
        <div className="modal-footer"><small>Last updated: Oct 15, 2025</small></div>
      </div>
    </div>
  );
};

// ── TradeLane Component ─────────────────────
const TradeLane = ({ showWizard, onToggleWizard }) => {
  const { user } = useAuth();

  const [lanes, setLanes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [category, setCategory] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  // Load lanes
  useEffect(() => {
    const load = async () => {
      if (!user) return;
      const snap = await getDocs(collection(db, "users", user.uid, "tradeLanes"));
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setLanes(data);
      if (data.length && !selected) setSelected(data[0]);
    };
    load();
  }, [user, selected]);

  const handleSave = async () => {
    if (!from || !to || !category) return;
    setIsSaving(true);
    try {
      const payload = { from, to, category, documents: docs(), createdAt: new Date() };
      const ref = await addDoc(collection(db, "users", user.uid, "tradeLanes"), payload);
      const newLane = { id: ref.id, ...payload };
      setLanes(prev => [...prev, newLane]);
      setSelected(newLane);
      reset();
    } catch (e) { console.error(e); alert("Save failed"); }
    finally { setIsSaving(false); }
  };

  const reset = () => { setFrom(""); setTo(""); setCategory(""); setStep(1); };
  const docs = () => [
    { title:"Commercial Invoice", desc:"Proof of transaction value." },
    { title:"Packing List", desc:"List of items and weights." },
    { title:"Certificate of Origin", desc:"Country of manufacture." },
    { title:"Bill of Lading", desc:"Transport contract." }
  ];

  const openModal = t => { setModalTitle(t); setModalOpen(true); };

  return (
    <>
      {/* Trade-Lanes Header + Toggle */}
      <section className="trade-lanes-section">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h2>Your Trade Lanes ({lanes.length})</h2>
          <button className="btn-green small" onClick={onToggleWizard}>
            {showWizard ? "Hide Wizard" : "New Trade Lane"}
          </button>
        </div>

        {/* List */}
        <div className="trade-lanes-list">
          {lanes.length === 0 ? (
            <p className="empty">No trade lanes yet. Click “New Trade Lane” to start.</p>
          ) : (
            lanes.map(l=>(
              <TradeLaneItem key={l.id} lane={l} onClick={()=>setSelected(l)} isSelected={selected?.id===l.id} />
            ))
          )}
        </div>
      </section>

      {/* Selected Lane Checklist */}
      {selected && !showWizard && (
        <section className="checklist">
          <h3>{selected.from} to {selected.to} ({selected.category})</h3>
          <div className="doc-grid">
            {docs().map(d=>(
              <DocumentCard key={d.title} title={d.title} desc={d.desc} onView={()=>openModal(d.title)} />
            ))}
          </div>
        </section>
      )}

      {/* Wizard */}
      {showWizard && (
        <section className="wizard">
          <div className="wizard-steps">
            <div className={`step ${step>=1?"active":""}`}>1</div>
            <div className="line"></div>
            <div className={`step ${step===2?"active":""}`}>2</div>
          </div>
          <h3>{step===1?"Select Trade Lane":"Choose Category"}</h3>

          {step===1 ? (
            <div className="form-row">
              <CountrySelect label="Exporting From" value={from} onChange={setFrom} />
              <CountrySelect label="Importing To" value={to} onChange={setTo} />
            </div>
          ) : (
            <CategorySelect value={category} onChange={setCategory} />
          )}

          <div className="actions">
            {step===2 && <button className="btn-outline" onClick={()=>setStep(1)}>Back</button>}
            <button
              className="btn-green"
              onClick={step===1 ? () => from&&to&&setStep(2) : handleSave}
              disabled={isSaving || (step===1&&(!from||!to)) || (step===2&&!category)}
            >
              {isSaving?"Saving…": step===2?"Save & Generate":"Next"}
            </button>
          </div>
        </section>
      )}

      <RulesModal isOpen={modalOpen} onClose={()=>setModalOpen(false)} title={modalTitle} />
    </>
  );
};

export default TradeLane;