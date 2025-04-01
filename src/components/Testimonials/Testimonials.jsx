import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import testimonialData from '../../data/testimonials.json';
import './Testimonials.css';

const Testimonials = ({ forwardedRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { testimonials } = testimonialData;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'active' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section ref={forwardedRef} className="testimonials-section padding">
      <Container>
        <span className="sub-title text-center">Testimonios</span>
        <h2 className="main-title">Lo que opinan nuestros Pacientes</h2>

        <div className="testimonials-container">
          <div className="testimonial-cards">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <h3 className="testimonial-author">{testimonial.name}</h3>
              </div>
            ))}
          </div>

          <div className="testimonial-navigation">
            <button
              className={`nav-dot ${currentSlide === 0 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(0)}
            />
            <button
              className={`nav-dot ${currentSlide === 1 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(1)}
            />
            <button
              className={`nav-dot ${currentSlide === 2 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(2)}
            />
            <button
              className={`nav-dot ${currentSlide === 3 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(3)}
            />
            <button
              className={`nav-dot ${currentSlide === 4 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(4)}
            />
          </div>

          <button className="ver-mas-btn">Ver Mas Reviews</button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
