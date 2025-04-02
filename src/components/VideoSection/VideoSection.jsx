import React from 'react';
import './VideoSection.css';

const VideoSection = ({ title, videoSrc, content }) => {
  // Check if the video source is a Google Drive link
  const isGoogleDriveVideo = videoSrc && videoSrc.includes('drive.google.com');

  return (
    <section className="video-section">
      {title && <h2 className="main-title">{title}</h2>}
      <div className="video-container">
        {isGoogleDriveVideo ? (
          // Render iframe for Google Drive videos
          <iframe
            src={videoSrc}
            className="responsive-iframe"
            frameBorder="0"
            allowFullScreen
            title={title || 'Video'}
          ></iframe>
        ) : (
          // Render native video element for local videos
          <video controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {content && <div className="content-container">{content}</div>}
    </section>
  );
};

export default VideoSection;
