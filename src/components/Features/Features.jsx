import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      imgSrc: '/doctor-icon.png',
      title: 'Expert Dental Professionals',
      altText:
        'Icon representing professional dentists at Borneo Dental Centre',
    },
    {
      imgSrc: '/tooth-icon.png',
      title: 'Advanced Dental Care',
      altText: 'Tooth icon symbolizing quality dental treatments and care',
    },
    {
      imgSrc: '/currency-icon.png',
      title: 'Affordable Treatment Options',
      altText: 'Currency icon representing cost-effective dental solutions',
    },
    {
      imgSrc: '/heart-icon.png',
      title: 'Patient-Centered Approach',
      altText:
        'Heart icon showing our commitment to compassionate patient care',
    },
    {
      imgSrc: '/digital-icon.png',
      title: 'Digital Dental Solutions',
      altText: 'Digital technology icon representing modern dental diagnostics',
    },
  ];

  return (
    <section className="features-section padding">
      <div className="features-wrapper">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-item"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="feature-box">
              <img
                src={feature.imgSrc}
                alt={feature.altText || feature.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
