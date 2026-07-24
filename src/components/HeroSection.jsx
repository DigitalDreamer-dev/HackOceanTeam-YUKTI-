import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

export default function HeroSection() {
  return (
    <section className="ocean-hero-container">
      {/* Left Half: Image & Main Text */}
      <div className="ocean-hero-left">
        <div className="ocean-overlay">
          <div className="top-brand">OCEAN</div>
          <div className="hero-main-title-box">
            <h1 className="hero-huge-title">
              SAVE<br />
              THE<br />
              OCEANS
            </h1>
            <p className="hero-desc">
              Campaigning to end ocean exploitation and ensure a healthy ocean future.
            </p>
          </div>
          <div className="hero-slider-nav">
            <span className="arrow-btn">←</span>
            <span className="arrow-btn">→</span>
            <span className="play-icon">▶</span>
          </div>
        </div>
      </div>

      {/* Right Half: Blue Panel & Call to Action */}
      <div className="ocean-hero-right">
        <div className="right-top-links">
          <span>PROGRAMS</span>
          <span>ABOUT US</span>
          <span>BLOG</span>
          <span>TAKE ACTION</span>
        </div>

        <div className="right-center-content">
          <div className="current-badge">CURRENT</div>
          <h3 className="hashtag-text">#protectourocean</h3>
          <h2 className="join-heading">
            JOIN<br />
            THE MOVEMENT<br />
            TO PROTECT<br />
            OUR <span className="highlight-blue-text">OCEAN</span>
          </h2>
          <div className="donate-link-box">
            <a href="#donate" className="donate-action-link">
              Donate <span>→</span>
            </a>
          </div>
        </div>

        <div className="right-footer-credit">
          DESIGN BY PIXELCOUNTRY
        </div>
      </div>
    </section>
  );
}