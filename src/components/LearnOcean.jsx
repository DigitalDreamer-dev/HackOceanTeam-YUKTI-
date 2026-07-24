import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Navbar import kiya gaya hai

export default function LearnOcean() {
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
      paddingTop: '120px',
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
    title: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px', textAlign: 'center' },
    subtitle: { color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', marginBottom: '30px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
    box: {
      background: 'rgba(0, 180, 216, 0.1)',
      border: '1px solid rgba(0, 180, 216, 0.3)',
      padding: '20px',
      borderRadius: '16px'
    },
    boxTitle: { color: '#90e0ef', fontSize: '1.2rem', marginBottom: '10px' },
    boxText: { color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.5' }
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <motion.div 
        style={styles.card}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.title}>Learn About the Ocean</h1>
        <p style={styles.subtitle}>Deep dive into ocean facts, marine life, and current conservation threats.</p>

        <div style={styles.grid}>
          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Coral Reefs</h3>
            <p style={styles.boxText}>Often called the rainforests of the sea, supporting 25% of all marine life.</p>
          </div>
          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Deep Sea Mysteries</h3>
            <p style={styles.boxText}>Regions like the Mariana Trench remain largely unexplored and full of unique creatures.</p>
          </div>
          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Plastic Pollution</h3>
            <p style={styles.boxText}>Millions of tons of waste threaten marine ecosystems globally every year.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}