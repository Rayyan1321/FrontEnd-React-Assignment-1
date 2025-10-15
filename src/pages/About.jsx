import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* ===== Hero Section ===== */}
      <section className="about-hero">
        <h1>About Our Event Management System</h1>
        <p>
          Transforming the way events are planned, managed, and experienced — powered by data, AI, and creativity.
        </p>
      </section>

      {/* ===== Introduction Section ===== */}
      <section className="about-intro">
        <h2>Our Journey & Vision</h2>
        <p>
          Founded with a passion for innovation and precision, our Event Management System has been crafted to make
          event organization seamless, smart, and insightful. Over the years, our team has collaborated with
          professionals, corporate firms, and communities to create memorable experiences that inspire connection and
          joy.  
        </p>
        <p>
          Moving forward, our vision is to integrate advanced analytics and AI-driven suggestions that help users plan
          events based on real-world data, audience preferences, and previous successes. We aim to empower event
          planners and individuals alike — making event management faster, smarter, and more personalized than ever
          before.
        </p>
      </section>

      {/* ===== Mission & Values ===== */}
      <section className="about-values">
        <h2>Our Mission</h2>
        <p>
          To redefine the event management landscape by merging technology and creativity — providing users with
          intelligent suggestions, data-backed insights, and effortless planning tools that bring ideas to life.
        </p>

        <div className="value-cards">
          <div className="value-card">
            <h3>🎯 Innovation</h3>
            <p>
              We constantly evolve to introduce smart tools and automated features that simplify event planning and
              enhance creativity.
            </p>
          </div>
          <div className="value-card">
            <h3>🤝 Collaboration</h3>
            <p>
              We believe in partnerships — working closely with clients, organizers, and tech innovators to create
              seamless event experiences.
            </p>
          </div>
          <div className="value-card">
            <h3>🌍 Future Growth</h3>
            <p>
              Our future lies in global expansion — connecting event managers and users worldwide through AI-driven
              recommendations and real-time data insights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
