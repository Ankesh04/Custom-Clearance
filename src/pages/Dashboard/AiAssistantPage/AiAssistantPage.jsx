// src/pages/Dashboard/AiAssistantPage/AiAssistantPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "./AiAssistantPage.css";

// ── Icons ─────────────────────────────────────
const Icon = ({ path, className }) => (
  <svg className={`icon ${className || ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

// ── Logo ─────────────────────────────────────
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
      <div className="logo-circle"><span>C</span></div>
      <span className="logo-text">Custom Clearance</span>
    </div>
  );
};

// ── User Dropdown ────────────────────────────
const UserDropdown = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="user-dropdown">
      <img
        src={user.photoURL || "https://placehold.co/40x40"}
        alt="User"
        className="avatar"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="dropdown-menu">
          <div className="user-info">
            <strong>{user.displayName || "User"}</strong>
            <small>{user.email}</small>
          </div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

// ── Chat Bubble ──────────────────────────────
const ChatBubble = ({ type, text, source }) => (
  <div className={`bubble ${type}`}>
    <div className="bubble-inner">
      <p>{text}</p>
      {source && <small className="source">Source: {source}</small>}
    </div>
  </div>
);

// ── AI Assistant Page ────────────────────────
const AiAssistantPage = () => {
  const { user } = useAuth();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "To export to Italy, you'll need a commercial invoice, packing list, and certificate of origin. Make sure all documents are accurate and signed before submitting them to customs.",
      source: "EU Customs Regulation document 1"
    },
    {
      type: "user",
      text: "What is the HS code for walnut timber?"
    },
    {
      type: "ai",
      text: "Walnuts (wood) 4408: For the unprocessed or fresh walnut timber.",
      source: "Harmonized System (HS) Code directory 1"
    }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: "ai",
        text: "I'm checking the latest customs regulations for you...",
        source: "AI Knowledge Base"
      }]);
    }, 1000);
  };

  if (!user) {
    return (
      <div className="dashboard">
        <aside className="sidebar">
          <div className="sidebar-top"><Logo /></div>
          <nav className="nav">
            <Link to="/dashboard" className="nav-item">
              <Icon path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" />
              <span>Dashboard</span>
            </Link>
          </nav>
        </aside>
        <main className="main" style={{ padding: "2rem", textAlign: "center" }}>
          <p>Please <Link to="/login">log in</Link> to use AI Assistant.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-top"><Logo /></div>
        <nav className="nav">
          <Link to="/dashboard" className="nav-item">
            <Icon path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" />
            <span>Dashboard</span>
          </Link>
          <Link to="/dashboard/documents" className="nav-item">
            <Icon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414" />
            <span>Documents</span>
          </Link>
          <Link to="/ai-assistant" className="nav-item active">
            <Icon path="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8" />
            <span>AI Assistant</span>
          </Link>
        </nav>
      </aside>

      {/* ── Main ── */}
      <main className="main">
        <header className="header">
          <h1>AI Customs Assistant</h1>
          <UserDropdown user={user} />
        </header>

        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <ChatBubble key={i} type={msg.type} text={msg.text} source={msg.source} />
            ))}
          </div>

          <div className="chat-suggestions">
            <button className="suggestion">What are the document requirements for exporting to Italy?</button>
            <button className="suggestion">What is the HS code for clothing?</button>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask me anything about customs regulations..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="send-btn" onClick={handleSend}>Send</button>
          </div>

          <p className="disclaimer">
            AI outputs may be misleading or wrong. Consider checking important sources.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AiAssistantPage;