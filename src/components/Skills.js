import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Skills.css';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'HTML/CSS', 'SQL']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['ReactJS', 'Node.js', 'Flask', 'Django', 'Bootstrap']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Jira', 'Scrum', 'MongoDB', 'MySQL', 'Excel']
  },
  {
    category: 'Data Analysis',
    items: ['Pandas', 'NumPy', 'basic ML models']
  }
];

export default function Skills() {
  return (
    <div className="section">
      <h2 className="neon">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="skill-icon" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}