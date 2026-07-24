import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import WhyOceansMatter from "./components/WhyOceansMatter";
import LearnOcean from "./components/LearnOcean";
import OceanVisitorGuide from "./components/OceanVisitorGuide";

import PlasticCalculator from "./components/Calculator/PlasticCalculator";
import BeachCleanupMap from "./components/BeachCleanUpMap";
import AdoptCoralReef from "./components/AdoptCoralReef";
import ImpactDashboard from "./components/ImpactDashboard";
import GuardianPledge from "./components/GuardianPledge";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/why-oceans" element={<WhyOceansMatter />} />

        <Route path="/learn" element={<LearnOcean />} />

        <Route
          path="/visitor-guide"
          element={<OceanVisitorGuide />}
        />

        <Route
          path="/calculator"
          element={<PlasticCalculator />}
        />

        <Route
          path="/cleanup-map"
          element={<BeachCleanupMap />}
        />

        <Route
          path="/adopt-coral"
          element={<AdoptCoralReef />}
        />

        <Route
          path="/impact-dashboard"
          element={<ImpactDashboard />}
        />

        <Route
          path="/guardian-pledge"
          element={<GuardianPledge />}
        />

        <Route
          path="/newsletter"
          element={<Newsletter />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;