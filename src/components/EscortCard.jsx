import './EscortCard.css';
import { FaHeart, FaVideo, FaShareAlt } from 'react-icons/fa';
import { useState } from 'react';

const EscortCard = ({ name, age, city, photo }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);
  const shareAd = () => {
    navigator.clipboard.writeText(`${window.location.href}#${name}`);
    alert(`Link to ${name}'s profile copied!`);
  };

  return (
    <div className="escort-card" id={name}>
      <img
  src={photo}
  alt={name}
  className="escort-photo fade-in"
  loading="lazy"
/>

      <div className="escort-info">
        <h2>{name}, {age}</h2>
        <p>{city}</p>
        <div className="icon-row">
          <FaHeart
            className={`icon ${liked ? 'liked' : ''}`}
            onClick={toggleLike}
            title="Favorite"
          />
          <FaVideo
            className="icon"
            title="Live Cam"
            onClick={() => alert(`${name} is currently offline.`)}
          />
          <FaShareAlt
            className="icon"
            title="Share"
            onClick={shareAd}
          />
        </div>
        <button className="book-btn">BOOK HER</button>
      </div>
    </div>
  );
};

export default EscortCard;
