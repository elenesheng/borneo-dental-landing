import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css';

// Import the extracted components
import ContactInfo from './ContactInfo';
import GoogleFormEmbed from './GoogleFormEmbed';

const Contact = ({ forwardedRef }) => {
  return (
    <section ref={forwardedRef} className="contact-section padding">
      <Container>
        <div className="d-flex flex-column align-items-center text-center mb-5">
          <h2 className="main-title">
            Get Your 1-time Complimentary Smile Assessment
          </h2>
        </div>
        <Row>
          <Col lg={5}>
            <ContactInfo />
          </Col>

          <Col lg={7}>
            <GoogleFormEmbed />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
