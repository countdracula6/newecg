import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
  ESCORT<span>GIRL</span><em>BRAZIL</em>
</h1>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Brazilian Escorts</a></li>
          <li><a href="#">Live Cam</a></li>
          <li><a href="#">How to Ad</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
