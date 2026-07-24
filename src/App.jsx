import { useState } from "react";

// Components
import VolunteerModal from "./components/Volunteer/VolunteerModal";
import PlasticCalculator from "./components/Calculator/PlasticCalculator";

import AdoptCoralReef from "./components/AdoptCoralReef";
import BeachCleanUpMap from "./components/BeachCleanUpMap";
import Newsletter from "./components/Newsletter";
import ImpactDashboard from "./components/ImpactDashboard";
import GuardianPledge from "./components/GuardianPledge";


function App() {

  const [activeModule, setActiveModule] = useState(null);

  const [showVolunteer, setShowVolunteer] = useState(false);


  const modules = [

    {
      name: "Volunteer",
      action: () => setShowVolunteer(true),
    },

    {
      name: "Plastic Calculator",
      component: <PlasticCalculator />,
    },

    {
      name: "Adopt Coral Reef",
      component: <AdoptCoralReef />,
    },

    {
      name: "Beach Cleanup Map",
      component: <BeachCleanUpMap />,
    },

    {
      name: "Newsletter",
      component: <Newsletter />,
    },

    {
      name: "Impact Dashboard",
      component: <ImpactDashboard />,
    },

    {
      name: "Guardian Pledge",
      component: <GuardianPledge />,
    },

  ];


  const selectedModule = modules.find(
    (module) => module.name === activeModule
  );


  return (

    <div>


      {/* Temporary Module Navigation */}

      <div
        style={{
          background: "#023047",
          padding: "20px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

        {
          modules.map((module) => (

            <button

              key={module.name}

              onClick={() => {

                if(module.action){
                  module.action();
                }
                else{
                  setActiveModule(module.name);
                }

              }}

              style={{
                padding: "12px 25px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                background:
                  activeModule === module.name
                    ? "#ffb703"
                    : "#219ebc",
                color: "white",
                fontWeight: "600",
              }}

            >

              {module.name}

            </button>

          ))
        }


      </div>



      {/* Normal Modules */}

      <div>

        {selectedModule?.component}

      </div>



      {/* Volunteer Modal */}

      <VolunteerModal

        isOpen={showVolunteer}

        onClose={() => setShowVolunteer(false)}

      />


    </div>

  );

}


export default App;