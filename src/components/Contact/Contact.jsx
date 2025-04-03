import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css';

// Import the extracted components
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

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
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: files,
    }));
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
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

      setIsSubmitting(false);

      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };

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
