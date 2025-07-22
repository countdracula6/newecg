import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const Contact = () => {
  return (
    <div className="App">
      <Header />
      <main className="contact-page" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#e30e35' }}>Contact ESCORTGIRLBRAZIL</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          We value your feedback, questions, and inquiries. Whether you’re looking to advertise your profile, report a concern, or simply get in touch with our team, we’re here to help.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Please use the secure form below. All messages are treated confidentially, and we never share your personal details.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Your message has been submitted. We'll be in touch shortly.");
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <label style={{ fontWeight: 'bold' }}>Full Name</label>
          <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />

          <label style={{ fontWeight: 'bold' }}>Email Address</label>
          <input type="email" name="email" placeholder="you@example.com" required style={inputStyle} />

          <label style={{ fontWeight: 'bold' }}>Subject</label>
          <input type="text" name="subject" placeholder="What’s this about?" required style={inputStyle} />

          <label style={{ fontWeight: 'bold' }}>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Type your message here..."
            required
            style={{ ...inputStyle, resize: 'vertical' }}
          />

          <button type="submit" style={submitStyle}>Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

const inputStyle = {
  padding: '12px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '6px',
  width: '100%',
  boxSizing: 'border-box',
};

const submitStyle = {
  backgroundColor: '#e30e35',
  color: '#fff',
  padding: '14px',
  fontSize: '1.1rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '1rem',
  transition: 'background 0.3s',
};

export default Contact;
