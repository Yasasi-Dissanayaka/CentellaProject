import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import WeeklyPlan from "./WeeklyPlan";
import Products from "./Products";  // ✅ Correct import
import Pricing from "./Pricing";
import Contact from "./Contact";

// Navbar Component
function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Weekly Plan", path: "/weekly-plan" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#222",
        color: "#fff",
        padding: "10px 20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Brand Logo */}
        <div style={{ fontWeight: "700", fontSize: "1.5rem", color: "#fff" }}>
          Centella 🌿
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: "flex", gap: "20px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#16a34a")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="mobile-menu-button"
          style={{ display: "none", cursor: "pointer" }}
          onClick={toggleMobileMenu}
        >
          <div
            style={{ width: "25px", height: "3px", background: "#fff", margin: "5px 0" }}
          ></div>
          <div
            style={{ width: "25px", height: "3px", background: "#fff", margin: "5px 0" }}
          ></div>
          <div
            style={{ width: "25px", height: "3px", background: "#fff", margin: "5px 0" }}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 0",
            background: "#222",
            gap: "15px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMobileMenu}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                padding: "8px 20px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#16a34a")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 992px) {
            .desktop-menu { display: none; }
            .mobile-menu-button { display: block; }
          }
        `}
      </style>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/weekly-plan" element={<WeeklyPlan />} />
          <Route path="/products" element={<Products />} /> {/* ✅ Fixed */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
