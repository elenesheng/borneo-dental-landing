import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './FAQ.css';

const FAQ = ({ forwardedRef, backgroundImage = false }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question:
        'Is this really free? Will I be pressured to sign up for treatment?',
      answer:
        "Yes, the smile pre-assessment is 100% complimentary — no pressure, no hard-selling. We believe in doctor-led education and clarity first. You're free to walk away or proceed only when you're ready.",
    },
    {
      question: 'What exactly is a smile pre-assessment?',
      answer:
        "It's a simple, non-invasive way to understand your current smile condition and whether clear aligners may be suitable. We'll review photos of your teeth and give you professional, honest feedback — before you decide on any next step.",
    },
    {
      question: 'Do I need to come in for this pre-assessment?',
      answer:
        "No — it starts virtually. Just send us 6 simple photos of your teeth (we'll guide you step-by-step), and our dental team will review them to provide a preliminary assessment. However, if you prefer a more detailed in-person consultation, feel free to contact us to schedule a one-time complimentary Smile Assessment at our clinic (usual price: RM80). This includes a more comprehensive evaluation with our dental professionals — no pressure, no obligations.",
    },
    {
      question: 'What kind of problems can clear aligners fix?',
      answer:
        "Clear aligners can treat common concerns like: \n– Crowded or overlapping teeth\n– Gaps or spacing\n– Bite issues (overbite, underbite, crossbite)\n– Shifting teeth due to aging\nThey're discreet, comfortable, and often faster than traditional braces.",
    },
    {
      question: "Will people notice I'm wearing them?",
      answer:
        'Highly unlikely. Our aligners are nearly invisible and designed for adult lifestyles. You can speak, smile, and work without the self-consciousness of metal braces.',
    },
    {
      question: 'Am I too old to straighten my teeth?',
      answer:
        'Absolutely not. Many of our patients are in their 30s to 60s. In fact, teeth tend to shift more with age — so aligning them can improve both appearance and oral health, and even subtly lift your facial profile.',
    },
    {
      question: 'Is this going to hurt or require surgery?',
      answer:
        'No surgery is required, and most patients describe the process as mild pressure, not pain. The treatment is safe, gentle, and specifically designed for adult comfort.',
    },
    {
      question: 'How long does treatment take?',
      answer:
        "It depends on your case, but many adults see visible results in as little as 6–12 months. Some even sooner. We'll give you a better idea after your smile assessment.",
    },
    {
      question: 'What happens after I get my pre-assessment results?',
      answer:
        "You'll receive a personalized review and recommendation. If you're a suitable candidate, you can book a one-time complimentary in-person diagnosis — no pressure, no obligations.",
    },
    {
      question: "What if I've had dental work before? Can I still do aligners?",
      answer:
        "In most cases, yes. Let us know if you have crowns, implants, or bridges — we'll assess your case carefully and let you know what's possible.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Prepare section styles
  let sectionStyle = {};
  if (backgroundImage) {
    sectionStyle = {
      position: 'relative',
    };
  }

  return (
    <section
      ref={forwardedRef}
      className={`faq-section padding ${
        backgroundImage ? 'with-tooth-bg' : ''
      }`}
      style={sectionStyle}
    >
      {backgroundImage && (
        <div
          className="tooth-background-center"
          style={{
            backgroundImage: 'url("/Tooth.png")',
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Container>
          <h2 className="main-title text-center">Frequently Asked Questions</h2>

          <div className="faq-container">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${
                  openIndex === index ? 'active' : ''
                } fade-in-up`}
                onClick={() => toggleQuestion(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
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
      </div>
    </section>
  );
};

export default FAQ;
