import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { assets } from '../assets/assets';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo-section">
        <img src={assets.logo} alt="Company Logo" className="footer-logo" />
        <p>
          Discover quality products and exceptional customer service at Forever. We’re dedicated to providing you with the best shopping experience.
        </p>
      </div>

      <div className="footer-links-section">
        <p className="footer-title">Company</p>
        <ul className="footer-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="footer-contact-section">
        <p className="footer-title">Contact Us</p>
        <ul className="footer-contact">
          <li><FaPhone /> +1 234 567 890</li>
          <li><FaEnvelope /> contact@forever.com</li>
          <li><FaMapMarkerAlt /> 1234 Forever St, Kandivali West, Mumbai, India</li>
        </ul>
      </div>

      <div className="footer-social-section">
        <p className="footer-title">Follow Us</p>
        <div className="footer-social-icons">
          <a href="https://facebook.com/forever" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com/forever" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com/forever" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-copyright-section">
        <p>© 2024 Forever.com. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
