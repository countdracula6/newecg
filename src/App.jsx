import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EscortCard from './components/EscortCard';
import escorts from './data/escorts.json';
import { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState('São Paulo');

  const filteredEscorts = escorts.filter((escort) => escort.city === selectedCity);

  return (
    <div className="page">
      <Header />

      <main className="main-section">
        <div className="city-tabs">
  <button
    className={selectedCity === 'São Paulo' ? 'active' : ''}
    onClick={() => setSelectedCity('São Paulo')}
  >
    São Paulo
  </button>
  <button
    className={selectedCity === 'Rio de Janeiro' ? 'active' : ''}
    onClick={() => setSelectedCity('Rio de Janeiro')}
  >
    Rio de Janeiro
  </button>
</div>

<h2 className="section-title">Explore {selectedCity} Companions</h2>


        <p className="section-desc">
          Browse premium, verified escorts from {selectedCity}’s finest areas. Discreet, elegant, and ready for unforgettable encounters.
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
