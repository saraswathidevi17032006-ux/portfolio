import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Download, Github, Linkedin, Code2 } from 'lucide-react';
import './Hero.css';

// Typewriter hook
const ROLES = [
  'Full-Stack Developer',
  'React.js Enthusiast',
  'Problem Solver',
  'B.Tech IT Student',
];

const useTypewriter = (words, speed = 90, pause = 1800) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = isDeleting ? speed / 2 : speed;

    const timer = setTimeout(() => {
      setText(prev =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(i => (i + 1) % words.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
};

// Floating particle positions
const PARTICLES = [
  { top: '15%', left: '8%',  dur: '9s',  delay: '0s' },
  { top: '25%', left: '85%', dur: '13s', delay: '1s' },
  { top: '70%', left: '5%',  dur: '11s', delay: '2s' },
  { top: '60%', left: '90%', dur: '8s',  delay: '0.5s' },
  { top: '85%', left: '20%', dur: '14s', delay: '3s' },
  { top: '40%', left: '92%', dur: '10s', delay: '1.5s' },
  { top: '10%', left: '50%', dur: '12s', delay: '2.5s' },
  { top: '80%', left: '65%', dur: '9s',  delay: '0.8s' },
];

const Hero = () => {
  const typedText = useTypewriter(ROLES);

  const handleDownloadResume = () => {
    const resumeContent = `================================================================
                          Saraswathi Devi P
              B.Tech Information Technology Student
================================================================
📧 Email    : devip.it@gmail.com
📞 Phone    : +91 98765 43210
📍 Location : Tamil Nadu, India
🔗 GitHub   : github.com/saraswathidevi17032006-ux
🔗 LinkedIn : linkedin.com/in/devi-p-it

OBJECTIVE
---------
Passionate B.Tech Information Technology student seeking an
entry-level Software Developer role. Skilled in building
full-stack web applications with React, Node.js, and databases.

EDUCATION
---------
• B.Tech Information Technology       CGPA: 7.62 / 10.0
  College of Engineering & Technology (Anna University), 2024–2028

• Higher Secondary Certificate (HSC)   94.5%
  State Board Higher Secondary School, 2020–2022

• Secondary School Certificate (SSLC)  96.2%
  State Board High School, 2019–2020

SKILLS
------
Frontend  : React.js, HTML5, CSS3, JavaScript (ES6+)
Backend   : Node.js, Express.js
Databases : MongoDB, SQL (MySQL/PostgreSQL)
Tools     : Git, GitHub, VS Code, Postman

PROJECTS
--------
1. TO-DO List — Task Management Application
   Tech: React.js, CSS3, JavaScript, Vite
   Interactive task manager with authentication and progress tracking.

2. CloudDesk — Kanban Task Manager
   Tech: React.js, SQL, Express.js
   Team collaboration tool with workflow tracking & drag-drop.

3. ShopSphere — E-Commerce Website
   Tech: React.js, JavaScript, CSS3
   Responsive store with cart, filtering, and product search.

CERTIFICATIONS
--------------
• Meta Frontend Developer – Coursera
• JavaScript Algorithms – freeCodeCamp

================================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Devi_P_Resume_BTech_IT.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="particles">
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{ top: p.top, left: p.left, '--dur': p.dur, '--delay': p.delay }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-content">
        {/* ── LEFT: Text ──────────────────────────────────────────────── */}
        <div className="hero-text-side">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for Opportunities
          </div>

          <p className="hero-greeting">Hello, I'm</p>
          <h4 className="hero-name">Saraswathi Devi P</h4>

          <div className="hero-role-wrap">
            <span className="hero-role-static">I'm a </span>
            <span className="hero-role-typed">{typedText}</span>
            <span className="hero-cursor" aria-hidden="true" />
          </div>

          <p className="hero-intro">
            A passionate <strong>B.Tech IT student</strong> building clean, responsive
            web applications using modern technologies like React.js, Node.js, MongoDB,
            and SQL. I turn ideas into elegant digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" id="hero-view-projects">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-outline" id="hero-contact">
              <Mail size={16} /> Contact Me
            </a>
            <button
              onClick={handleDownloadResume}
              className="btn btn-outline"
              id="hero-download-resume"
            >
              <Download size={16} /> Resume
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/saraswathidevi17032006-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/devi-p-it"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:devip.it@gmail.com"
              className="hero-social-btn"
              title="Email"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#skills"
              className="hero-social-btn"
              title="Skills"
              aria-label="View Skills"
            >
              <Code2 size={20} />
            </a>
          </div>
        </div>

        {/* ── RIGHT: Image ─────────────────────────────────────────────── */}
        <div className="hero-image-side">
          <div className="hero-image-wrapper">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-ring" aria-hidden="true">
              <div className="hero-ring-inner" />
            </div>
            <img
              src="/assets/WhatsApp Image 2026-09-03 at 10.30.44 AM.jpeg"
              alt="Devi P — B.Tech IT Student"
              className="hero-avatar"
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80';
              }}
            />

            {/* Floating stat pills */}
            <div className="hero-stats" aria-label="Quick stats">
              <div className="hero-stat-pill">
                <span>7.62</span> CGPA
              </div>
              <div className="hero-stat-pill">
                <span>3+</span> Projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
