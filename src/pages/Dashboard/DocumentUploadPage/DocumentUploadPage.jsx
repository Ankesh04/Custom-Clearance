// src/pages/Documents/DocumentUploadPage.jsx
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "./DocumentUploadPage.css";

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

// ── User Avatar with Dropdown ─────────────────
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
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

// ── Document Upload Page ─────────────────────
const DocumentUploadPage = () => {
  const { user } = useAuth();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handlePaste = (e) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type === "application/pdf") {
        const blob = items[i].getAsFile();
        setFile(blob);
        break;
      }
    }
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
    } else {
      alert("Please select a PDF file.");
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      alert(`"${file.name}" uploaded and sent for verification!`);
      setFile(null);
    }, 2000);
  };

  if (!user) {
    return (
      <div className="dashboard">
        <aside className="sidebar">
          <div className="sidebar-top"><Logo /></div>
          <nav className="nav">
            <Link to="/documents" className="nav-item active">
              <Icon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414" />
              <span>Documents</span>
            </Link>
          </nav>
        </aside>
        <main className="main" style={{ padding: "2rem", textAlign: "center" }}>
          <p>Please <Link to="/login">log in</Link> to upload documents.</p>
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
          <Link to="/documents" className="nav-item active">
            <Icon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414" />
            <span>Documents</span>
          </Link>
          <Link to="/ai-assistant" className="nav-item">
            <Icon path="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8" />
            <span>AI Assistant</span>
          </Link>
        </nav>
      </aside>

      {/* ── Main ── */}
      <main className="main">
        <header className="header">
          <h1>Upload Document</h1>
          <UserDropdown user={user} />
        </header>

        {/* ── Upload Area ── */}
        <div className="upload-container">
          <div
            className={`drop-zone ${isDragging ? "dragging" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onPaste={handlePaste}
            onClick={() => fileInputRef.current.click()}
          >
            <Icon path="M7 16h10M12 2v11m-5 5h10" className="upload-icon" />
            <p className="drop-text">
              <strong>Drag & drop</strong> your PDF here
            </p>
            <p className="or-text">or</p>
            <button className="btn-browse">Browse Files</button>
            <p className="paste-text">or <strong>paste</strong> (Ctrl+V)</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

          {/* ── File Preview ── */}
          {file && (
            <div className="file-preview">
              <div className="file-info">
                <Icon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414" className="file-icon" />
                <div>
                  <p className="file-name">{file.name}</p>
                  <p className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button className="btn-remove" onClick={() => setFile(null)}>Remove</button>
            </div>
          )}

          {/* ── Upload Button ── */}
          <button
            className="btn-upload"
            onClick={handleUpload}
            disabled={!file || uploading}
          >
            {uploading ? "Uploading..." : "Upload & Verify"}
          </button>
        </div>

        <div className="info-box">
          <p><strong>Supported:</strong> PDF only</p>
          <p><strong>Max size:</strong> 10 MB</p>
        </div>
      </main>
    </div>
  );
};

export default DocumentUploadPage;