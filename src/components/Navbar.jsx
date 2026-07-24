import { Link } from "react-router-dom";
import { useState } from "react";
import VolunteerModal from "./Volunteer/VolunteerModal";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="ocean-navbar">

        <div className="nav-brand">
          🌊 HackOcean
        </div>

        {/* Hamburger */}
        <div 
          className="menu-icon"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>


        <div className={`nav-links ${menu ? "active" : ""}`}>

          <Link to="/" onClick={()=>setMenu(false)}>Home</Link>

          <Link to="/why-oceans" onClick={()=>setMenu(false)}>
            Why Oceans
          </Link>

          <Link to="/learn" onClick={()=>setMenu(false)}>
            Learn Ocean
          </Link>

          <Link to="/visitor-guide" onClick={()=>setMenu(false)}>
            Visitor Guide
          </Link>

          <Link to="/calculator" onClick={()=>setMenu(false)}>
            Calculator
          </Link>

          <Link to="/cleanup-map" onClick={()=>setMenu(false)}>
            Cleanup Map
          </Link>

          <Link to="/adopt-coral" onClick={()=>setMenu(false)}>
            Adopt Coral
          </Link>

          <Link to="/impact-dashboard" onClick={()=>setMenu(false)}>
            Impact
          </Link>

          <Link to="/guardian-pledge" onClick={()=>setMenu(false)}>
            Pledge
          </Link>

          <Link to="/newsletter" onClick={()=>setMenu(false)}>
            Newsletter
          </Link>


          <button
            className="volunteer-btn"
            onClick={() => setOpen(true)}
          >
            Volunteer
          </button>

        </div>

      </nav>


      <VolunteerModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </>
  );
}