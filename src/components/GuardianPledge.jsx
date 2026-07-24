import { useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

import "../styles/forms.css";

export default function GuardianPledge() {
  const [pledged, setPledged] = useState(false);

  return (
    <section className="pledge-section">
      <div className="pledge-card">
        {pledged ? (
          <div className="pledge-success">
            <FaCheckCircle />

            <h2>Ocean Guardian Activated 🌊</h2>

            <p>Thank you for protecting marine ecosystems.</p>

            <div className="badge">⭐ Ocean Guardian Badge ⭐</div>
          </div>
        ) : (
          <>
            <div className="pledge-icon">
              <FaStar />
            </div>

            <h2>Ocean Guardian Pledge</h2>

            <p>
              I promise to reduce pollution, protect marine life and support
              ocean conservation.
            </p>

            <button onClick={() => setPledged(true)}>Take The Pledge</button>
          </>
        )}
      </div>
    </section>
  );
}
