import React from 'react';
import { Form } from 'react-bootstrap';

const ContactForm = ({
  formData,
  buttonOptions,
  isSubmitting,
  handleInputChange,
  handleImageChange,
  triggerFileInput,
  handleSubmit,
  fileInputRef,
  submitStatus,
  submitMessage,
}) => {
  return (
    <div className="contact-form">
      {submitStatus && (
        <div className={`submission-message ${submitStatus}`}>
          {submitMessage}
        </div>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Select
            name="source"
            className="form-control"
            value={formData.source}
            onChange={handleInputChange}
          >
            {buttonOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="form-control"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Tell us about your dental concerns..."
            className="form-control"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="custom-file-upload-container mb-3">
          <div className="file-upload-field" onClick={triggerFileInput}>
            <i className="bi bi-cloud-arrow-up-fill upload-icon"></i>
            <span className="upload-text">
              {formData.images.length
                ? `${formData.images.length} file(s) selected`
                : 'Upload Photos of Your Teeth'}
            </span>
          </div>
          <span className="upload-instruction">
            Please include clear photos of your upper and lower teeth
          </span>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden-file-input"
            onChange={handleImageChange}
          />
        </Form.Group>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit Assessment Request'}
        </button>
      </Form>
    </div>
  );
};

export default ContactForm;
