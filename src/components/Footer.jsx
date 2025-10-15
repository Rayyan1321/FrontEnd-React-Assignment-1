import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.section}>
          <h2 style={styles.logo}>Event<span style={styles.logoAccent}>Hub</span></h2>
          <p style={styles.text}>
            Your one-stop solution for managing and booking all kinds of events.
            Experience the best, with trusted organizers and real feedback.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/events" style={styles.link}>Events</Link></li>
            <li><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
            <li><Link to="/login" style={styles.link}>Login</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>📍 Lahore, Pakistan</p>
          <p style={styles.text}>📞 +92 300 1234567</p>
          <p style={styles.text}>📧 support@eventhub.com</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()} EventHub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#1a1a1a",
    color: "#f0f0f0",
    paddingTop: "40px",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "0 20px 30px 20px",
  },
  section: {
    flex: "1 1 300px",
    margin: "10px",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  logoAccent: {
    color: "#f4b400", // golden accent
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#f4b400",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "5px 0",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#f0f0f0",
    textDecoration: "none",
    display: "block",
    margin: "6px 0",
    fontSize: "14px",
  },
  bottomBar: {
    background: "#111",
    textAlign: "center",
    padding: "10px 0",
    borderTop: "1px solid #333",
  },
  bottomText: {
    fontSize: "13px",
    color: "#ccc",
  },
};

export default Footer;
