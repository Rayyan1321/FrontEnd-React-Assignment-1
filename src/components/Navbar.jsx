import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // 👈 Import CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">EventHub</h2>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/events" className="nav-link">
            Events
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/about" className="nav-link ">
            About Us
          </Link>
          <Link to="/login" className="nav-link login-btn">
            Login
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
