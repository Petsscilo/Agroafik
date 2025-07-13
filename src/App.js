import React from 'react';
import 'App.css';

function App() {
  return (
    <div className="App">
      {/* Flyer Header */}
      <header className="header">
        <h1>AgroAfik Flyer</h1>
        <p>Promoting agriculture one flyer at a time 🌾</p>
      </header>

      {/* Flyer Image Section */}
      <section className="flyer">
        <img src="/flyer.jpg" alt="Flyer" className="flyer-image" />
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
