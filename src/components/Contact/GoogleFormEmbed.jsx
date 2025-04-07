import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css';
import openWhatsAppChat from '../../utils/whatsapp';

const GoogleFormEmbed = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concerns: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [showWhatsAppOption, setShowWhatsAppOption] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setShowWhatsAppOption(false);

    try {
      // Using the actual form ID and entry IDs from the HTML source
      const googleFormId =
        'e/1FAIpQLSct0oKr1lCWIEROMaOuFsAUhiQYQyw-VmN0LTlQpdq4u-uPzA';
      const formUrl = `https://docs.google.com/forms/d/${googleFormId}/formResponse`;

      // Create a hidden form to submit the data
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.target = '_blank'; // This prevents redirecting the user to Google Forms

      // Add form fields with the actual entry IDs from the HTML
      // Name field - entry.562846113
      const nameField = document.createElement('input');
      nameField.type = 'text';
      nameField.name = 'entry.562846113'; // From the HTML data-params
      nameField.value = formData.name;
      form.appendChild(nameField);

      // Email field - entry.262264792
      const emailField = document.createElement('input');
      emailField.type = 'text';
      emailField.name = 'entry.262264792'; // From the HTML data-params
      emailField.value = formData.email;
      form.appendChild(emailField);

      // Phone field - entry.1587610569
      const phoneField = document.createElement('input');
      phoneField.type = 'text';
      phoneField.name = 'entry.1587610569'; // From the HTML data-params
      phoneField.value = formData.phone;
      form.appendChild(phoneField);

      // Concerns field - entry.2147181981
      const concernsField = document.createElement('input');
      concernsField.type = 'text';
      concernsField.name = 'entry.2147181981'; // From the HTML data-params
      concernsField.value = formData.concerns;
      form.appendChild(concernsField);

      // Append the form to the document
      document.body.appendChild(form);

      try {
        // Submit the form
        form.submit();

        // Set success state after a short delay
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);

          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            concerns: '',
          });

          // Reset success message after a few seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        }, 1000);
      } catch (submitError) {
        console.error('Error during form submission:', submitError);
        setIsSubmitting(false);
        setSubmitError(true);
        setShowWhatsAppOption(true);
      }

      // Clean up the form
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
      }, 100);
    } catch (error) {
      console.error('Error creating form:', error);
      setIsSubmitting(false);
      setSubmitError(true);
      setShowWhatsAppOption(true);

      // Reset error message after a few seconds
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    }
  };

  // Handle WhatsApp option
  const handleWhatsAppSubmit = () => {
    // Create custom message with form data
    const customMessage = `Hey :) Interested to know more about the Smile Pre-assessment.. \n\nname: ${formData.name}\nemail: ${formData.email}\nphone: ${formData.phone}\nconcerns: ${formData.concerns}`;

    // Open WhatsApp with the form data
    openWhatsAppChat(customMessage);

    // Reset form after WhatsApp opens
    setFormData({
      name: '',
      email: '',
      phone: '',
      concerns: '',
    });

    // Hide options
    setShowWhatsAppOption(false);
  };

  // Direct WhatsApp click without using the form
  const handleDirectWhatsApp = () => {
    openWhatsAppChat();
  };

  return (
    <div className="custom-form-container">
      {submitSuccess && (
        <div className="success-message">
          Thank you for your submission! We'll be in touch soon.
        </div>
      )}

      {submitError && (
        <div className="error-message">
          There was an error submitting your form. Please try using the WhatsApp
          option below.
        </div>
      )}

      <div className="direct-whatsapp-option">
        <p>Prefer to chat directly? Use WhatsApp:</p>
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
            placeholder="Your Phone Number"
            required
            className="custom-input"
          />
        </div>

        <div className="form-group">
          <textarea
            name="concerns"
            value={formData.concerns}
            onChange={handleChange}
            placeholder="Tell us about your dental concerns..."
            required
            className="custom-textarea"
          ></textarea>
        </div>

        <div className="buttons-container">
          <button
            type="submit"
            className="custom-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Assessment Request'}
          </button>

          {showWhatsAppOption && (
            <button
              type="button"
              className="custom-submit-button whatsapp-button mt-3"
              onClick={handleWhatsAppSubmit}
            >
              <i className="bi bi-whatsapp me-2"></i> Send via WhatsApp
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GoogleFormEmbed;
