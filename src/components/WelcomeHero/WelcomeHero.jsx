import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './WelcomeHero.css';

const WelcomeHero = ({ forwardedRef }) => {
  return (
    <section ref={forwardedRef} className="welcome-hero section-padding">
      <Container className="hero-section py-5">
        <Row className="align-items-center">
          <Col lg={5}>
            <span className="location">En Cordoba Capital</span>
            <h2 className="hero-title">
              Una excelente
              <br />
              experiencia
              <br />
              <span className="hero-primary">Odontológica</span>
            </h2>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit molestie,
              rhoncus luctus arcu ut eros augue. Eu commodo laoreet parturient
              quam purus magna pretium luctus.
            </p>
            <div className="cta-group d-flex justify-content-between">
              <Button
                variant="primary"
                size="lg"
                className="me-3 primary-button"
              >
                Saca Tu Turno
              </Button>
              <Button variant="link" className="services-link">
                Nuestro Servicios
              </Button>
            </div>
          </Col>
          <Col lg={7}>
            <div className="hero-image-container d-flex justify-content-end">
              <img
                src="/rec.png"
                alt="Background shape"
                className="hero-background"
              />
              <img
                src="/hero-image.png"
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
