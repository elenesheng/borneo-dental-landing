import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0742742835837!2d-64.19121492428979!3d-31.41599997450455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28892a73dd1%3A0x4104a66357705427!2sAv.%20Col%C3%B3n%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1sen!2s!4v1709307611657!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
