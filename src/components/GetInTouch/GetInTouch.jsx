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
              <h3>Clinic Location</h3>
              <p>
                Kota Kinabalu (Fu Yen and Bundusan)
                <br />
                Kuala Lumpur (Vital+ Dental Jalan SS 21/39, Damansara Utama, PJ)
              </p>
            </div>
          </Col>

          <Col md={4} className="contact-item">
            <div className="icon">
              <i className="bi bi-envelope"></i>
            </div>
            <div className="info">
              <h3>Email</h3>
              <p>admin@borneodentalcentre.com</p>
            </div>
          </Col>

          <Col md={4} className="contact-item">
            <div className="icon">
              <i className="bi bi-telephone"></i>
            </div>
            <div className="info">
              <h3>Telephone</h3>
              <p>
                KK +60 19-733 1020
                <br />
                KL +60 13-588 1213
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetInTouch;
