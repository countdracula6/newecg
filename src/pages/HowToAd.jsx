import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const HowToAd = () => {
  return (
    <div className="App">
      <Header />
      <main style={{ padding: '2rem', maxWidth: '960px', margin: '0 auto' }}>
        <Link to="/" style={{ color: '#e30e35', display: 'block', marginBottom: '1.5rem' }}>← Back to Home</Link>
        <h1 style={{ color: '#e30e35' }}>How to Advertise on ESCORTGIRLBRAZIL</h1>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Welcome to ESCORTGIRLBRAZIL — Brazil’s most elegant and trustworthy adult companion platform. If you are a verified, independent escort, you can showcase your presence here with confidence, safety, and style.
        </p>

        <h2 style={{ color: '#e30e35', marginTop: '2rem' }}>💡 Who Can Advertise?</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>You must be at least <strong>18 years old</strong> (strictly verified).</li>
          <li>You must be an <strong>independent escort</strong> — we do <u>not</u> accept agencies or third-party managers.</li>
          <li>Your photos and content must be <strong>real</strong>, recent, and represent <strong>yourself</strong>.</li>
        </ul>

        <h2 style={{ color: '#e30e35', marginTop: '2rem' }}>🛂 Verification Process</h2>
        <p>
          All new advertisers must go through a secure and private age and identity verification. You will be asked to:
        </p>
        <ol style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
          <li>Submit a valid government-issued ID.</li>
          <li>Send a selfie holding your ID next to a handwritten note with today's date.</li>
          <li>Confirm your mobile number for secure contact (not shown publicly).</li>
        </ol>

        <h2 style={{ color: '#e30e35', marginTop: '2rem' }}>📷 What Goes In Your Ad?</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Up to 6 high-quality photos (no nudity required).</li>
          <li>A short bio (max 200 words) in your own words.</li>
          <li>Details like age, height, city, availability (incall/outcall), and languages.</li>
          <li>Your preferred payment methods.</li>
        </ul>

        <h2 style={{ color: '#e30e35', marginTop: '2rem' }}>🧾 Important Rules</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>NO AGENCIES:</strong> We only allow real, self-managed companions.</li>
          <li><strong>NO EXPLOITATION:</strong> We report and permanently ban any profiles suspected of human trafficking, coercion, or underage activity.</li>
          <li><strong>NO CRIMES:</strong> Any suspicion or report of violence, blackmail, or illegal behavior will be investigated and shared with authorities.</li>
          <li><strong>NO FAKE ADS:</strong> Photos and descriptions must be authentic. We routinely scan and verify content.</li>
        </ul>

        <h2 style={{ color: '#e30e35', marginTop: '2rem' }}>🛡️ Safety & Legal Notice</h2>
        <p>
          ESCORTGIRLBRAZIL is <strong>not an agency</strong>. We are an adult-classified platform that connects consenting adults. Any interaction between advertisers and clients is strictly private and does not involve us. We do not take commissions, nor do we mediate any financial transactions or agreements.
        </p>
        <p style={{ marginTop: '1rem' }}>
          We cooperate with all local, national, and international laws. Both <strong>advertisers and clients</strong> are expected to behave respectfully and responsibly.
        </p>

        <h2 style={{ color: '#e30e35', marginTop: '2rem' }}>🌐 Ready to Post?</h2>
        <p>
          If you're ready to begin, go to the <Link to="/contact" style={{ color: '#e30e35' }}>Contact</Link> page and request access to our secure onboarding form.
        </p>

        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#777' }}>
          “Companionship between two consenting adults is a private matter. Respect, trust, and elegance define us.”
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HowToAd;
