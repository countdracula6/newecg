import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EscortCard from './components/EscortCard';
import escorts from './data/escorts.json';

function App() {
  return (
    <div className="page">
      <Header />

      <main className="main-section">
        <h2 className="section-title">Explore Brazil’s Most Elegant Companions</h2>
        <p className="section-desc">
          Discover verified, high-class escorts in São Paulo, Rio de Janeiro, Brasília, and Florianópolis.
          Real profiles, discreet meetings, and unforgettable experiences — curated for those who seek quality, beauty, and authenticity.
          No fake ads. No games.
        </p>

       <div className="gallery">
  {escorts.slice(0, 9).map((escort) => (
    <EscortCard key={escort.id} {...escort} />
  ))}
</div>

      </main>

      <Footer />
    </div>
  );
}

export default App;
