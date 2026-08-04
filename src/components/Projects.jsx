import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DevPulse AI - Portfolio Analytics',
      image: '/assets/devpulse.png',
      fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      description: 'Developer portfolio platform with live code analytics and project showcase features.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: 'CloudDesk - Task Manager App',
      image: '/assets/clouddesk.png',
      fallbackImage: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80',
      description: 'Kanban-style task management app for team collaboration and workflow tracking.',
      tech: ['React.js', 'SQL', 'Express'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'ShopSphere - E-Commerce Website',
      image: '/assets/shopsphere.png',
      fallbackImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      description: 'Responsive online store with product filtering, shopping cart, and search.',
      tech: ['React.js', 'JavaScript', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="card project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                onError={(e) => { e.target.src = project.fallbackImage; }}
              />
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-tags">
                  {project.tech.map((item, idx) => (
                    <span key={idx} className="tech-pill">{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
