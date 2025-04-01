import React, { useRef } from 'react';
import NavBar from '../components/NavBar/NavBar';
import WelcomeHero from '../components/WelcomeHero/WelcomeHero';
import GetInTouch from '../components/GetInTouch/GetInTouch';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import DoctorProfile from '../components/DoctorProfile/DoctorProfile';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import Map from '../components/Map/Map';

const LandingPage = () => {
  // Create refs for each section
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialRef = useRef(null);
  const homeRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const refs = {
    homeRef,
    servicesRef,
    contactRef,
    testimonialRef,
  };

  return (
    <div className="landing-page">
      <NavBar scrollToSection={scrollToSection} refs={refs} />
      <WelcomeHero
        forwardedRef={homeRef}
        scrollToSection={scrollToSection}
        serviciosRef={homeRef}
      />
      <GetInTouch />
      <Services forwardedRef={servicesRef} />
      <DoctorProfile />
      <Testimonials forwardedRef={testimonialRef} />
      <FAQ />
      <Contact forwardedRef={contactRef} />
      <Map />
    </div>
  );
};

export default LandingPage;
