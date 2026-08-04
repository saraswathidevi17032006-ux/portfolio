import React from 'react';
import { GraduationCap, Briefcase, User, MapPin, Mail, Globe, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      school: 'College of Engineering & Technology (Anna University)',
      year: '2022 - 2026',
      score: 'CGPA: 8.8 / 10.0'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'State Board Higher Secondary School',
      year: '2020 - 2022',
      score: 'Percentage: 94.5%'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      school: 'State Board High School',
      year: '2019 - 2020',
      score: 'Percentage: 96.2%'
    }
  ];

  const personalDetails = [
    { label: 'Name', value: 'Devi P' },
    { label: 'Degree', value: 'B.Tech IT' },
    { label: 'Email', value: 'devip.it@gmail.com' },
    { label: 'Location', value: 'Tamil Nadu, India' },
    { label: 'Languages', value: 'English, Tamil' },
    { label: 'Status', value: 'Final Year Student' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Career Objective & Personal Info */}
          <div className="card about-box">
            <h3>Career Objective</h3>
            <p className="bio-text">
              Passionate <strong>B.Tech Information Technology student</strong> seeking an entry-level Software Developer role. Skilled in building full-stack web applications with React, Node.js, and SQL/MongoDB databases. Eager to solve real-world problems through code.
            </p>

            <h3>Personal Details</h3>
            <div className="details-list">
              {personalDetails.map((item, index) => (
                <div key={index} className="detail-row">
                  <span className="detail-label">{item.label}:</span>
                  <span className="detail-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="card about-box">
            <h3>Education</h3>
            <div className="education-timeline">
              {education.map((item, index) => (
                <div key={index} className="edu-card">
                  <span className="edu-year">{item.year}</span>
                  <h4 className="edu-title">{item.degree}</h4>
                  <p className="edu-school">{item.school}</p>
                  <span className="edu-score">{item.score}</span>
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
