import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const NAV_LINKS = [
  { name: 'Home',     href: '#home' },
  { name: 'About',    href: '#about' },
  { name: 'Skills',   href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume',   href: '#resume' },
  { name: 'Contact',  href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        {/* Logo & Tagline */}
        <a href="#home" className="footer-logo" aria-label="Back to top">
          Devi.dev
        </a>
        <p className="footer-tagline">
          B.Tech IT Student · Full-Stack Developer · Open to Opportunities
        </p>

        {/* Nav Links */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="footer-socials" aria-label="Social links">
          <a
            href="https://github.com/devi-p-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn github"
            aria-label="GitHub"
            title="GitHub"
            id="footer-github"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/devi-p-it"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn linkedin"
            aria-label="LinkedIn"
            title="LinkedIn"
            id="footer-linkedin"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:devip.it@gmail.com"
            className="footer-social-btn mail"
            aria-label="Email"
            title="Email"
            id="footer-email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="footer-divider" />

        {/* Bottom Row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>Devi P</strong> — All rights reserved.
          </p>
          <p className="footer-made">
            Made with <span className="footer-heart">♥</span> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
