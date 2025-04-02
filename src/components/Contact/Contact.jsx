import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css';

// Import the extracted components
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

// Import utility services
import { sendEmail, sanitizeFileName } from './EmailService';
import {
  validateForm,
  validateFileTypes,
  checkFileSizes,
} from './FormValidation';

const Contact = ({ forwardedRef }) => {
  const fileInputRef = useRef(null);
  const buttonOptions = [
    "Check If I'm Suitable for Clear Aligner",
    'Start My Smile Pre-assessment',
    "Check If I'm Suitable for Aligners",
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    images: [],
    source: buttonOptions[0],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [submitMessage, setSubmitMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error when field is edited
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Validate file types
    const { validFiles, error } = validateFileTypes(files);

    if (error) {
      setValidationErrors((prev) => ({
        ...prev,
        images: error,
      }));
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        images: null,
      }));
    }

    // Sanitize file names
    const sanitizedFiles = validFiles.map((file) => {
      const sanitizedName = sanitizeFileName(file.name);
      return new File([file], sanitizedName, { type: file.type });
    });

    // Check file sizes
    const { error: sizeError } = checkFileSizes(sanitizedFiles);
    if (sizeError) {
      setValidationErrors((prev) => ({
        ...prev,
        images: sizeError,
      }));
    }

    setFormData((prev) => ({
      ...prev,
      images: sanitizedFiles,
    }));
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form first
    const errors = validateForm(formData);
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      await sendEmail(formData);
      setSubmitStatus('success');
      setSubmitMessage(
        'Thank you! Your assessment request has been submitted successfully.'
      );
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        images: [],
        source: buttonOptions[0],
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        'Sorry, there was a problem submitting your request. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear status message after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <section ref={forwardedRef} className="contact-section padding">
      <Container>
        <div className="d-flex flex-column align-items-center text-center mb-5">
          <h2 className="main-title">Get Your Free Smile Assessment</h2>
          <p className="contact-subtitle">
            Upload your teeth photos and our experts will evaluate if clear
            aligners are right for you
          </p>
        </div>
        <Row>
          <Col lg={5}>
            <ContactInfo />
          </Col>

          <Col lg={7}>
            <ContactForm
              formData={formData}
              buttonOptions={buttonOptions}
              validationErrors={validationErrors}
              isSubmitting={isSubmitting}
              handleInputChange={handleInputChange}
              handleImageChange={handleImageChange}
              triggerFileInput={triggerFileInput}
              handleSubmit={handleSubmit}
              fileInputRef={fileInputRef}
              submitStatus={submitStatus}
              submitMessage={submitMessage}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
