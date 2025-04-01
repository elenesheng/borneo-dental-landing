import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DoctorProfile.css';

const DoctorProfile = ({ forwardedRef }) => {
  return (
    <section ref={forwardedRef} className="doctor-profile-section padding">
      <Container>
        <Row className="align-items-start">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="doctor-image-container">
              <img
                src="/doctor.png"
                alt="Dra. Patricia Nieves Kiriaco"
                className="doctor-image"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="doctor-info">
              <span className="sub-title">Sobre Mi</span>
              <h2 className="doctor-name">Dra. Patricia Nieves Kiriaco</h2>
              <ul className="doctor-credentials">
                <li>
                  Médica Cirujano, graduada en la Universidad Nacional de
                  Córdoba, Argentina.
                </li>
                <li>
                  Odontóloga, graduada en la Universidad de París, Francia
                </li>
                <li>
                  Docente de la Universidad Nacional de Córdoba desde el año
                  1975
                </li>
                <li>Miembro de las siguientes Academias:</li>
                <ul className="academies-list">
                  <li>A.L.A.O: Academia Latinoamericana de Oseointegración.</li>
                  <li>
                    A.I.I.O: Academia Internacional de Implantes y
                    Oseointegración . Miembro Fundador
                  </li>
                  <li>
                    A.V.O.I.O: Academia Venezolana de Oseointegración e
                    Implantologia Oral. Miembro Honorario.
                  </li>
                  <li>
                    Pierre Fauchard Academy: Academia de Honor de Odontologia de
                    E.E.U.U.
                  </li>
                  <li>
                    A.I.I.P: Academia Internacional de Implantología y
                    Periodoncia – Barcelona. Presidente Internacional.
                  </li>
                </ul>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DoctorProfile;
