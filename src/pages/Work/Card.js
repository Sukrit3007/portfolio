import React from 'react';
import './Card.css'; // Import your external CSS file for styling

const Card = ({ link, imageSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {/* Center the button horizontally */}
        <div className="button-container">
          <button className="card-button"><a href={link}>Learn more</a></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
