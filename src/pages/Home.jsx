import React from "react";
import "./Home.css"; // 👈 Import the CSS file

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">EventHub</span>
          </h1>
          <p>
            Effortlessly plan, book, and manage your events — all in one place.
            Discover real feedback, trusted organizers, and event inspirations.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose EventHub?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎉 Easy Booking</h3>
            <p>
              Reserve your event venue or service in just a few clicks. Simple,
              fast, and secure.
            </p>
          </div>
          <div className="feature-card">
            <h3>⭐ Real Feedback</h3>
            <p>
              See ratings and reviews from clients who booked similar events
              before you.
            </p>
          </div>
          <div className="feature-card">
            <h3>🤝 Trusted Organizers</h3>
            <p>
              We connect you only with verified companies and experienced event
              planners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
