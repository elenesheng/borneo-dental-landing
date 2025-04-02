import React from 'react';
import './ImageSection.css';

const ImageSection = ({ title, image, content }) => {
  return (
    <div className="full-section padding">
      <h3 className="main-title">{title}</h3>
      <img src={image} alt={title} />
      {content && <div className="section-content">{content}</div>}
    </div>
  );
};

export default ImageSection;
