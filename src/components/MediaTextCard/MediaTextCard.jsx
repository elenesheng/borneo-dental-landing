import React from 'react';
import { Button } from 'react-bootstrap';
import './MediaTextCard.css';

const MediaTextCard = ({
  forwardedRef,
  media,
  title,
  subtitle,
  content,
  position = 'left',
  mediaType = 'image',
  isButtonVisible = true,
  primaryButtonText = 'Book Appointment',
  scrollToSection,
  contactRef,
}) => {
  const mediaContent =
    mediaType === 'video' ? (
      <video controls className="ImageTextCard-media">
        <source src={media} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <img src={media} alt={title} className="ImageTextCard-media" />
    );

  const renderButtons = () => {
    if (!isButtonVisible || mediaType === 'video') return null;

    return (
      <div className="cta-group d-flex mt-4">
        <Button
          variant="primary"
          size="lg"
          className="primary-button"
          onClick={() => scrollToSection(contactRef)}
        >
          {primaryButtonText}
        </Button>
      </div>
    );
  };

  return (
    <section
      ref={forwardedRef}
      className={`ImageTextCard-section padding ${position}-media`}
    >
      {position === 'left' ? (
        <>
          <div className="ImageTextCard-media-container">{mediaContent}</div>
          <div className="ImageTextCard-info">
            <h2 className="ImageTextCard-title">{title}</h2>
            <div className="ImageTextCard-text">{content}</div>
            {renderButtons()}
          </div>
        </>
      ) : (
        <>
          <div className="ImageTextCard-info">
            <h2 className="ImageTextCard-title">{title}</h2>
            <div className="ImageTextCard-text">{content}</div>
            {renderButtons()}
          </div>
          <div className="ImageTextCard-media-container">{mediaContent}</div>
        </>
      )}
    </section>
  );
};

export default MediaTextCard;
