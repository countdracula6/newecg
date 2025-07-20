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
    <div className="animated-card escort-card" id={name}>
      <img
        src={photo}
        alt={name}
        className="escort-photo fade-in"
        loading="lazy"
      />

      <div className="animated-card-content">
        <h3>{name}, {age}</h3>
        <p>{city}</p>

        <div className="card-icons">
          <i title="Favorite" onClick={toggleLike}>
            <FaHeart className={liked ? 'liked' : ''} />
          </i>
          <i title="Live Cam" onClick={() => alert(`${name} is currently offline.`)}>
            <FaVideo />
          </i>
          <i title="Share" onClick={shareAd}>
            <FaShareAlt />
          </i>
        </div>

        <button>BOOK HER</button>
      </div>
    </div>
  );
};

export default EscortCard;
