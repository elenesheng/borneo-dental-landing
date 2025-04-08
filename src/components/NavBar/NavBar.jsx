import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar = ({ scrollToSection, refs }) => {
  return (
    <Navbar expand="lg" className="navbar-component py-3 fixed-top bg-white">
      <Container>
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center logo-container"
        >
          <img
            src="/logo-transparent-bg.png"
            alt="Logo"
            className="logo me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-end align-items-center w-100">
            <Nav>
              <Nav.Link onClick={() => scrollToSection(refs.homeRef)}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.testimonialRef)}>
                Testimonials
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.contactRef)}>
                Contact
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
