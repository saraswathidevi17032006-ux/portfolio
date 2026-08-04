import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:devip.it@gmail.com" title="Email">
            <Mail size={20} />
          </a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Devi P - B.Tech Information Technology Student
        </p>
      </div>
    </footer>
  );
};

export default Footer;
