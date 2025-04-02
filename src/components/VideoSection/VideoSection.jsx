import React from 'react';
import './VideoSection.css';

const VideoSection = ({ title, videoSrc, content }) => {
  return (
    <section className="video-section">
      <h2 className="main-title">{title}</h2>
      <div className="video-container">
        <video controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-container">{content}</div>
    </section>
  );
};

export default VideoSection;
