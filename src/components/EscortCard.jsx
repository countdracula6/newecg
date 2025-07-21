import React from 'react';
import './EscortCard.css';
import { FaHeart, FaShareAlt, FaVideo } from 'react-icons/fa';

const EscortCard = ({ name, age, city, photo, onFavorite, onShare, onCam }) => {
  return (
    <div className="escort-card">
      <img src={photo} alt={name} className="escort-photo" />
      <div className="escort-details">
        <h3 className="escort-name">{name}</h3>
        <p className="escort-meta">{age} · {city}</p>
        <div className="escort-icons">
          <button onClick={onFavorite} title="Add to Favorites" className="icon-btn"><FaHeart /></button>
          <button onClick={onCam} title="Watch Teaser" className="icon-btn"><FaVideo /></button>
          <button onClick={onShare} title="Share" className="icon-btn"><FaShareAlt /></button>
        </div>
        <button className="book-button">Book Me</button>
      </div>
    </div>
  );
};

export default EscortCard;
