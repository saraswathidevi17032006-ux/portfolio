import React from 'react';
import { ArrowRight, Mail, Download, Github, Linkedin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeText =
`DEVI P - RESUME
Role: B.Tech Information Technology Student & Full-Stack Developer
Email: devip.it@gmail.com | Phone: +91 98765 43210
GitHub: github.com/devi-p-dev | LinkedIn: linkedin.com/in/devi-p-it

SUMMARY:
Information Technology student with skills in React.js, Node.js, JavaScript, MongoDB, and SQL.

SKILLS:
Frontend: React.js, HTML5, CSS3, JavaScript
Backend: Node.js, Express.js
Databases: MongoDB, SQL
Tools: Git, GitHub, VS Code

EDUCATION:
B.Tech Information Technology (CGPA: 8.8 / 10.0)`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Devi_P_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="section hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Devi P</h1>
          <p className="hero-role">B.Tech Information Technology Student</p>
          <p className="hero-intro">
            A passionate student developer building clean, responsive web applications using modern technologies like React.js, Node.js, MongoDB, and SQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={16} /> Contact Me
            </a>
            <button onClick={handleDownloadResume} className="btn btn-outline">
              <Download size={16} /> Resume
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:devip.it@gmail.com" className="social-btn" title="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src="/assets/profile.png"
            alt="Devi P"
            className="hero-avatar"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
