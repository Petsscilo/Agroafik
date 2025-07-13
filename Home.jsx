import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Farm Fresh Eggs. Delivered Daily.</h1>
          <p>Organic • Affordable • Bulk Supply</p>
          <a
            href="https://wa.me/2347012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* About AgroAfricana */}
      <section className="about">
        <h2>About AgroAfricana</h2>
        <p>
          We provide farm-fresh eggs directly from our poultry to your home or
          business. Our hens are raised on natural feed without hormones or
          chemicals, ensuring you get the most organic eggs every day.
        </p>
      </section>

      {/* Product Highlights */}
      <section className="products">
        <h2>Product Highlights</h2>
        <div className="product-cards">
          <div className="card">
            <h3>Organic Quality</h3>
            <p>No additives, no stress. 100% healthy farm eggs.</p>
          </div>
          <div className="card">
            <h3>Affordable Prices</h3>
            <p>Fair prices for individuals, businesses, and bulk orders.</p>
          </div>
          <div className="card">
            <h3>Bulk Supply</h3>
            <p>We supply households, restaurants, supermarkets and more.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>
              "Absolutely love the freshness. The best eggs in the region!"
            </p>
            <strong>- Chioma, Chef</strong>
          </div>
          <div className="testimonial">
            <p>
              "Great prices and reliable delivery. Been ordering for months."
            </p>
            <strong>- Ibrahim, Store Owner</strong>
          </div>
          <div className="testimonial">
            <p>"No stress. Just top quality eggs every time."</p>
            <strong>- Amina, Caterer</strong>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to Get Fresh Eggs?</h2>
        <a
          href="https://wa.me/2347012345678"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
