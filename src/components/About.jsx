import React, { useEffect, useRef } from 'react';
import { GraduationCap, User, Briefcase, MapPin, Mail, Globe, Languages } from 'lucide-react';
import './About.css';

// Scroll reveal hook
const useScrollReveal = (className = 'reveal') => {
  useEffect(() => {
    const els = document.querySelectorAll(`.${className}`);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const About = () => {
  useScrollReveal('reveal');
  useScrollReveal('reveal-left');
  useScrollReveal('reveal-right');

  const stats = [
    { value: '8.8',  label: 'CGPA' },
    { value: '3+',   label: 'Projects Built' },
    { value: '200+', label: 'Problems Solved' },
    { value: '2+',   label: 'Certifications' },
  ];

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      school: 'College of Engineering & Technology (Anna University)',
      year: '2024 – 2028',
      score: 'CGPA: 8.8 / 10.0',
      num: '1',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'State Board Higher Secondary School',
      year: '2020 – 2022',
      score: 'Percentage: 94.5%',
      num: '2',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      school: 'State Board High School',
      year: '2019 – 2020',
      score: 'Percentage: 96.2%',
      num: '3',
    },
  ];

  const personalDetails = [
    { key: 'Full Name',  val: 'Saraswathi Devi P' },
    { key: 'Degree',     val: 'B.Tech Information Technology' },
    { key: 'Email',      val: 'devip.it@gmail.com' },
    { key: 'Phone',      val: '+91 98765 43210' },
    { key: 'Location',   val: 'Tamil Nadu, India' },
    { key: 'Languages',  val: 'English, Tamil' },
    { key: 'Status',     val: 'Final Year Student' },
    { key: 'Availability', val: 'Open to Opportunities' },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">Get To Know Me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={i} className={`stat-item reveal delay-${(i + 1) * 100}`}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="about-grid">
          {/* Left Card: Bio + Personal Details */}
          <div className="glass-card about-card reveal-left">
            {/* Career Objective */}
            <div>
              <div className="about-card-title">
                <Briefcase size={18} />
                Career Objective
              </div>
              <div className="about-divider" />
              <p className="about-bio">
                Passionate <strong>B.Tech Information Technology student</strong> seeking
                an entry-level Software Developer role. I love crafting full-stack web
                applications with <strong>React, Node.js,</strong> and databases.
                Eager to collaborate on real-world products and grow alongside
                innovative engineering teams.
              </p>
            </div>

            {/* Personal Details */}
            <div>
              <div className="about-card-title">
                <User size={18} />
                Personal Details
              </div>
              <div className="about-divider" />
              <div className="details-grid">
                {personalDetails.map((d, i) => (
                  <div key={i} className="detail-item">
                    <span className="detail-key">{d.key}</span>
                    <span className="detail-val">{d.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Education Timeline */}
          <div className="glass-card about-card reveal-right">
            <div>
              <div className="about-card-title">
                <GraduationCap size={18} />
                Education
              </div>
              <div className="about-divider" />
            </div>

            <div className="edu-timeline">
              {education.map((item, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-dot-wrap">
                    <div className="edu-dot">{item.num}</div>
                  </div>
                  <div className="edu-body">
                    <span className="edu-year">{item.year}</span>
                    <h4 className="edu-degree">{item.degree}</h4>
                    <p className="edu-school">{item.school}</p>
                    <span className="edu-score">{item.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
