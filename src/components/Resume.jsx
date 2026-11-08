import React, { useEffect } from 'react';
import { Download, FileText, Award, GraduationCap, CheckCircle, Code } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <GraduationCap size={18} />,
      title: 'Education',
      value: 'B.Tech IT — CGPA 7.62',
    },
    {
      icon: <Award size={18} />,
      title: 'Certifications',
      value: 'Meta Frontend (Coursera)',
    },
    {
      icon: <Code size={18} />,
      title: 'Projects',
      value: '3+ Full-Stack Apps',
    },
    {
      icon: <CheckCircle size={18} />,
      title: 'Problem Solving',
      value: '200+ Coding Problems',
    },
  ];

  const handleDownload = () => {
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
• Meta Frontend Developer Professional Certificate – Coursera
• JavaScript Algorithms & Data Structures – freeCodeCamp

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
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Career Profile</span>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
        </div>

        <div className="glass-card resume-card reveal">
          {/* Animated File Icon */}
          <div className="resume-icon-wrap" aria-hidden="true">
            <FileText size={32} />
          </div>

          <h3 className="resume-heading">Devi P</h3>
          <p className="resume-subtitle">
            B.Tech Information Technology Student · Full-Stack Web Developer
          </p>

          {/* Highlights */}
          <div className="resume-highlights">
            {highlights.map((h, i) => (
              <div key={i} className={`highlight-box reveal delay-${(i + 1) * 100}`}>
                <div className="highlight-icon">{h.icon}</div>
                <div className="highlight-title">{h.title}</div>
                <div className="highlight-value">{h.value}</div>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="btn btn-primary resume-download-btn"
            id="resume-download-btn"
          >
            <Download size={18} />
            Download Resume
          </button>

          <p className="resume-note">
            📄 Downloads as a formatted .txt file · Updated 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
