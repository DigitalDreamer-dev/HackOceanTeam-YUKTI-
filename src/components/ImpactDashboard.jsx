import { FaUsers, FaTrash, FaWater, FaTree } from "react-icons/fa";

import "../styles/dashboard.css";

export default function ImpactDashboard() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "1250+",
      title: "Ocean Guardians",
    },

    {
      icon: <FaTrash />,
      number: "8.5 Tons",
      title: "Plastic Removed",
    },

    {
      icon: <FaWater />,
      number: "35",
      title: "Beach Cleanups",
    },

    {
      icon: <FaTree />,
      number: "120",
      title: "Corals Restored",
    },
  ];

  return (
    <section className="dashboard-section">
      <h1>Our Ocean Impact 🌊</h1>

      <p>Together we are creating measurable change.</p>

      <div className="dashboard-container">
        {stats.map((item, index) => (
          <div className="impact-card" key={index}>
            <div className="impact-icon">{item.icon}</div>

            <h2>{item.number}</h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
