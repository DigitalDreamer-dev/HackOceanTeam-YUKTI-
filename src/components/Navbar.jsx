import React from 'react';
import { Link } from 'react-router-dom';

// import { useState } from "react";
// import VolunteerModal from "./VolunteerModal";
{/* <Link to="#">Volunteer</Link> */}

export default function Navbar() {
  return (
    <nav className="ocean-navbar">
      <div className="nav-brand">
        <span>🌊</span> HackOcean
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/why-oceans">Why Oceans</Link>
        <Link to="/learn">Learn Ocean</Link>
        <Link to="/visitor-guide">Visitor Guide</Link>

        <button className="volunteer-btn">
          Volunteer
        </button>
      </div>
    </nav>
  );
}