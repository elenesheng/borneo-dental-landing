import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css';

const Contact = ({ forwardedRef }) => {
  return (
    <section ref={forwardedRef} className="contact-section padding">
      <Container>
        <div className="d-flex flex-column align-items-end">
          <span className="sub-title">Saca un turno</span>
          <h2 className="main-title">Contacto</h2>
        </div>
        <Row>
          <Col lg={5} className="contact-info">
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="method-details">
                  <h3>Escribinos al Mail</h3>
                  <p>info@tudentista.com.ar</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="bi bi-chat-dots-fill"></i>
                </div>
                <div className="method-details">
                  <h3>Chatea con Nosotros</h3>
                  <p>+54 35176085XX</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="method-details">
                  <h3>Llamanos</h3>
                  <p>0810 888 9XXX</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="method-details">
                  <h3>Visitanos</h3>
                  <p>Av. Color 1338, Barrio Alberdi</p>
                  <p className="schedule">Lunes a Viernes 8 a 18</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-form">
              <h3 className="form-title">
                Ponete en contacto para coordinar un turno
              </h3>
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  className="form-input"
                />
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
                <Form.Control
                  type="tel"
                  placeholder="Teléfono"
                  className="form-input"
                />
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Problema"
                  className="form-input"
                />
                <button type="submit" className="submit-button">
                  Enviar
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
