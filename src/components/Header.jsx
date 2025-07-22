import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          ESCORT<span>GIRL</span><em>BRAZIL</em>
        </h1>

        <nav>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
              <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/brazilian-escorts">Brazilian Escorts</Link></li>
    <li><Link to="/live-cam">Live Cam</Link></li>
    <li><Link to="/how-to-ad">How to Ad</Link></li>
    <li><Link to="/contact">Contact</Link></li>
          </ul>

          {isOpen && (
            <button className="burger-close-button" onClick={closeMenu}>
              ✕
            </button>
          )}

          <div className="burger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
