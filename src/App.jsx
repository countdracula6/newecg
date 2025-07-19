import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EscortCard from './components/EscortCard';
import FilterBar from './components/FilterBar';
import escorts from './data/escorts';
import { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState('All');

  const filteredEscorts = escorts.filter((escort) =>
    selectedCity === 'All' ? true : escort.city === selectedCity
  );

  const renderAreas = () => {
    if (selectedCity === 'São Paulo') {
      return <p className="area-tags">Tatuapé · Guarulhos · Lapa · Centro · Pinheiros · Jardins · Moema · Bela Vista · Vila Olímpia</p>;
    } else if (selectedCity === 'Rio de Janeiro') {
      return <p className="area-tags">Leblon · Lapa · Niterói · Copacabana · Ipanema · Barra da Tijuca · Centro</p>;
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

      <main className="escort-list">
        {filteredEscorts.slice(0, 18).map((escort, index) => (
          <div key={escort.id} style={{ animationDelay: `${index * 0.1}s` }} className="animated-card">
            <EscortCard {...escort} />
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
