import { Link } from "react-router-dom";
import { useState } from "react";
import VolunteerModal from "./Volunteer/VolunteerModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="ocean-navbar">
        <div className="nav-brand">
          🌊 HackOcean
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/why-oceans">Why Oceans</Link>
          <Link to="/learn">Learn Ocean</Link>
          <Link to="/visitor-guide">Visitor Guide</Link>

          <Link to="/calculator">Calculator</Link>

          <Link to="/cleanup-map">Cleanup Map</Link>

          <Link to="/adopt-coral">Adopt Coral</Link>

          <Link to="/impact-dashboard">Impact</Link>

          <Link to="/guardian-pledge">Pledge</Link>

          <Link to="/newsletter">Newsletter</Link>

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

// import React from 'react';
// import { Link } from 'react-router-dom';

// // import { useState } from "react";
// // import VolunteerModal from "./VolunteerModal";
// {/* <Link to="#">Volunteer</Link> */}

// export default function Navbar() {
//   return (
//     <nav className="ocean-navbar">
//       <div className="nav-brand">
//         <span>🌊</span> HackOcean
//       </div>

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/why-oceans">Why Oceans</Link>
//         <Link to="/learn">Learn Ocean</Link>
//         <Link to="/visitor-guide">Visitor Guide</Link>

//         <button className="volunteer-btn">
//           Volunteer
//         </button>
//       </div>
//     </nav>
//   );
// }