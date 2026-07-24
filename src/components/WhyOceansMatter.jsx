import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Navbar import kiya gaya hai

export default function WhyOceanMatter() {
  const styles = {
    page: {
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000c1a, #001e3f, #0077b6)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#fff',
      fontFamily: "'Segoe UI', sans-serif",
      paddingTop: '120px', // Navbar ke neeche space rakhne ke liye
      paddingBottom: '40px',
      boxSizing: 'border-box'
    },
    card: {
      background: 'rgba(10, 25, 47, 0.75)',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '24px',
      padding: '40px',
      width: '90%',
      maxWidth: '900px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
      zIndex: 10
    },
    title: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '15px', textAlign: 'center', color: '#00ffff' },
    desc: { fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6', textAlign: 'center' }
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <motion.div 
        style={styles.card}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.title}>Why Oceans Matter</h1>
        <p style={styles.desc}>
          Oceans cover over 70% of the Earth's surface. They produce over half of the oxygen in our atmosphere, regulate global climate systems, and provide livelihoods to billions of people worldwide. Protecting them is essential for our own survival.
        </p>
      </motion.div>
    </div>
  );
}