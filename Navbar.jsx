import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AgroAfricana</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li>
          <a
            href="https://wa.me/2347012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="order-now-btn"
          >
            Order Now
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
