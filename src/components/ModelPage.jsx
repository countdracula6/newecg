import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import escorts from '../data/escorts.json';
import '../App.css';
import './ModelPage.css';

const ModelPage = () => {
  const { id } = useParams();
  const escort = escorts.find(e => e.id === parseInt(id));

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
          <div className="gallery">
            {escort.photos?.slice(0, 6).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${escort.name} ${i + 1}`}
                className="gallery-photo"
              />
            ))}
          </div>
        </section>

        <section className="details-section">
          <ul className="info-list">
            <li><strong>Age:</strong> {escort.age}</li>
            <li><strong>City:</strong> {escort.city}</li>
            <li><strong>Area:</strong> {escort.area}</li>
            <li><strong>Height:</strong> 1.68m</li>
            <li><strong>Weight:</strong> 55kg</li>
            <li><strong>Incall:</strong> Yes</li>
            <li><strong>Outcall:</strong> Yes</li>
            <li><strong>Fees:</strong> $300/hour</li>
          </ul>
          <p className="description">
            I’m {escort.name}, your sensual escape in {escort.city}. My company is all about chemistry,
            laughter, and fulfilling your most exquisite desires. Expect discretion, passion, and a great time.
          </p>

          <a
            href={`https://wa.me/5500000000000?text=Hello%20${escort.name},%20I%20would%20like%20to%20book%20a%20session.`}
            className="book-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK NOW ON WHATSAPP
          </a>

          <Link to="/" className="back-link">← Back to Home</Link>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 12px;
          padding: 12px;
        }

        .gallery-photo {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .gallery-photo:hover {
          transform: scale(1.03);
        }

        .details-section {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }

        .info-list li {
          margin-bottom: 8px;
          font-size: 1.1rem;
        }

        .description {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 24px;
        }

        .book-button {
          display: inline-block;
          background-color: #e30e35;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        .book-button:hover {
          background-color: #c00d2f;
        }

        .back-link {
          display: inline-block;
          margin-top: 16px;
          font-size: 0.95rem;
          color: #666;
          text-decoration: none;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .gallery-photo {
            height: 150px;
          }
          .details-section {
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default ModelPage;
