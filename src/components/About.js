import React from 'react';
import { profile } from '../data';
import './About.css';
import { FiMapPin, FiMail } from 'react-icons/fi';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-content">
      <h2 className="about-title">About <span className="highlight">Me</span></h2>
      <p className="about-description">
        Hello! I'm <strong>{profile.name}</strong>, a passionate software and web developer.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <FiMapPin size={22} style={{ color: '#1de9b6' }} />
        <span>{profile.location}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <FiMail size={22} style={{ color: '#1de9b6' }} />
        <a href={`mailto:${profile.email}`} style={{ color: '#1de9b6', textDecoration: 'none' }}>{profile.email}</a>
      </div>
      <p className="about-description">{profile.objective}</p>
    </div>
    <div className="about-image">
      <img src={`/${profile.photo}`} alt={profile.name} />
    </div>
  </section>
);

export default About; 