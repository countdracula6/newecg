import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BrazilianEscorts from './pages/BrazilianEscorts';
import LiveCam from './pages/LiveCam';
import HowToAd from './pages/HowToAd';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/brazilian-escorts" element={<BrazilianEscorts />} />
        <Route path="/live-cam" element={<LiveCam />} />
        <Route path="/how-to-ad" element={<HowToAd />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
