import React from "react";
import "../Styles/About.css";
import { assets } from "../assets/assets";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Forever</h1>
        <p>Welcome to Forever! Discover who we are and what we do.</p>
      </div>

      <div className="about-section">
        <div className="about-section-image">
        </div>
        <div className="about-section-content">
          <h2>Who We Are</h2>
          <p>
            Forever is a passionate team of innovators committed to providing top-notch products and services that exceed customer expectations. Our mission is to deliver high-quality solutions while maintaining a strong focus on customer satisfaction.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-section-content">
          <h2>Our Vision</h2>
          <p>
            Our vision at Forever is to lead the industry with creative and innovative products that change the way people interact with technology. We aim to build long-lasting relationships with our customers by offering sustainable and valuable solutions.
          </p>
        </div>
        <div className="about-section-image">
        </div>
      </div>

      <div className="about-footer">
        <p>&copy; 2024 Forever. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default About;
