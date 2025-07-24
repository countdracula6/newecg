import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import escorts from '../data/escorts.json';
import '../App.css';
import './ModelPage.css';

const ModelPage = () => {
  const { id } = useParams();
  const escort = escorts.find(e => e.id == id);

  useEffect(() => {
    const gallery = document.querySelector('.auto-scroll');
    if (!gallery) return;

    let scrollPos = 0;
    const scrollNext = () => {
      if (!gallery) return;
      scrollPos += gallery.clientWidth;
      if (scrollPos >= gallery.scrollWidth) scrollPos = 0;
      gallery.scrollTo({ left: scrollPos, behavior: 'smooth' });
    };

    const interval = setInterval(scrollNext, 3500);
    return () => clearInterval(interval);
  }, []);

  if (!escort) {
    return (
      <div className="App">
        <Header />
        <main className="model-page">
          <h2 style={{ textAlign: 'center', color: '#ff3366' }}>Escort not found</h2>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main className="model-page">
        <section className="gallery-section">
          <h2 className="model-name">{escort.name}</h2>
          <div className="gallery auto-scroll">
            {[...Array(6).keys()].map((i) => (
              <img
                key={i}
                src={`/photos/escort-${escort.id}-${i + 1}.jpg`}
                onError={(e) => { e.target.src = '/photos/default.jpg'; }}
                alt={`Escort ${escort.name} ${i + 1}`}
                className="gallery-photo"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <h3 className="section-title">My Profile</h3>

        <section className="details-section">
          <ul className="info-list">
            <li><strong>Age:</strong> {escort.age}</li>
            <li><strong>City:</strong> {escort.city}</li>
            <li><strong>Area:</strong> {escort.area}</li>
            <li><strong>Height:</strong> {escort.height || "1.68"}m</li>
            <li><strong>Weight:</strong> {escort.weight || "55"}kg</li>
            <li><strong>Incall:</strong> {escort.incall ?? "Yes"}</li>
            <li><strong>Outcall:</strong> {escort.outcall ?? "Yes"}</li>
            <li><strong>Fees:</strong> ${escort.fees || 300}/hour</li>
          </ul>
          <p className="description">
            I’m {escort.name}, your sensual escape in {escort.city}. My company is all about chemistry,
            laughter, and fulfilling your most exquisite desires. Expect discretion, passion, and a great time.
          </p>
        </section>

        <div className="section-wrapper">
          <h3 className="section-title">Get in Touch</h3>
          <section className="contact-buttons">
            <a href={`sms:+550000000000`} className="sms-button">Send SMS</a>
            <a href={`https://wa.me/550000000000`} target="_blank" rel="noopener noreferrer" className="whatsapp-button">WhatsApp</a>
          </section>
        </div>

        <section className="contact-layout">
          <div className="map-wrapper">
            <h3 className="section-title">Approximate Location</h3>
            <iframe
              title="Escort Map"
              width="100%"
              height="300"
              style={{ borderRadius: '12px', border: '1px solid #ff3366' }}
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(escort.city + ', ' + escort.area)}&output=embed`}
            ></iframe>
            <p style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.9rem', color: '#fbe3e8' }}>
              *Location is approximate. For safety reasons, exact address will be shared upon confirmation.
            </p>
          </div>

          <div className="booking-wrapper">
            <h3 className="section-title">Booking Request</h3>
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="booking-date">Select Date:</label>
                <input type="date" id="booking-date" name="booking-date" required />
              </div>
              <div className="form-group">
                <label htmlFor="booking-time">Preferred Time:</label>
                <input type="time" id="booking-time" name="booking-time" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea id="message" name="message" rows="4" placeholder="Write a short message..." required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Request</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ModelPage;
