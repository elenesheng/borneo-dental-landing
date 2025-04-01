import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './FAQ.css';

const FAQ = ({ forwardedRef }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: '¿Que Obras sociales aceptan?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
    },
    {
      question: '¿Que Obras sociales aceptan?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
    },
    {
      question: '¿Que Obras sociales aceptan?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
    },
    {
      question: '¿Que Obras sociales aceptan?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
    },
    {
      question: '¿Que Obras sociales aceptan?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={forwardedRef} className="faq-section padding">
      <Container>
        <p className="sub-title text-center">Sacate las dudas</p>
        <h2 className="main-title text-center">Preguntas Frecuentes</h2>

        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <div className="arrow-icon">↑</div>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
