// src/pages/Dashboard/AiAssistantPage/AiAssistantPage.jsx
import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Sidebar from "../../../components/layout/Sidebar";
import "./AiAssistantPage.css";

// ── Icons ─────────────────────────────────────
const Icon = ({ path, className }) => (
  <svg className={`icon ${className || ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

// ── Chat Bubble ──────────────────────────────
const ChatBubble = ({ type, text, source }) => (
  <div className={`bubble ${type}`}>
    <div className="bubble-inner">
      <p>{text}</p>
      {source && <small className="source">Source: {source}</small>}
    </div>
  </div>
);

// ── Main AI Assistant Page ───────────────────
const AiAssistantPage = () => {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
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
    const userMsg = { type: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "I'm checking the latest customs regulations for you...",
          source: "AI Knowledge Base"
        }
      ]);
    }, 1000);
  };

  if (!user) {
    return (
      <div className="dashboard1">
        <main className="main1" style={{ padding: "2rem", textAlign: "center" }}>
          <p>Please log in to use AI Assistant.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard1">
      {/* Mobile Sidebar */}
      <Sidebar isMobile={true} isOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main1">
        <header className="header1">
          <h1>AI Customs Assistant</h1>
        </header>

        <div className="chat-container">
          {/* Chat Messages */}
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <ChatBubble key={i} type={msg.type} text={msg.text} source={msg.source} />
            ))}
          </div>

          {/* Suggestions */}
          <div className="chat-suggestions">
            <button
              className="suggestion"
              onClick={() => setInput("What are the document requirements for exporting to Italy?")}
            >
              What are the document requirements for exporting to Italy?
            </button>
            <button
              className="suggestion"
              onClick={() => setInput("What is the HS code for clothing?")}
            >
              What is the HS code for clothing?
            </button>
          </div>

          {/* Input */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask me anything about customs regulations..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="send-btn" onClick={handleSend}>
              <Icon path="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </button>
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