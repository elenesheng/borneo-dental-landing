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
import VideoSection from '../components/VideoSection/VideoSection';
import {
  introContent,
  snapSendContent,
  beforeYouDecideContent,
  truthContent,
  whyChooseContent,
  approachContent,
} from '../data/mediaTextCardContent';

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
        primaryButtonText="Start My Smile Pre-assessment"
        scrollToSection={scrollToSection}
        contactRef={contactRef}
      />
      <Features />
      <MediaTextCard
        media="/aligners.png"
        title="Snap & Send: It's That Simple"
        content={snapSendContent}
        position="right"
        mediaType="image"
        isButtonVisible={true}
        primaryButtonText="Check If I'm Suitable for Aligners"
        scrollToSection={scrollToSection}
        contactRef={contactRef}
      />
      <ImageSection
        title="The Six common dental issues that clear aligners can help with:"
        image="/image-right.png"
      />
      <MediaTextCard
        title="Why Choose Borneo Dental Centre?"
        media="https://drive.google.com/file/d/1UFnQfDNkKJriLxSCYMUf9-MbH_T8Z3lh/preview"
        position="left"
        mediaType="video"
        isButtonVisible={false}
        content={whyChooseContent}
      />
      <ImageSection
        title="Aligners vs Braces: What's Right for You?"
        image="/image-left.png"
      />
      <MediaTextCard
        media="/dentist.png"
        title="But here's the truth:"
        content={truthContent}
        position="right"
        mediaType="image"
        isButtonVisible={true}
        primaryButtonText="Start My Smile Pre-assessment"
        scrollToSection={scrollToSection}
        contactRef={contactRef}
      />
      <ImageSection
        title="At Borneo Dental Centre, we don't just straighten teeth — we restore confidence, function, and long-term oral health."
        image="/ctscan.png"
        content={approachContent}
      />
      <Testimonials forwardedRef={testimonialRef} />
      <FAQ />
      <MediaTextCard
        media="/first-impression.png"
        title="Ready to See if Aligners Are Right for You?"
        content={beforeYouDecideContent}
        mediaType="image"
        isButtonVisible={true}
        primaryButtonText="Start My Smile Pre-assessment"
        scrollToSection={scrollToSection}
        contactRef={contactRef}
      />
      <VideoSection
        title="Veneers vs Aligners: Which Is Right For You?"
        videoSrc="https://drive.google.com/file/d/11DSQnl-80LgV5kHLMsw60v26lzH5szL_/preview"
      />
      <Contact forwardedRef={contactRef} />
      <Map />
    </div>
  );
};

export default LandingPage;
