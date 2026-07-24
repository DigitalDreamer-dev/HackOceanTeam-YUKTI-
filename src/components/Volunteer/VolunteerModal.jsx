import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bubbleSound from "../../assets/bubble.mp3";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import oceanVideo from "../../assets/ocean.mp4";
import "../../styles/volunteer.css";

function VolunteerModal({ isOpen, onClose }) {
    const [bubbles, setBubbles] = useState([]);
    const createBubbles = (e) => {

  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;


  const sound = new Audio(bubbleSound);
  sound.volume = 0.4;
  sound.play();


  const newBubbles = [];

  for(let i=0;i<10;i++){

    newBubbles.push({

      id: Date.now()+i,

      x,
      y,

      size: Math.random()*20+10,

      offset: Math.random()*80-40,

      duration: Math.random()*2+2

    });

  }


  setBubbles((prev)=>[
    ...prev,
    ...newBubbles
  ]);


  setTimeout(()=>{

    setBubbles((prev)=>
      prev.filter(
        bubble =>
        !newBubbles.some(
          item=>item.id===bubble.id
        )
      )
    );

  },3000);

};
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
className="modal-overlay"
onClick={createBubbles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="ocean-video"
          >
            <source src={oceanVideo} type="video/mp4" />
          </video>
          
          <div className="bubble-container">

{
bubbles.map((bubble)=>(

<span

key={bubble.id}

className="click-bubble"

style={{

left:bubble.x,

top:bubble.y,

width:bubble.size,

height:bubble.size,

"--offset":`${bubble.offset}px`,

"--duration":`${bubble.duration}s`

}}

/>

))

}

</div>
          <motion.div
className="glass-form"
onClick={(e)=>e.stopPropagation()}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className="close-btn" onClick={onClose}>
              <FaTimes />
            </button>

            <h2>Volunteer Registration</h2>

            <form>
              <div className="input-box">
                <FaUser />
                <input type="text" placeholder="Full Name" />
              </div>

              <div className="input-box">
                <FaEnvelope />
                <input type="email" placeholder="Email" />
              </div>

              <div className="input-box">
                <FaPhone />
                <input type="text" placeholder="Phone Number" />
              </div>

              <div className="input-box">
                <FaMapMarkerAlt />
                <input type="text" placeholder="City" />
              </div>

              <select>
                <option>Select Event</option>
                <option>Beach Cleanup</option>
                <option>Coral Plantation</option>
                <option>Awareness Drive</option>
              </select>

              <textarea
                rows="4"
                placeholder="Why do you want to volunteer?"
              ></textarea>

              <button className="submit-btn">
                Join Movement
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default VolunteerModal;