import React from 'react';
import { projects } from '../data';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="section">
    <h2 className="section-title">My <span className="highlight">Projects</span></h2>
    <p className="section-subtitle">Here are some of my recent projects that showcase my skills and experience.</p>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          {project.image && (
            <div className="project-image-wrapper">
              <img src={`/${project.image}`} alt={project.name} className="project-image" />
            </div>
          )}
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 