import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './WelcomeHero.css';

const WelcomeHero = ({ forwardedRef, scrollToSection, contactRef }) => {
  return (
    <section ref={forwardedRef} className="welcome-hero section-padding">
      <Container className="hero-section py-5">
        <Row className="align-items-center">
          <Col lg={5}>
            <span className="location">Kuala Lumpur</span>
            <h2 className="hero-title">
              Get a Professional Smile Pre-Diagnosis Without Leaving Home
            </h2>
            <p className="hero-description">
              Not everyone is suitable for clear aligners — find out if you are,
              before committing.
            </p>
            <div className="cta-group d-flex justify-content-between">
              <Button
                variant="primary"
                size="lg"
                className="me-3 primary-button"
                onClick={() => scrollToSection(contactRef)}
              >
                Check If I'm Suitable for Clear Aligner
              </Button>
            </div>
          </Col>
          <Col lg={7}>
            <div className="hero-image-container d-flex justify-content-center">
              <img
                src="/rec.png"
                alt="Background shape"
                className="hero-background"
              />
              <img
                src="/dental-section.png"
                alt="Tratamiento dental"
                className="hero-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeHero;
