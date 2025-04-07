import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './WelcomeHero.css';
import openWhatsAppChat from '../../utils/whatsapp';

const WelcomeHero = ({ forwardedRef, scrollToSection, contactRef }) => {
  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    openWhatsAppChat();
  };

  return (
    <section ref={forwardedRef} className="welcome-hero section-padding">
      <Container className="hero-section py-5">
        <Row className="align-items-center">
          <Col lg={5} className="content-col">
            <span className="location">Kota Kinabalu, Kuala Lumpur</span>
            <h2 className="hero-title">
              Get a Professional Smile Pre-Diagnosis Without Leaving Home
            </h2>

            {/* This div will only be visible on mobile */}
            <div className="d-md-none mobile-image-wrapper">
              <div className="mobile-hero-image">
                <div className="hero-image-container d-flex justify-content-center">
                  <img
                    src="/rec.png"
                    alt="Decorative geometric background element for Borneo Dental Centre hero section"
                    className="hero-background"
                  />
                  <img
                    src="/reverse-age.png"
                    alt="Professional smile alignment treatment showing the anti-aging effects of proper dental care"
                    className="hero-image"
                  />
                </div>
              </div>
            </div>

            <p className="hero-description">
              Not everyone is suitable for clear aligners — find out if you are,
              before committing.
            </p>
            <div className="cta-group d-flex justify-content-between">
              <Button
                variant="primary"
                size="lg"
                className="me-3 primary-button"
                onClick={handleWhatsAppClick}
              >
                Reverse Aging with Smile Alignment
              </Button>
            </div>
          </Col>

          <Col lg={7} className="image-col d-none d-md-block">
            <div className="hero-image-container d-flex justify-content-center">
              <img
                src="/rec.png"
                alt="Decorative geometric background element for Borneo Dental Centre hero section"
                className="hero-background"
              />
              <img
                src="/reverse-age.png"
                alt="Professional smile alignment treatment showing the anti-aging effects of proper dental care"
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
