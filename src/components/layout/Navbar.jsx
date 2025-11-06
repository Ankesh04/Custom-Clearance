import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Logo = () => (
  <div className="logo">
    <div className="logo-icon-wrapper">
      <span className="logo-icon-text">C</span>
    </div>
    <span className="logo-text">Custom Clearance</span>
  </div>
);

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => navigate(path);
  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" aria-label="Home" className="logo-link">
          <Logo />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it Works</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#countries" onClick={() => setMenuOpen(false)}>Countries</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        </nav>

        {/* Auth Buttons / User Menu */}
        <div className="header-actions">
          {!user ? (
            <>
              <button
                className="btn-ghost desktop-only"
                onClick={() => handleNavigate("/login")}
              >
                Login
              </button>
              <button
                className="btn-accent"
                onClick={() => handleNavigate("/login?mode=signup")}
              >
                Get Started
              </button>
            </>
          ) : (
            <div className="user-menu-wrapper">
              <button
                className="user-avatar-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  src={user.photoURL || "https://placehold.co/40x40?text=U"}
                  alt="User avatar"
                  className="user-avatar"
                />
              </button>

              {dropdownOpen && (
                <div className="user-dropdown">
                  <p className="user-name">{user.displayName || "User"}</p>
                  <p className="user-email">{user.email}</p>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
