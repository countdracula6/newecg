import React from 'react';
import { useParams } from 'react-router-dom';
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ModelPage;