import React from 'react';
import './App.css'; // Assuming you're now styling everything in App.css

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">AgroAfricana</div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to AgroAfricana</h1>
        <p>Fresh, Organic Eggs Straight from the Farm to Your Table</p>
        <a
          href="https://wa.me/2347012345678"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order on WhatsApp
        </a>
      </header>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <h2>Why Choose AgroAfricana?</h2>
        <div className="reasons">
          <div className="reason">
            <img
              src="https://startup.com.ng/wp-content/uploads/2019/05/egg-distribution-business.jpg"
              alt="Healthy Eggs"
            />
            <h3>Fresh Daily</h3>
            <p>Collected every day—farm-fresh and full of nutrition.</p>
          </div>
          <div className="reason">
            <img
              src="https://mmsplusng.com/wp-content/uploads/2020/05/Egg-Supply-Business.jpg"
              alt="Organic Feed"
            />
            <h3>Organic Feed</h3>
            <p>100% natural diet—grain-fed chickens, no chemicals.</p>
          </div>
          <div className="reason">
            <img
              src="https://cdn.standardmedia.co.ke/images/saturday/lsrw4qpejozo85ng605f7dae8c2ca.jpg"
              alt="Delivery"
            />
            <h3>Fast Bulk Delivery</h3>
            <p>We deliver eggs in crates or custom packaging fast & fresh.</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Icon */}
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/2347012345678"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="WhatsApp"
          />
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 AgroAfricana Egg Farm. All rights reserved.</p>
        <p>Call: +234 701 234 5678 | Email: agroafricana@gmail.com</p>
        <p className="built-by">
          Built with ❤️ by <span className="animate">Ozoemelam</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
