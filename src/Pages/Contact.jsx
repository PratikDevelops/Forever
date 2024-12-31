import React, { useState } from "react";
import "../Styles/Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus("Thank you for reaching out!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>

      <div className="contact-info">
        <div className="info-item">
          <FaPhone className="info-icon" />
          <p>+1 234 567 890</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <p>contact@forever.com</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <p>1234 Forever St, Kandivali West, Mumbai, India</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Kandivali West Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3554043600717!2d72.85887121497183!3d19.219869487053344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cc698fd431ab%3A0x3000f8b19e836c28!2sKandivali%20West%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1671461975207"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

     
      <div className="social-media-links">
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

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactPage;
