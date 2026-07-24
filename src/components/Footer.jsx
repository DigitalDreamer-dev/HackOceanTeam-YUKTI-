import React from 'react';
import { motion } from 'framer-motion';
import '../styles/footer.css';

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <p>© 2026 HackOceanTeam - YUKTI. All rights reserved.</p>
        <p>Together we can protect our global oceans and marine life.</p>
      </div>
    </motion.footer>
  );
}