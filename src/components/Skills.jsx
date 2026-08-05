import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const SKILLS = [
  {
    name: 'HTML5',      icon: '🌐', level: 95,
    desc: 'Semantic markup, Forms & Layouts',
    color: '#e34c26', category: 'Frontend',
  },
  {
    name: 'CSS3',       icon: '🎨', level: 90,
    desc: 'Flexbox, Grid & Responsive Design',
    color: '#2965f1', category: 'Frontend',
  },
  {
    name: 'JavaScript', icon: '⚡', level: 88,
    desc: 'ES6+, Async/Await & DOM Manipulation',
    color: '#f7df1e', category: 'Frontend',
  },
  {
    name: 'React.js',   icon: '⚛️', level: 85,
    desc: 'Components, Hooks & State Management',
    color: '#61dbfb', category: 'Frontend',
  },
  {
    name: 'Node.js',    icon: '🟢', level: 80,
    desc: 'Express APIs & Server-side Logic',
    color: '#68a063', category: 'Backend',
  },
  {
    name: 'MongoDB',    icon: '🍃', level: 78,
    desc: 'NoSQL Schemas, CRUD & Aggregation',
    color: '#4db33d', category: 'Backend',
  },
  {
    name: 'SQL',        icon: '🗄️', level: 82,
    desc: 'Complex Queries, Joins & Optimization',
    color: '#f29111', category: 'Backend',
  },
  {
    name: 'Git',        icon: '🔀', level: 88,
    desc: 'Version Control & Branch Management',
    color: '#f34f29', category: 'Tools',
  },
  {
    name: 'GitHub',     icon: '🐙', level: 90,
    desc: 'Repositories, PRs & Open Source',
    color: '#6c63ff', category: 'Tools',
  },
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Tools'];

const SkillCard = ({ skill, visible }) => {
  return (
    <div className="glass-card skill-card reveal">
      <div className="skill-top">
        <div
          className="skill-icon-badge"
          style={{ background: `${skill.color}20`, border: `1px solid ${skill.color}40` }}
        >
          {skill.icon}
        </div>
        <div className="skill-info">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-desc">{skill.desc}</div>
        </div>
        <div className="skill-pct">{skill.level}%</div>
      </div>

      <div className="skill-progress-wrap">
        <div className="progress-track">
          <div
            className={`progress-fill ${visible ? 'animated' : ''}`}
            style={{ '--target-width': `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [barsVisible, setBarsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for progress bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const filtered = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-tag">My Technical Arsenal</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter reveal delay-100">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              id={`skills-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} visible={barsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
