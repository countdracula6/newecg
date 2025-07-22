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
    <div className="App" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 12px' }}>
      <Header />

      <section className="intro">
        <h1 className="intro-title">Welcome to ESCORTGIRLBRAZIL</h1>
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
              id={escort.id}
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

      <section className="seo-section aligned-container">
        <h2>The Best Escorts São Paulo and Rio de Janeiro Has to Offer</h2>
        <h3>Unmatched Companionship and Authentic Encounters</h3>
        <p>
          Our Brazilian escort platform is known for delivering what it promises. We value commitment and authenticity.
          Every model featured here strives to meet your expectations. Many are also experienced in massage,
          offering deeply personal and relaxing encounters — the ultimate girlfriend experience.
        </p>

        <h3>Intelligent and Elegant Companions</h3>
        <p>
          Many of our escorts in São Paulo and Rio de Janeiro are real glamour or fashion models.
          They're stunning, educated, and have a deep appreciation for Brazilian culture.
          Most speak Portuguese and additional languages like English, Spanish, or Italian.
        </p>

        <h3>Escort Locations Across São Paulo and Rio</h3>
        <p>
          Whether you're looking in <strong>São Paulo</strong> — Tatuapé, Guarulhos, Lapa, Centro, Pinheiros, Jardins,
          Moema, Bela Vista, or Vila Olímpia — or in <strong>Rio de Janeiro</strong> — Leblon, Lapa, Niterói,
          Copacabana, Ipanema, Barra da Tijuca, or Centro — we've got you covered.
          All escorts offer outcall services unless specified otherwise.
        </p>

        <h3>Your Desires, Understood</h3>
        <p>
          We’ve spent years listening to our clients and tailoring the experience to match your expectations.
          Our returning clients trust us, and new clients will quickly see why.
        </p>

        <h3>Booking Made Easy</h3>
        <p>
          Browse the profiles, select your favorite, and use our contact form.
          Our support is available 24/7. We help you choose, refine preferences,
          and create a safe, luxurious, and discreet connection.
        </p>

        <h3>Mutual Respect and Adult Consent</h3>
        <p>
          All companions are verified and over 18. We do not tolerate illegal conduct,
          mistreatment, or abuse — from either side. This is a respectful adult platform focused on companionship and mutual pleasure.
        </p>
      </section>

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
          box-sizing: border-box;
        }

        .escort-card-wrapper {
          display: flex;
          justify-content: center;
          box-sizing: border-box;
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

        .seo-section {
          padding: 48px 24px;
          margin-top: 64px;
          color: #f8f8f8;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .seo-section h2, .seo-section h3 {
          color: #ffb6c1;
          margin-top: 32px;
        }

        .seo-section p {
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 20px;
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
