import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'devip.it@gmail.com',
      href: 'mailto:devip.it@gmail.com',
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: 'https://maps.google.com/?q=Tamil+Nadu',
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/devi-p-it',
      href: 'https://linkedin.com/in/devi-p-it',
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      value: 'github.com/devi-p-dev',
      href: 'https://github.com/devi-p-dev',
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* ── Left: Contact Info ───────────────────────────────────── */}
          <div className="glass-card contact-info-card reveal-left">
            <h3 className="contact-info-title">Let's Talk!</h3>
            <p className="contact-info-sub">
              I'm currently open to internships, freelance projects, and full-time opportunities.
              Don't hesitate to reach out — I'd love to connect!
            </p>

            <div className="contact-items">
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="contact-item"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="contact-social-row">
              <a
                href="https://github.com/devi-p-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                id="contact-github-link"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/devi-p-it"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                id="contact-linkedin-link"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href="mailto:devip.it@gmail.com"
                className="contact-social-btn"
                id="contact-email-link"
              >
                <Mail size={15} /> Email
              </a>
            </div>
          </div>

          {/* ── Right: Contact Form ──────────────────────────────────── */}
          <div className="glass-card contact-form-card reveal-right">
            <h3 className="contact-form-title">Send a Message</h3>
            <p className="contact-form-sub">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            {submitted && (
              <div className="success-toast" role="alert">
                <CheckCircle size={20} />
                Message sent! Thank you — I'll reply soon. 🚀
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-input"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className="form-input"
                  placeholder="Job Opportunity / Collaboration..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
                id="contact-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
