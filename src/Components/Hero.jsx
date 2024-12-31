import React from 'react';
import { assets } from '../assets/assets';
import '../Styles/Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={assets.hero_img} alt="Hero" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-text">
            <h1 className="hero-title">Welcome to Your Shopping Destination!</h1>
            <p className="hero-subtitle">Find the best deals and products for you!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
