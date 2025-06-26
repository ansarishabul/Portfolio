import React from 'react';
import { education } from '../data';
import './Education.css';

const Education = () => (
  <section id="education" className="section">
    <h2 className="section-title">My <span className="highlight">Education</span></h2>
    <p className="section-subtitle">My academic journey that has shaped my knowledge and skills</p>
    <div className="education-grid">
      {education.map((edu, idx) => (
        <div className="education-card" key={idx}>
          <img src={`/${edu.image}`} alt={edu.school} className="edu-img" />
          <div className="edu-info">
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>{edu.years} | {edu.location}</p>
            {edu.highlight && <p className="edu-highlight">{edu.highlight}</p>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education; 