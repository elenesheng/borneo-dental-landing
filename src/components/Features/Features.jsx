import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'bi-gem',
      title: "Malaysia's Diamond Provider",
      isCustom: false,
    },
    {
      imgSrc: '/toothIcon.png',
      title: 'Pain-Free Technology',
      isCustom: true,
    },
    {
      icon: 'bi-calculator',
      title: 'Affordable Plans',
      isCustom: false,
    },
    {
      imgSrc: '/doctorIcon.png',
      title: 'Skilled Dental Professionals',
      isCustom: true,
    },
  ];

  return (
    <section className="features-section padding">
      <div className="features-wrapper">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-box">
              {feature.isCustom ? (
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="feature-icon"
                />
              ) : (
                <i className={`bi ${feature.icon}`}></i>
              )}
              <h3>{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
