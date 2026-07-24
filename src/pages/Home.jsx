import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import Navbar from '../Components/Navbar';

export default function Home() {
  const [ripples, setRipples] = useState([]);

  // Bubble pop sound generate karne ke liye Web Audio API function
  const playBubbleSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.log("Audio not supported");
    }
  };

  
  const handlePointerInteraction = (e) => {
    
    if (e.type === 'click') {
      playBubbleSound();
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev.slice(-10), newRipple]); 
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div 
      className="home-container" 
      onClick={handlePointerInteraction}
      onMouseMove={handlePointerInteraction}
    >
      
      {/* Top Navbar Component */}
      <Navbar />

      {/* Dynamic Cursor Waves / Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="water-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      {/* Background Floating Bubbles & Marine Life */}
      <div className="bubble-background">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>

        <div className="swimming-creature fish-1">🐠</div>
        <div className="swimming-creature tortoise">🐢</div>
        <div className="swimming-creature fish-2">🐟</div>
        <div className="swimming-creature shark">🦈</div>
      </div>

      {/* Ocean Reefs Footer */}
      <div className="ocean-reef-footer">
        <span>🪸</span><span>🌿</span><span>🪸</span><span>🌿</span><span>🪸</span><span>🌿</span><span>🪸</span>
      </div>

      {/* Main Glassmorphism Card */}
      <motion.div
        className="ocean-hero-card"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        onClick={(e) => e.stopPropagation()} // Card ke andar click karne par background wave trigger na ho
      >
        <h1 className="hero-title">Welcome to HackOcean 🌊</h1>
        <p className="hero-subtitle">
          Explore the mysteries of the deep sea, learn about marine conservation, and join us in protecting our oceans.
        </p>
        <div className="hero-buttons">
          <Link to="/why-oceans" className="hero-btn primary-btn">Why Oceans Matter</Link>
          <Link to="/learn" className="hero-btn secondary-btn">Start Learning</Link>
        </div>
      </motion.div>

    </div>
  );
}