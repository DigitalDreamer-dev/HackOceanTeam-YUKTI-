import { useState } from "react";
import VolunteerModal from "./components/Volunteer/VolunteerModal";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <VolunteerModal
      isOpen={open}
      onClose={() => setOpen(false)}
    />
  );
}

export default App;