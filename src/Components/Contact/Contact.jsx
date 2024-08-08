import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contact-wrapper">
        <div className="form-box">
          <h1>Contact Me</h1>
          <div className="former">
          <form target="_blank" action="https://formsubmit.co/ashwinjoseph2017@gmail.com" method="POST">


            <input className="input" type="text" name="name" placeholder="Name" required />
            <input className="input" type="email" name="email" placeholder="E-mail" required />
            <textarea className="textarea" name="message" placeholder="Enter your  message" required></textarea>

            <center>
              <button type="submit" className="button">Submit</button>
            </center>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
