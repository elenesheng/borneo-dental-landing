import React from 'react';
import { Button } from 'react-bootstrap';
import './MediaTextCard.css';

const MediaTextCard = ({
  forwardedRef,
  media,
  secondaryMedia,
  secondaryMediaAltText,
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

  // Generate alt text for secondary image
  const generateSecondaryAltText = () => {
    if (secondaryMediaAltText) return secondaryMediaAltText;

    return title
      ? `Additional image for ${title} - Borneo Dental Centre dental services`
      : 'Additional dental treatment image at Borneo Dental Centre';
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

  // Render secondary image if provided
  const secondaryMediaContent = secondaryMedia && (
    <img
      src={secondaryMedia}
      alt={generateSecondaryAltText()}
      className="ImageTextCard-secondary-media"
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

  // Special component for mobile view - this will reorder elements
  const MobileView = () => (
    <div className="d-md-none mobile-view">
      <h2 className="ImageTextCard-title">{title}</h2>
      <div className="ImageTextCard-media-container">
        {mediaContent}
        {secondaryMediaContent}
      </div>
      <div className="ImageTextCard-text">{content}</div>
      {renderButtons()}
    </div>
  );

  // Desktop view remains unchanged
  const DesktopView = () => (
    <div className="d-none d-md-flex ImageTextCard-section-inner padding">
      {position === 'left' ? (
        <>
          <div className="ImageTextCard-media-container">
            {mediaContent}
            {secondaryMediaContent}
          </div>
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
          <div className="ImageTextCard-media-container">
            {mediaContent}
            {secondaryMediaContent}
          </div>
        </>
      )}
    </div>
  );

  return (
    <section
      ref={forwardedRef}
      className={`ImageTextCard-section padding ${position}-media ${flexPosition}-aligned`}
    >
      <MobileView />
      <DesktopView />
    </section>
  );
};

export default MediaTextCard;
