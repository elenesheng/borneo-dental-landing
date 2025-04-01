import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './NavBar.css';

const NavBar = ({ scrollToSection, refs }) => {
  return (
    <Navbar expand="lg" className="navbar-component py-3 fixed-top bg-white">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src="/logo.png" alt="Logo" className="tooth-icon me-2" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Left: Logo already handled above */}

            {/* Center: Navigation */}
            <Nav className="mx-auto">
              <Nav.Link onClick={() => scrollToSection(refs.homeRef)}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.servicesRef)}>
                Services
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.testimonialRef)}>
                Testimonials
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.contactRef)}>
                Contact
              </Nav.Link>
            </Nav>

            {/* Right: CTA Button */}
            <div>
              <Button variant="outline-primary" className="appointment-btn">
                Saca Tu Turno
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
