import React, { useRef } from 'react';
import NavBar from '../components/NavBar/NavBar';
import WelcomeHero from '../components/WelcomeHero/WelcomeHero';
import GetInTouch from '../components/GetInTouch/GetInTouch';
import Testimonials from '../components/Testimonials/Testimonials';
import MediaTextCard from '../components/MediaTextCard/MediaTextCard';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import Map from '../components/Map/Map';
import Features from '../components/Features/Features';
import ImageSection from '../components/ImageSection/ImageSection';
import {
  introContent,
  snapSendContent,
  beforeYouDecideContent,
  truthContent,
  whyChooseContent,
  approachContent,
} from '../data/mediaTextCardContent';
import '../pages/LandingPage.css';

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
    <div
      className="landing-page"
      style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}
    >
      <NavBar scrollToSection={scrollToSection} refs={refs} />
      <WelcomeHero
        forwardedRef={homeRef}
        scrollToSection={scrollToSection}
        contactRef={contactRef}
      />
      <GetInTouch />
      <MediaTextCard
        media="/first-impression.png"
        title=" Your Smile Shouldn't Age You"
        content={introContent}
        position="left"
        mediaType="image"
        isButtonVisible={true}
        primaryButtonText="Start With a Simple Smile Pre-Check"
        scrollToSection={scrollToSection}
        contactRef={contactRef}
        flexPosition="center"
      />
      <Features />
      <MediaTextCard
        media="/aligners.png"
        title="Snap & Send: It's That Simple"
        content={snapSendContent}
        position="right"
        mediaType="image"
        isButtonVisible={true}
        primaryButtonText="Start With a Simple Smile Pre-Check"
        scrollToSection={scrollToSection}
        contactRef={contactRef}
        flexPosition="center"
      />
      <div
        className="d-flex padding"
        style={{ flexDirection: 'row', flexWrap: 'wrap' }}
      >
        <div style={{ width: '50%', flex: '1 1 300px', minWidth: '300px' }}>
          <ImageSection
            title="The Six common dental issues that clear aligners can help with:"
            image="/image-right.png"
          />
        </div>
        <div style={{ width: '50%', flex: '1 1 300px', minWidth: '300px' }}>
          <ImageSection
            title="Aligners vs Braces: What's Right for You?"
            image="/image-left.png"
          />
        </div>
      </div>
      <MediaTextCard
        title="Why Choose Borneo Dental Centre?"
        media="https://drive.google.com/file/d/1UFnQfDNkKJriLxSCYMUf9-MbH_T8Z3lh/preview"
        position="left"
        mediaType="video"
        isButtonVisible={false}
        content={whyChooseContent}
        flexPosition="center"
      />

      <MediaTextCard
        media="/dentist.png"
        title="But here's the truth:"
        content={truthContent}
        position="right"
        mediaType="image"
        isButtonVisible={true}
        primaryButtonText="Explore My Age-Reversing Smile Options"
        scrollToSection={scrollToSection}
        contactRef={contactRef}
        flexPosition="center"
      />
      <MediaTextCard
        media="/ctscan.png"
        title="At Borneo Dental Centre, we don't just straighten teeth — we restore confidence, function, and long-term oral health."
        content={approachContent}
        mediaType="image"
        isButtonVisible={false}
        flexPosition="start"
      />
      <Testimonials forwardedRef={testimonialRef} />
      <FAQ />
      <MediaTextCard
        media="https://drive.google.com/file/d/11DSQnl-80LgV5kHLMsw60v26lzH5szL_/preview"
        title="Ready to See if Aligners Are Right for You?"
        content={beforeYouDecideContent}
        mediaType="video"
        isButtonVisible={true}
        primaryButtonText="Start My Smile Pre-assessment"
        scrollToSection={scrollToSection}
        contactRef={contactRef}
        flexPosition="center"
      />
      <Contact forwardedRef={contactRef} />
      <Map />
    </div>
  );
};

export default LandingPage;
