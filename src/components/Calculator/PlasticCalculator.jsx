import { useState } from "react";
import { FaRecycle, FaTrash, FaLightbulb } from "react-icons/fa";

import "../../styles/forms.css";

function PlasticCalculator() {
  const [data, setData] = useState({
    bottles: 0,
    bags: 0,
    containers: 0,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,

      [e.target.name]: Number(e.target.value),
    });
  };

  const calculateFootprint = () => {
    const total = data.bottles * 10 + data.bags * 5 + data.containers * 20;

    let message = "";

    if (total < 50) {
      message = "Great! Your plastic usage is low 🌱";
    } else if (total < 150) {
      message = "Moderate usage. Try reducing single-use plastic ♻️";
    } else {
      message = "High plastic footprint. Take action now 🌊";
    }

    setResult({
      total,

      message,
    });
  };

  return (
    <section className="calculator-section">
      <div className="calculator-card">
        <div className="calc-title">
          <FaRecycle />

          <h2>Plastic Footprint Calculator</h2>
        </div>

        <p>
          Calculate your plastic usage and get personalized tips to protect
          oceans.
        </p>

        <div className="calc-input">
          <label>Plastic Bottles per week</label>

          <input type="number" name="bottles" onChange={handleChange} />
        </div>

        <div className="calc-input">
          <label>Plastic Bags per week</label>

          <input type="number" name="bags" onChange={handleChange} />
        </div>

        <div className="calc-input">
          <label>Plastic Containers per week</label>

          <input type="number" name="containers" onChange={handleChange} />
        </div>

        <button onClick={calculateFootprint}>Calculate Impact</button>

        {result && (
          <div className="result-box">
            <h3>
              Your Plastic Score:
              {result.total}
            </h3>

            <p>{result.message}</p>

            <div className="tip">
              <FaLightbulb />
              Use reusable bottles, bags and avoid single-use plastics.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PlasticCalculator;