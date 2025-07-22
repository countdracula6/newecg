import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../App.css';

const AboutUs = () => {
  return (
    <div className="App">
      <Header />
      <main className="about-page" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#e30e35' }}>← Back to Home</Link>
        <h1 style={{ color: '#e30e35' }}>About ESCORTGIRLBRAZIL</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Welcome to ESCORTGIRLBRAZIL — your trusted source for discovering the most elegant, verified, and high-class companions across São Paulo and Rio de Janeiro. Our mission is to provide a safe, authentic, and luxurious experience for those seeking intimate, discreet, and unforgettable moments with Brazilian escorts.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          We understand that finding a genuine connection in the world of adult companionship can be a challenge. That’s why we have built a curated platform that values honesty, security, and style. Every profile featured on our site is manually reviewed to ensure quality, legitimacy, and real beauty. No fake images, no misleading descriptions — just real people offering real encounters.
        </p>

        <h2 style={{ color: '#e30e35' }}>What Sets Us Apart?</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Verified Profiles:</strong> All escorts listed go through an identity and content verification process.</li>
          <li><strong>Premium Presentation:</strong> Elegant, professional designs make browsing and booking easy and enjoyable.</li>
          <li><strong>Focus on Privacy:</strong> We never track or store your personal browsing data. Discretion is at our core.</li>
          <li><strong>Mobile-First Experience:</strong> Our layout is optimized for smartphones, tablets, and desktops alike.</li>
        </ul>

        <h2 style={{ color: '#e30e35' }}>Our Story</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          ESCORTGIRLBRAZIL began with a simple goal — to provide a stylish, safe, and sexy space where elite companions could advertise their services honestly. Too many platforms are filled with scams, poor layouts, and outdated profiles. We knew Brazil deserved better.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Founded by a team of developers, designers, and real former companions, the site brings both technical excellence and human sensitivity. We believe that adult content can be elevated — into something refined, beautiful, and client-focused.
        </p>

        <h2 style={{ color: '#e30e35' }}>A Note to Our Clients</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Whether you are visiting São Paulo or Rio on business, or simply looking for a night of sensual escape, you deserve transparency and elegance. Every escort on this platform has chosen to be here. They are independent, empowered, and professional.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          We invite you to explore with respect. Ask questions. Read profiles carefully. And above all — enjoy the company of someone who truly wants to connect. That’s what makes us different.
        </p>

        <h2 style={{ color: '#e30e35' }}>Search Engine Optimized</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Our content is crafted to reflect the top search terms related to Brazilian escorts in São Paulo and Rio de Janeiro, including luxury escort services, high-class companions, GFE experiences, and discreet incall/outcall bookings. This helps you find what you want faster, and ensures real visibility for our advertisers.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          ESCORTGIRLBRAZIL is not just a website — it’s a curated destination for those who appreciate class, honesty, and Brazilian passion. From the beaches of Copacabana to the nightlife of Jardins, we are proud to showcase the most stunning independent companions in the country.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/contact" style={{ color: '#e30e35', textDecoration: 'underline' }}>→ Contact Us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
