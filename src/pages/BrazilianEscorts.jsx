import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../App.css';
import sampleImg1 from '../assets/brazil-escort-1.jpg';
import sampleImg2 from '../assets/brazil-escort-2.jpg';
import sampleImg3 from '../assets/brazil-escort-3.jpg';

const BrazilianEscorts = () => {
  return (
    <div className="App">
      <Header />
      <main className="brazilian-escorts-page" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#e30e35' }}>← Back to Home</Link>
        <h1 style={{ color: '#e30e35' }}>Brazilian Escorts: São Paulo & Rio de Janeiro</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Brazilian escorts are internationally admired for their natural beauty, charisma, and warm, affectionate personalities. At ESCORTGIRLBRAZIL, we focus on delivering a carefully curated selection of verified and high-class Brazilian escorts in São Paulo and Rio de Janeiro. Whether you're in search of an unforgettable GFE (Girlfriend Experience), elite companionship, or just a discreet incall/outcall session, you've come to the right place.
        </p>

        <img src={sampleImg1} alt="Brazilian Escort" style={{ width: '100%', margin: '1rem 0', borderRadius: '8px' }} />

        <h2 style={{ color: '#e30e35' }}>Top 5 Keywords for SEO</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li>Brazilian escorts in São Paulo</li>
          <li>Luxury escorts Rio de Janeiro</li>
          <li>High-class companions Brazil</li>
          <li>GFE Brazilian escorts</li>
          <li>Discreet incall and outcall escorts</li>
        </ul>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
          We understand the importance of trust, discretion, and real quality. That’s why our team manually verifies each profile before publishing. Our mission is to eliminate fake ads and provide a truly upscale platform for elite companionship. All images, details, and contact information are real and up to date.
        </p>

        <img src={sampleImg2} alt="Rio de Janeiro Escort" style={{ width: '100%', margin: '1rem 0', borderRadius: '8px' }} />

        <h2 style={{ color: '#e30e35' }}>Why Choose Brazilian Escorts?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
          Brazilian women are known for their vibrant energy, beauty, and sensuality. From the iconic beaches of Copacabana to the upscale lounges of Jardins in São Paulo, our escorts embody passion and elegance. Whether you seek intelligent conversation, seductive companionship, or a deep emotional connection, our ladies know how to make every moment unforgettable.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
          You’ll find companions of all backgrounds, including Afro-Brazilian, European, Indigenous, and mixed-heritage escorts. Each profile provides essential details like age, city, services offered, photos, incall/outcall preferences, and a personal description.
        </p>

        <img src={sampleImg3} alt="High-Class Escort Brazil" style={{ width: '100%', margin: '1rem 0', borderRadius: '8px' }} />

        <h2 style={{ color: '#e30e35' }}>Client Tips</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <li>Always read full profiles to match your expectations.</li>
          <li>Respect your companion's boundaries and availability.</li>
          <li>Use clear communication to set appointments.</li>
          <li>Enjoy the experience as a human connection — not a transaction.</li>
        </ul>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
          Ready to discover your perfect match? Browse our listings and enjoy personalized, discreet connections. At ESCORTGIRLBRAZIL, luxury and authenticity are not optional — they’re our standard.
        </p>

        <Link to="/contact" style={{ color: '#e30e35', textDecoration: 'underline' }}>→ Contact us for inquiries</Link>
      </main>
      <Footer />
    </div>
  );
};

export default BrazilianEscorts;
