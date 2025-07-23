import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import '../App.css';

const LiveCam = () => {
  const [balance, setBalance] = useState(9.99); // example starting balance
  const [streaming, setStreaming] = useState(false);
  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);
  const [tips, setTips] = useState(0);
  const [duration, setDuration] = useState(0);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    let interval;
    if (streaming) {
      interval = setInterval(() => {
        setDuration((d) => d + 1);
        setBalance((prev) => {
          const newBal = parseFloat((prev - 0.99).toFixed(2));
          if (newBal <= 0) {
            clearInterval(interval);
            setStreaming(false);
            return 0;
          }
          return newBal;
        });
      }, 60000);
    }
    return () => clearInterval(interval);
  }, [streaming]);

  const handleChatSend = () => {
    if (chat.trim()) {
      setMessages([...messages, { from: 'user', text: chat }]);
      setChat('');
    }
  };

  const handleTip = (amount) => {
    if (balance >= amount) {
      setTips((prev) => prev + amount);
      setBalance((prev) => parseFloat((prev - amount).toFixed(2)));
    } else {
      alert('Insufficient balance to tip.');
    }
  };

  const handleRating = (value) => {
    setRating(value);
    alert(`Thanks for rating the model ${value} stars!`);
  };

  return (
    <div className="App" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 12px' }}>
      <Header />
      <section className="live-cam">
        <h1>Live Cam Experience</h1>
        <p>
          Pay-per-minute: <strong>$0.99</strong> · Balance: <strong>${balance.toFixed(2)}</strong> · 
          Tipped: <strong>${tips.toFixed(2)}</strong> · Time: <strong>{duration} min</strong>
        </p>

        <div className="cam-area">
          <div className="video-box">
            {streaming ? (
              <video width="100%" height="300" controls autoPlay muted style={{ borderRadius: '8px' }}>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="video-placeholder">Camera Preview</div>
            )}
            <button onClick={() => setStreaming(true)} disabled={balance <= 0 || streaming}>
              {streaming ? 'Streaming Live' : 'Start Stream'}
            </button>
            <div className="tip-buttons">
              <button onClick={() => handleTip(1)}>Tip $1</button>
              <button onClick={() => handleTip(5)}>Tip $5</button>
              <button onClick={() => handleTip(10)}>Tip $10</button>
            </div>
          </div>

          <div className="chat-box">
            <div className="messages">
              {messages.map((msg, idx) => (
                <p key={idx}><strong>{msg.from === 'user' ? 'You' : 'Model'}:</strong> {msg.text}</p>
              ))}
            </div>
            <input
              type="text"
              placeholder="Say something nice..."
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleChatSend()}
            />
            <button onClick={handleChatSend}>Send</button>

            {streaming && !rating && (
              <div className="rating">
                <p>Rate this session:</p>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => handleRating(star)}>{'★'.repeat(star)}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />

      <style jsx>{`
        .live-cam {
          color: #fff;
          padding: 40px 20px;
        }
        .live-cam h1 {
          color: #ffb6c1;
          margin-bottom: 12px;
        }
        .cam-area {
          display: flex;
          gap: 24px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .video-box {
          flex: 1 1 400px;
          background: #2b0010;
          padding: 24px;
          border-radius: 8px;
          text-align: center;
        }
        .video-placeholder {
          background: #330016;
          height: 300px;
          border-radius: 8px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ccc;
          font-size: 1.2rem;
        }
        .video-box button {
          background: #ff4f87;
          color: white;
          padding: 10px 20px;
          font-size: 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin: 8px 6px 0 6px;
        }
        .tip-buttons {
          margin-top: 16px;
        }
        .chat-box {
          flex: 1 1 400px;
          background: #1e0012;
          padding: 24px;
          border-radius: 8px;
        }
        .chat-box .messages {
          max-height: 240px;
          overflow-y: auto;
          margin-bottom: 12px;
          border-bottom: 1px solid #333;
          padding-bottom: 8px;
        }
        .chat-box input {
          width: 100%;
          padding: 10px;
          margin-top: 12px;
          border-radius: 6px;
          border: none;
          font-size: 1rem;
        }
        .chat-box button {
          margin-top: 10px;
          padding: 10px 16px;
          background: #ff0066;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
        }
        .rating {
          margin-top: 20px;
        }
        .rating button {
          margin: 0 4px;
          font-size: 1.2rem;
          background: none;
          border: none;
          color: #ffcc00;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default LiveCam;
