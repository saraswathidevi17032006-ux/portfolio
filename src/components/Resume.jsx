import React from 'react';
import { Download, FileText, Award, GraduationCap, CheckCircle } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    const resumeText =
`================================================================
                         DEVI P
        B.Tech Information Technology Student
================================================================
Email: devip.it@gmail.com | Phone: +91 98765 43210
Location: Tamil Nadu, India
GitHub: https://github.com
LinkedIn: https://linkedin.com

EDUCATION:
- B.Tech Information Technology (CGPA: 8.8 / 10.0)

SKILLS:
- HTML5, CSS3, JavaScript, React.js, Node.js, MongoDB, SQL, Git, GitHub

PROJECTS:
1. DevPulse AI - Portfolio Analytics Platform
2. CloudDesk - Task Management App
3. ShopSphere - E-Commerce Website
================================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Devi_P_Resume_BTech_IT.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="card resume-card">
          <FileText className="resume-icon" />
          <h2 className="resume-heading">My Resume</h2>
          <p className="resume-subtitle">
            B.Tech Information Technology Student | Full-Stack Web Developer
          </p>

          <div className="resume-highlights">
            <div className="highlight-item">
              <h4><GraduationCap size={16} /> Education</h4>
              <p>B.Tech IT (CGPA 8.8 / 10.0)</p>
            </div>
            <div className="highlight-item">
              <h4><Award size={16} /> Certifications</h4>
              <p>Meta Frontend Developer (Coursera)</p>
            </div>
            <div className="highlight-item">
              <h4><CheckCircle size={16} /> Problem Solving</h4>
              <p>200+ Solved Coding Problems</p>
            </div>
          </div>

          <button onClick={handleDownload} className="btn btn-primary">
            <Download size={18} /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
