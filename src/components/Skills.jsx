import React from 'react';
import './Skills.css';

const Skills = () => {
  // Required skills list: HTML, CSS, JavaScript, React, Node.js, MongoDB, Git, GitHub, SQL
  const skillsList = [
    { name: 'HTML5', level: 95, icon: '🌐', desc: 'Semantic tags, Forms & Layouts' },
    { name: 'CSS3', level: 90, icon: '🎨', desc: 'Flexbox, Grid & Responsive Design' },
    { name: 'JavaScript', level: 88, icon: '⚡', desc: 'ES6+, Async/Await & DOM' },
    { name: 'React.js', level: 85, icon: '⚛️', desc: 'Components, Hooks & State' },
    { name: 'Node.js', level: 80, icon: '🟢', desc: 'Express APIs & Server Logic' },
    { name: 'MongoDB', level: 78, icon: '🍃', desc: 'NoSQL Schemas & CRUD' },
    { name: 'SQL', level: 82, icon: '🗄️', desc: 'Queries, Joins & Tables' },
    { name: 'Git', level: 88, icon: '🔀', desc: 'Version control & Branching' },
    { name: 'GitHub', level: 90, icon: '🐙', desc: 'Repo management & Push/Pull' }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Technical Skills</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillsList.map((skill) => (
            <div key={skill.name} className="card skill-card">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-info">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level-text">{skill.level}% Proficiency</div>
                </div>
              </div>

              <p className="skill-desc">{skill.desc}</p>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
