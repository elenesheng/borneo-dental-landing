import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Services.css';

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">
      <img src={icon} alt={title} />
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <Button variant="link" className="service-link">
      Ver Más <span className="arrow-icon">↗</span>
    </Button>
  </div>
);

const Services = ({ forwardedRef }) => {
  const backgroundStyle = {
    '--background-pattern': `url(${process.env.PUBLIC_URL}/icons/icon_1.png)`,
  };

  const services = [
    {
      icon: '/icons/icon_1.png',
      title: 'Implantes',
      description:
        'Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.',
    },
    {
      icon: '/icons/icon_2.png',
      title: 'Ortodoncia',
      description:
        'La ortodoncia con brackets de cerámica ofrece una estética más cuidada, en comparación a la ortodoncia metálica. Los resultados en cuanto a alineación dentaria son similares a la alternativa mencionada. Opción ideal para quienes buscan cuidar la estética y el bolsillo.',
    },
    {
      icon: '/icons/icon_3.png',
      title: 'Implantes',
      description:
        'Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.',
    },
    {
      icon: '/icons/icon_4.png',
      title: 'Implantes',
      description:
        'Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.',
    },
    {
      icon: '/icons/icon_1.png',
      title: 'Implantes',
      description:
        'Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.',
    },
    {
      icon: '/icons/icon_2.png',
      title: 'Implantes',
      description:
        'Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.',
    },
  ];

  return (
    <section ref={forwardedRef} className="services-section padding">
      <img
        src="/icons/icon_1.png"
        alt="Tooth Background"
        class="background-tooth"
      />
      <Container>
        <div className="text-center">
          <span className="sub-title">Especialidades</span>
          <h2 className="main-title">Nuestros Servicios</h2>
        </div>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <ServiceCard {...service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
