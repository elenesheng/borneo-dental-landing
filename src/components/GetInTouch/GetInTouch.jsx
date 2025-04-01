import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <section className="get-in-touch padding">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="contact-item">
            <div className="icon">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="info">
              <h3>Dirección</h3>
              <p>
                Av. Color 1560
                <br />
                Cordoba, Cordoba Capital
              </p>
            </div>
          </Col>

          <Col md={4} className="contact-item">
            <div className="icon">
              <i className="bi bi-envelope"></i>
            </div>
            <div className="info">
              <h3>Email</h3>
              <p>
                info@tudentista.com.ar
                <br />
                info@tudentista.com.ar
              </p>
            </div>
          </Col>

          <Col md={4} className="contact-item">
            <div className="icon">
              <i className="bi bi-telephone"></i>
            </div>
            <div className="info">
              <h3>Telefonos</h3>
              <p>
                351 7608XXX
                <br />
                3541 7825XXX
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetInTouch;
