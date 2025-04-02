import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-methods">
        <div className="contact-method">
          <div className="method-icon">
            <i className="bi bi-envelope-fill"></i>
          </div>
          <div className="method-details">
            <h3>Email Us</h3>
            <p>info@borneodental.com</p>
          </div>
        </div>

        <div className="contact-method">
          <div className="method-icon">
            <i className="bi bi-chat-dots-fill"></i>
          </div>
          <div className="method-details">
            <h3>Chat With Us</h3>
            <p>Open WhatsApp Chat</p>
          </div>
        </div>

        <div className="contact-method">
          <div className="method-icon">
            <i className="bi bi-telephone-fill"></i>
          </div>
          <div className="method-details">
            <h3>Call Us</h3>
            <p>+60 123456789</p>
          </div>
        </div>

        <div className="contact-method">
          <div className="method-icon">
            <i className="bi bi-geo-alt-fill"></i>
          </div>
          <div className="method-details">
            <h3>Visit Us</h3>
            <p>Kuala Lumpur, Malaysia</p>
            <p className="schedule">Monday - Friday: 9am - 6pm</p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a href="#" className="social-link">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="social-link">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="#" className="social-link">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
