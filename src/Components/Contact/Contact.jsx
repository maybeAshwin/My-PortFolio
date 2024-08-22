import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_dq72w7v', 'template_mjupjy8', e.target, 'qR9gw2JIsL1Wsp6kP')
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message.');
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="form-box">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.to_name}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <textarea
            className="textarea"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <center>
            <button type="submit" className="button">Submit</button>
          </center>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
