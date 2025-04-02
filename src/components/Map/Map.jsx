import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Map.css';

const Map = () => {
  const [activeLocation, setActiveLocation] = useState('kk');

  const locations = {
    kk: {
      name: 'Kota Kinabalu',
      address: 'Fu Yen and Bundusan',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254854.96858266528!2d116.03081170887833!3d5.9804106804351865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b690d8d16bd0d%3A0xb8ec9346763036b0!2sKota%20Kinabalu%2C%20Sabah%2C%20Malaysia!5e0!3m2!1sen!2s!4v1680520677465!5m2!1sen!2s',
    },
    kl: {
      name: 'Kuala Lumpur',
      address: 'Vital+ Dental Jalan SS 21/39, Damansara Utama, PJ',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9304344499135!2d101.62071087587364!3d3.1348390529483136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4938f65d3833%3A0x3a69c4765bcceb71!2sJalan%20SS%2021%2F39%2C%20Damansara%20Utama%2C%2047400%20Petaling%20Jaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2s!4v1680520713246!5m2!1sen!2s',
    },
  };

  return (
    <section className="map-section padding">
      <Container fluid>
        <div className="text-center mb-4">
          <h2 className="section-title">Visit Our Clinics</h2>
          <p className="section-subtitle">
            Find us at one of our convenient locations
          </p>
        </div>

        <Row className="justify-content-center">
          <Col xs={12} className="mb-4">
            <Nav
              variant="tabs"
              className="location-tabs"
              activeKey={activeLocation}
              onSelect={(k) => setActiveLocation(k)}
            >
              <Nav.Item>
                <Nav.Link eventKey="kk" className="location-tab">
                  Kota Kinabalu
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="kl" className="location-tab">
                  Kuala Lumpur
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col xs={12}>
            <div className="location-info">
              <h3>{locations[activeLocation].name}</h3>
              <p>{locations[activeLocation].address}</p>
            </div>
          </Col>
        </Row>

        <div className="map-container full-width">
          <iframe
            src={locations[activeLocation].mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${locations[activeLocation].name} Location Map`}
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Map;
