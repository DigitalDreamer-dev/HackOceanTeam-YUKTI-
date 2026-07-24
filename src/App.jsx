import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import PlasticCalculator from "./components/Calculator/PlasticCalculator";
import AdoptCoralReef from "./components/AdoptCoralReef";
import BeachCleanupMap from "./components/BeachCleanUpMap";
import Newsletter from "./components/Newsletter";
import ImpactDashboard from "./components/ImpactDashboard";
import GuardianPledge from "./components/GuardianPledge";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/calculator"
          element={<PlasticCalculator />}
        />

        <Route
          path="/adopt-coral"
          element={<AdoptCoralReef />}
        />

        <Route
          path="/cleanup-map"
          element={<BeachCleanupMap />}
        />

        <Route
          path="/newsletter"
          element={<Newsletter />}
        />

        <Route
          path="/impact-dashboard"
          element={<ImpactDashboard />}
        />

        <Route
          path="/guardian-pledge"
          element={<GuardianPledge />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;