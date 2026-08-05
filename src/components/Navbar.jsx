import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: 'Home',     href: '#home' },
    { name: 'About',    href: '#about' },
    { name: 'Skills',   href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume',   href: '#resume' },
    { name: 'Contact',  href: '#contact' },
  ];

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container navbar-content">
        {/* Logo */}
        <a href="#home" className="logo" aria-label="Home">
          Devi.dev
        </a>

        {/* Navigation Links */}
        <nav role="navigation" aria-label="Main navigation">
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={handleLinkClick}
                  aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls */}
        <div className="nav-controls">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title="Toggle theme"
          >
            {theme === 'dark'
              ? <><Sun size={15} /> Light</>
              : <><Moon size={15} /> Dark</>
            }
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
