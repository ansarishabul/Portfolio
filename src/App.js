import React from 'react';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FiUser, FiBook, FiCpu, FiGrid, FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <h1>MD SHABUL <span className="highlight">ANSARI</span></h1>
          <ul>
            <li><a href="#about"><FiUser style={{marginRight: '6px'}}/>About me</a></li>
            <li><a href="#education"><FiBook style={{marginRight: '6px'}}/>Education</a></li>
            <li><a href="#skills"><FiCpu style={{marginRight: '6px'}}/>Skills</a></li>
            <li><a href="#projects"><FiGrid style={{marginRight: '6px'}}/>Projects</a></li>
            <li><a href="#contact"><FiMail style={{marginRight: '6px'}}/>Contact</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer-bar">
        <div className="footer-content">
          <div className="footer-left">
            <a href="mailto:shabulansari2003@gmail.com" className="footer-link"><FiMail size={20} style={{marginRight: '8px'}}/>shabulansari2003@gmail.com</a>
            <a href="https://github.com/ansarishabul" className="footer-icon" target="_blank" rel="noopener noreferrer"><FiGithub size={20}/></a>
            <a href="https://www.linkedin.com/in/md-shabul-ansari-470879232/" className="footer-icon" target="_blank" rel="noopener noreferrer"><FiLinkedin size={20}/></a>
            <a href="https://www.instagram.com/md_shabul_ansari/" className="footer-icon" target="_blank" rel="noopener noreferrer"><FiInstagram size={20}/></a>
          </div>
          <div className="footer-right">
            &copy; {new Date().getFullYear()} MD SHABUL ANSARI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
