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

      <main className="masonry-grid">
        {filteredEscorts.slice(0, 9).map((escort, index) => (
          <div key={escort.id} className="masonry-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <EscortCard
              name={escort.name}
              age={escort.age}
              city={escort.city}
              photo={escort.image || './photos/garota-1.jpg'}
            />
          </div>
        ))}
      </main>

      <Footer />

      <style jsx>{`
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

        .mobile-nav.open .burger-close-button {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Home;
