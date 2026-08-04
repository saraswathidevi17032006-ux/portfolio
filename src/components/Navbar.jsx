import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <a href="#home" className="logo">
          Devi.Portfolio
        </a>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions: Theme Toggle & Mobile Menu */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button onClick={toggleTheme} className="theme-btn" title="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-toggle">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
