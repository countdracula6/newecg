import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterBar from '../components/FilterBar';
import EscortCard from '../components/EscortCard';
import escorts from '../data/escorts';
import { useState } from 'react';
import '../App.css';
import '../components/FilterBar.css';

const Home = () => {
  const [selectedCity, setSelectedCity] = useState('All');
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedEscort, setSelectedEscort] = useState(null);

  const filteredEscorts = escorts.filter((escort) =>
    selectedCity === 'All' ? true : escort.city === selectedCity
  );

  const renderAreas = () => {
    if (selectedCity === 'São Paulo') {
      return (
        <p className="area-tags">
          Tatuapé · Guarulhos · Lapa · Centro · Pinheiros · Jardins · Moema · Bela Vista · Vila Olímpia
        </p>
      );
    } else if (selectedCity === 'Rio de Janeiro') {
      return (
        <p className="area-tags">
          Leblon · Lapa · Niterói · Copacabana · Ipanema · Barra da Tijuca · Centro
        </p>
      );
    }
    return null;
  };

  const handleFavorite = (name) => {
    alert(`${name} added to favorites!`);
  };

  const handleShare = (name) => {
    const shareText = `Check out ${name} on ESCORTGIRLBRAZIL!`;
    if (navigator.share) {
      navigator.share({
        title: 'ESCORTGIRLBRAZIL',
        text: shareText,
        url: window.location.href,
      });
    } else {
      alert('Share this escort: ' + window.location.href);
    }
  };

  const handleCam = (escort) => {
    setSelectedEscort(escort);
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
    setSelectedEscort(null);
  };

  return (
    <div className="App">
      <Header />

      <section className="intro">
        <h2 className="intro-title">Welcome to ESCORTGIRLBRAZIL</h2>
        <p className="intro-text">
          Discover São Paulo and Rio de Janeiro’s most elegant and verified companions. Our carefully curated
          selection of high-class Brazilian escorts offers authenticity, beauty, and discretion. Whether you’re
          seeking unforgettable evenings or private luxury encounters, we connect you with real profiles — no
          fakes, no games.
        </p>
      </section>

      <section className="filters-section">
        <div className="responsive-filters">
          <FilterBar selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        </div>
        {renderAreas()}
      </section>

      <main className="escort-grid">
        {filteredEscorts.slice(0, 9).map((escort, index) => (
          <div key={escort.id} className="escort-card-wrapper animated-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <EscortCard
              name={escort.name}
              age={escort.age}
              city={escort.city}
              photo={escort.image || './photos/garota-1.jpg'}
              onFavorite={() => handleFavorite(escort.name)}
              onShare={() => handleShare(escort.name)}
              onCam={() => handleCam(escort)}
            />
          </div>
        ))}
      </main>

      {videoOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeVideo}>&times;</span>
            <h3>{selectedEscort?.name}'s Live Teaser</h3>
            <video width="100%" controls autoPlay onEnded={closeVideo}>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        .escort-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .escort-card-wrapper {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .escort-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            padding: 16px;
          }
        }

        .filters-section {
          margin: 24px auto;
          padding: 12px;
        }

        .responsive-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        @media (max-width: 600px) {
          .responsive-filters button {
            flex: 1 1 100%;
            font-size: 1rem;
            padding: 10px;
          }
        }

        .burger-close-button {
          display: block;
          position: absolute;
          top: 12px;
          right: 18px;
          font-size: 2rem;
          color: #fff;
          background: none;
          border: none;
          z-index: 10001;
          cursor: pointer;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .modal-content {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          width: 90%;
          max-width: 600px;
          text-align: center;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 1.5rem;
          cursor: pointer;
          color: #900;
        }
      `}</style>
    </div>
  );
};

export default Home;
