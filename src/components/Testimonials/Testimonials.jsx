import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import testimonialData from '../../data/testimonials.json';
import './Testimonials.css';

const Testimonials = ({ forwardedRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { testimonials } = testimonialData;
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const renderStars = (stars) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className="star active"
        style={{ '--star-index': index }}
      >
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
                className={`testimonial-card testimonial-card-${index}`}
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
