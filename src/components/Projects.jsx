import React, { useEffect } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'DevPulse AI — Portfolio Analytics',
    description:
      'A full-featured developer portfolio platform with real-time code analytics, project showcase, and visitor insights dashboard built with modern stack.',
    image: '/assets/devpulse.png',
    fallback:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/devi-p-dev',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'CloudDesk — Kanban Task Manager',
    description:
      'Team collaboration tool with Kanban-style boards, drag-and-drop task management, user authentication, and real-time workflow tracking.',
    image: '/assets/clouddesk.png',
    fallback:
      'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'SQL', 'Express.js', 'CSS3'],
    github: 'https://github.com/devi-p-dev',
    demo: 'https://example.com',
    featured: false,
  },
  {
    id: 3,
    title: 'ShopSphere — E-Commerce Website',
    description:
      'Fully responsive online store with product filtering, dynamic shopping cart, wishlist, order management, and smooth checkout experience.',
    image: '/assets/shopsphere.png',
    fallback:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'JavaScript', 'CSS3', 'Context API'],
    github: 'https://github.com/devi-p-dev',
    demo: 'https://example.com',
    featured: false,
  },
];

const Projects = () => {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`glass-card project-card reveal delay-${(i + 1) * 100}`}
              aria-label={project.title}
            >
              {/* Image */}
              <div className="project-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => { e.target.src = project.fallback; }}
                  loading="lazy"
                />

                {/* Number badge */}
                <div className="project-num" aria-hidden="true">
                  {String(project.id).padStart(2, '0')}
                </div>

                {project.featured && (
                  <div className="project-featured">
                    <Star size={10} style={{ display: 'inline', marginRight: 3 }} />
                    Featured
                  </div>
                )}

                {/* Hover overlay */}
                <div className="project-overlay" aria-hidden="true">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-link"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-pills">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    id={`project-${project.id}-github`}
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    id={`project-${project.id}-demo`}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
