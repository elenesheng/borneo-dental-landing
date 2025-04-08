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
            <p>admin@borneodentalcentre.com</p>
          </div>
        </div>

        <div className="contact-method">
          <div className="method-icon">
            <i className="bi bi-chat-dots-fill"></i>
          </div>
          <div className="method-details">
            <h3>Chat With Us</h3>
            <p>whatsapp wa.me/+60 11-3789 3980</p>
          </div>
        </div>

        <div className="contact-method">
          <div className="method-icon">
            <i className="bi bi-telephone-fill"></i>
          </div>
          <div className="method-details">
            <h3>Call Us</h3>
            <p>
              +6019-411 1213 (Luyang, KK), +60197331020 (Bundusan, KK),
              +6013-588 1213 (Kuala Lumpur)
            </p>
          </div>
        </div>

        <div className="contact-method">
          <div className="method-icon">
            <i className="bi bi-geo-alt-fill"></i>
          </div>
          <div className="method-details">
            <h3>Visit Us</h3>
            <p>
              Kuala Lumpur, Malaysia @ Vital Plus Dental: Jalan SS 21/39,
              Damansara Utama Kota Kinabalu @ Fu Yen or Bundusan
            </p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://www.facebook.com/bdcluyang/"
          className="social-link"
          target="_blank"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/borneodental.luyang/"
          className="social-link"
          target="_blank"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
