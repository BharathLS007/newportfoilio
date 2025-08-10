import React, { useState } from 'react';
import Navbar from './Navbar';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Bharath.pdf';
  link.download = 'Bharath.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject of your message"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group full-width">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
 <div className="resume-button-wrapper">
<button onClick={handleDownload} className="download-btn">
  📄 Download My Resume
</button>

</div>
           <div className="container3">
            <h1 className='find'>FIND ME ON</h1>
            <p className='free'>
              Feel free to <span className='highlight'>connect</span>with me
            </p>
         <div className="links">
  <ul>
    <li>
      <a href="https://github.com/BharathLS007" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github"></i>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/bharathls" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/__bharath.l.s_" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </li>
  </ul>
         </div>

           </div>
          <footer>
            <p>Designed and Developed by Bharath L S</p>
           </footer>
    </div>
  );
}

export default Contact;
