import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="card contact-info-box">
            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div>
                <div className="info-title">Email</div>
                <div className="info-detail">devip.it@gmail.com</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone size={20} /></div>
              <div>
                <div className="info-title">Phone</div>
                <div className="info-detail">+91 98765 43210</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div>
                <div className="info-title">Location</div>
                <div className="info-detail">Tamil Nadu, India</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Linkedin size={20} /></div>
              <div>
                <div className="info-title">LinkedIn</div>
                <div className="info-detail">linkedin.com/in/devi-p-it</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Github size={20} /></div>
              <div>
                <div className="info-title">GitHub</div>
                <div className="info-detail">github.com/devi-p-dev</div>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="card">
            {submitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
