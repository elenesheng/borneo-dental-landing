import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import testimonialData from '../../data/testimonials.json';
import './Testimonials.css';

const Testimonials = ({ forwardedRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { testimonials } = testimonialData;
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const renderStars = (stars) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="star active">
        ★
      </span>
    ));
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section ref={forwardedRef} className="testimonials-section padding">
      <Container>
        <h2 className="main-title">What Our Patients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-cards">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card"
                style={{
                  opacity: 1,
                  transform: 'translateX(0)',
                  transition: 'all 0.5s ease',
                }}
              >
                <div className="testimonial-rating">
                  {renderStars(testimonial.stars)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <h3 className="testimonial-author">{testimonial.name}</h3>
              </div>
            ))}
          </div>

          <div className="testimonial-navigation">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
