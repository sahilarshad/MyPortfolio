import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="section">
      <h2 className="neon">Contact</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:sahil.arshad.a@gmail.com">sahil.arshad.a@gmail.com</a>
        </div>
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/sahil-a-485970282/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/sahil-a
          </a>
        </div>
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/sahilarshad" target="_blank" rel="noopener noreferrer">
            github.com/sahilarshad
          </a>
        </div>
      </div>
    </div>
  );
}