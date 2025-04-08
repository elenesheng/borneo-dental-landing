import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css';
import openWhatsAppChat from '../../utils/whatsapp';

const GoogleFormEmbed = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Google Form ID
      const googleFormId =
        '1FAIpQLSd6FN_M3DHcO731P_cFGlXlmPNteweCNyc-obU1cWSg3Y6WbA';

      // URL with prefilled entries for the Google Form
      const prefilledUrl =
        `https://docs.google.com/forms/d/e/${googleFormId}/viewform?` +
        `entry.1484405726=${encodeURIComponent(formData.name)}` +
        `&entry.87216746=${encodeURIComponent(formData.email)}` +
        `&entry.311744263=${encodeURIComponent(formData.phone)}`;

      console.log('Redirecting to Google Form with URL:', prefilledUrl);

      // Open the Google Form in a new tab
      window.open(prefilledUrl, '_blank');

      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
        });
      }, 500);
    } catch (error) {
      console.error('Error redirecting to Google Form:', error);
      setIsSubmitting(false);
      setSubmitError(true);
    }
  };

  // Direct WhatsApp click without using the form
  const handleDirectWhatsApp = () => {
    const message =
      'Hey :) Interested to know more about the Smile Pre-assessment.. \n\nname: \nlocation: KL or KK';
    openWhatsAppChat(message);
  };

  // WhatsApp as fallback
  const handleWhatsAppSubmit = () => {
    const customMessage = `Hey :) Interested to know more about the Smile Pre-assessment.. \n\nname: ${formData.name}\nemail: ${formData.email}\nphone: ${formData.phone}`;
    openWhatsAppChat(customMessage);
  };

  return (
    <div className="custom-form-container">
      {submitError && (
        <div className="error-message">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Unable to open the Google Form. Please try again or use WhatsApp
          instead.
          <button
            type="button"
            className="whatsapp-button mt-3"
            onClick={handleWhatsAppSubmit}
          >
            <i className="bi bi-whatsapp me-2"></i> Send via WhatsApp Instead
          </button>
        </div>
      )}

      <div className="direct-whatsapp-option">
        <p>Get quick response via WhatsApp:</p>
        <button
          type="button"
          className="direct-whatsapp-btn"
          onClick={handleDirectWhatsApp}
        >
          <i className="bi bi-whatsapp"></i> Start WhatsApp Chat
        </button>
      </div>

      <div className="form-divider">
        <span>OR</span>
      </div>

      <form onSubmit={handleSubmit} className="custom-contact-form">
        <div className="form-title">Smile Pre-Assessment Request</div>

        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="custom-input"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="custom-input"
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile number/WhatsApp"
            required
            className="custom-input"
          />
        </div>

        <div className="upload-info">
          <div className="upload-icon-large">
            <i className="bi bi-cloud-arrow-up"></i>
          </div>
          <p>
            After submitting this form, you'll be redirected to Google Forms
            <br />
            where you can upload your teeth photos and complete your assessment
            request.
          </p>
        </div>

        <div className="buttons-container">
          <button
            type="submit"
            className="custom-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Continue & Upload Photos'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GoogleFormEmbed;
