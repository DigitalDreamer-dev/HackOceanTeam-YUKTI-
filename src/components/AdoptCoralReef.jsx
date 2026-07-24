import { useState } from "react";
import { FaHeart, FaLeaf } from "react-icons/fa";

import "../styles/forms.css";

export default function AdoptCoralReef() {
  const [adopted, setAdopted] = useState(false);

  const reefs = [
    {
      name: "Blue Reef",
      location: "Pacific Ocean",
      progress: 65,
    },

    {
      name: "Coral Garden",
      location: "Indian Ocean",
      progress: 40,
    },

    {
      name: "Ocean Paradise",
      location: "Atlantic Ocean",
      progress: 80,
    },
  ];

  return (
    <section className="coral-section">
      <h1>Adopt A Coral Reef 🪸</h1>

      <p>Support coral restoration and track reef recovery.</p>

      <div className="coral-container">
        {reefs.map((reef, index) => (
          <div className="coral-card" key={index}>
            <FaLeaf className="leaf-icon" />

            <h2>{reef.name}</h2>

            <p>{reef.location}</p>

            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${reef.progress}%`,
                }}
              ></div>
            </div>

            <span>Recovery {reef.progress}%</span>

            <button onClick={() => setAdopted(true)}>
              <FaHeart />
              Adopt Reef
            </button>
          </div>
        ))}
      </div>

      {adopted && (
        <div className="adopt-success">
          ❤️ Congratulations!
          <br />
          You are now helping restore a coral reef.
        </div>
      )}
    </section>
  );
}
