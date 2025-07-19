import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EscortCard from './components/EscortCard';
import escorts from './data/escorts.json';
import { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState('São Paulo');
  const [selectedArea, setSelectedArea] = useState('');

  const cityAreas = {
    'São Paulo': ['Jardins', 'Moema', 'Bela Vista', 'Vila Olímpia', 'Centro', 'Pinheiros', 'Tatuapé', 'Guarulhos', 'Lapa'],
    'Rio de Janeiro': ['Copacabana', 'Ipanema', 'Barra da Tijuca', 'Centro', 'Leblon', 'Lapa', 'Niterói']
  };

  const filteredEscorts = escorts.filter((escort) => {
    return (
      escort.city === selectedCity &&
      (selectedArea === '' || escort.area === selectedArea)
    );
  });

  return (
    <div className="page">
      <Header />

      <main className="main-section">
        <div className="city-tabs">
          <button
            className={selectedCity === 'São Paulo' ? 'active' : ''}
            onClick={() => {
              setSelectedCity('São Paulo');
              setSelectedArea('');
            }}
          >
            São Paulo
          </button>
          <button
            className={selectedCity === 'Rio de Janeiro' ? 'active' : ''}
            onClick={() => {
              setSelectedCity('Rio de Janeiro');
              setSelectedArea('');
            }}
          >
            Rio de Janeiro
          </button>
        </div>

        <div className="area-pills">
          <button
            className={selectedArea === '' ? 'active' : ''}
            onClick={() => setSelectedArea('')}
          >
            All Areas
          </button>
          {cityAreas[selectedCity].map((area) => (
            <button
              key={area}
              className={selectedArea === area ? 'active' : ''}
              onClick={() => setSelectedArea(area)}
            >
              {area}
            </button>
          ))}
        </div>

        <h2 className="section-title">Explore {selectedCity} Companions</h2>
        <p className="section-desc">
          {selectedArea
            ? `Now showing only ${selectedArea} area in ${selectedCity}.`
            : `Browse all premium companions in ${selectedCity}.`}
        </p>

        <div className="gallery">
          {filteredEscorts.map((escort) => (
            <EscortCard key={escort.id} {...escort} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
