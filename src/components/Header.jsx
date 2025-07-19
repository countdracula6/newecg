import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          ESCORT<span>GIRL</span><em>BRAZIL</em>
        </h1>

        <nav>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Brazilian Escorts</a></li>
            <li><a href="#">Live Cam</a></li>
            <li><a href="#">How to Ad</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
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
