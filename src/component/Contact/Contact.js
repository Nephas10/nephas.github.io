import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    setFormStatus('success');
    
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };
  
  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p className="contact-intro">Have a question or want to work together? Feel free to reach out!</p>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>nephaskango@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>Lusaka, Zambia</p>
          </div>
          <div className="contact-item">
            <h3>Social</h3>
            <div className="social-links">
              <a href="https://github.com/Nephas10" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/nephas-kango-0676b2216/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
             
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
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
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
            
            {formStatus === 'success' && (
              <p className="form-success">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;