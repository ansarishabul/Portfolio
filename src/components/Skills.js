import React from 'react';
import { skills } from '../data';
import './Skills.css';

const SkillGroup = ({ title, items, colorClass }) => (
  <div className="skill-group-block">
    <div className="skill-group-title">
      <span className={`skill-bullet ${colorClass}`}></span>
      <span className="skill-group-heading">{title}</span>
    </div>
    <div className="skill-pills">
      {items.map((item, idx) => (
        <span className={`skill-pill ${colorClass}`} key={idx}>{item}</span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="section">
    <h2 className="section-title">Skills</h2>
    <p className="section-subtitle">Here are the technologies and tools I've been working with</p>
    <div className="skills-block-list">
      <SkillGroup title="Programming Languages" items={skills.programming} colorClass="color1" />
      <hr />
      <SkillGroup title="Web Development" items={skills.web} colorClass="color2" />
      <hr />
      <SkillGroup title="Core Subjects" items={skills.core} colorClass="color3" />
      <hr />
      <SkillGroup title="Tools & Platforms" items={skills.tools} colorClass="color5" />
    </div>
  </section>
);

export default Skills; 