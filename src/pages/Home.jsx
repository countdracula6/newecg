import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterBar from '../components/FilterBar';
import EscortCard from '../components/EscortCard';
import escorts from '../data/escorts';
import { useState } from 'react';
import '../App.css';

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

      <FilterBar selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      {renderAreas()}

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
    </div>
  );
};

export default Home;
