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
  flexPosition = 'center',
  altText,
}) => {
  // Check if the media is a Google Drive link
  const isGoogleDriveVideo =
    mediaType === 'video' && media && media.includes('drive.google.com');

  // Generate SEO-friendly alt text if not provided
  const generateAltText = () => {
    if (altText) return altText;

    // If no custom alt text provided, create a descriptive one based on title
    return title
      ? `${title} - Borneo Dental Centre professional dental service image`
      : 'Dental treatment and clear aligner services at Borneo Dental Centre';
  };

  const mediaContent =
    mediaType === 'video' ? (
      isGoogleDriveVideo ? (
        <iframe
          src={media}
          className="ImageTextCard-media video-iframe"
          width="600"
          height="400"
          frameBorder="0"
          allowFullScreen
          title={
            title || 'Video about dental treatments at Borneo Dental Centre'
          }
        ></iframe>
      ) : (
        <video controls className="ImageTextCard-media">
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    ) : (
      <img
        src={media}
        alt={generateAltText()}
        className="ImageTextCard-media"
      />
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
      className={`ImageTextCard-section padding ${position}-media ${flexPosition}-aligned`}
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
