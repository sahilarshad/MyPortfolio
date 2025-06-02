import React from 'react';
import './Certificates.css';
import { FaCertificate, FaAws, FaLinkedin } from 'react-icons/fa';

const certificates = [
  {
    name: 'AWS Badges - Amazon Educate',
    link: 'https://www.credly.com/users/sahil-a',
    icon: <FaAws className="cert-icon" />
  },
  {
    name: 'Business Analysis Foundations',
    link: 'https://www.linkedin.com/learning/certificates/e352b7b155c6c35b41ee40b4c452f531102b79b7ed9',
    icon: <FaLinkedin className="cert-icon" />
  },
  {
    name: 'Data Analytics Foundations',
    link: 'https://www.linkedin.com/learning/certificates/abaaccc5f20ea7c3e8fcba621f2326c0e66644df5ed37c0b72f2b837e1252557',
    icon: <FaLinkedin className="cert-icon" />
  },
  {
    name: 'Career Skills in Data Analytics',
    link: 'https://www.linkedin.com/learning/certificates/f029280ecc140ad0270771aba8a9c2147e8224e7423dee587530632ac78aa08a',
    icon: <FaLinkedin className="cert-icon" />
  }
];

export default function Certificates() {
  return (
    <div className="section">
      <h2 className="neon">Certificates</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            key={index}
          >
            {cert.icon}
            <span>{cert.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}