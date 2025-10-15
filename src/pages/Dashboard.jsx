import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newBooking, setNewBooking] = useState({ name: "", date: "", feedback: "" });

  const [showSuggestions, setShowSuggestions] = useState(false);
const [requirements, setRequirements] = useState({
  type: "",
  guests: "",
  budget: "",
});
const [suggestions, setSuggestions] = useState([]);


  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      alert("You must log in first!");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    // Mock data for demonstration
    setBookings([
      {
        id: 1,
        name: "Corporate Meetup",
        date: "2025-10-20",
        feedback: "Excellent organization and communication!",
      },
      {
        id: 2,
        name: "Wedding Gala",
        date: "2025-11-10",
        feedback: "Beautifully arranged with great decor!",
      },
      {
        id: 3,
        name: "Music Festival",
        date: "2025-12-05",
        feedback: "Amazing performances and fun crowd!",
      },
    ]);
  }, []);

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("You have been logged out successfully!");
    navigate("/login");
  };

  // Add new booking
  const handleAddBooking = (e) => {
    e.preventDefault();
    if (!newBooking.name || !newBooking.date) {
      alert("Please fill in all fields.");
      return;
    }
    const newEntry = { ...newBooking, id: Date.now() };
    setBookings([...bookings, newEntry]);
    setNewBooking({ name: "", date: "", feedback: "" });
    setShowForm(false);
  };

  // Calculate statistics
  const totalEvents = bookings.length;
  const upcomingEvents = bookings.filter(
    (b) => new Date(b.date) > new Date()
  ).length;
  const feedbackCount = bookings.filter((b) => b.feedback).length;

  return (
    <div className="dashboard-container">
      {/* Profile + Logout Section */}
      <header className="dashboard-header">
        <div className="profile-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="User Avatar"
            className="avatar"
          />
          <div>
            <h1>
              Welcome back, <span className="username">Rayyan</span> 👋
            </h1>
            <p>Manage your events, view bookings, and plan new ones easily.</p>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Dashboard Stats Section */}
            <section className="stats-section">
        <div className="stat-card analyzed">
          <div className="icon">🎫</div>
          <div>
            <h3>{totalEvents}</h3>
            <p>Analyzed Events</p>
          </div>
        </div>
      
        <div className="stat-card suggestions">
          <div className="icon">🤖</div>
          <div>
            <h3>{Math.floor(totalEvents * 1.5)}</h3>
            <p>AI Suggestions Made</p>
          </div>
        </div>
      
        <div className="stat-card feedback">
          <div className="icon">💬</div>
          <div>
            <h3>{feedbackCount}</h3>
            <p>User Feedback Collected</p>
          </div>
        </div>
      </section>


      {/* Chart Section */}
      <section className="chart-section">
        <h2>Events Overview (2025)</h2>
        <div className="chart-placeholder">
          <div className="bar" style={{ height: "80px" }} title="Jan"></div>
          <div className="bar" style={{ height: "130px" }} title="Feb"></div>
          <div className="bar" style={{ height: "100px" }} title="Mar"></div>
          <div className="bar" style={{ height: "150px" }} title="Apr"></div>
          <div className="bar" style={{ height: "200px" }} title="May"></div>
        </div>
      </section>


      {/* Past Bookings Section */}
      <section className="dashboard-section">
        <div className="section-header">
          <h2>Past Bookings</h2>
          <button className="add-btn" onClick={() => setShowForm(true)}>
            + New Booking
          </button>
          <button className="suggest-btn" onClick={() => setShowSuggestions(true)}>
         🤖 Get Smart Suggestions
         </button>
          
        </div>

        <div className="bookings-grid">
          {bookings.map((b) => (
            <div key={b.id} className="booking-card">
              <h3>{b.name}</h3>
              <p>
                <strong>Date:</strong> {b.date}
              </p>
              <p className="feedback">💬 {b.feedback || "No feedback yet."}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Form */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h3>Add New Booking</h3>
            <form onSubmit={handleAddBooking}>
              <input
                type="text"
                placeholder="Event Name"
                value={newBooking.name}
                onChange={(e) => setNewBooking({ ...newBooking, name: e.target.value })}
              />
              <input
                type="date"
                value={newBooking.date}
                onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
              />
              <textarea
                placeholder="Feedback (optional)"
                value={newBooking.feedback}
                onChange={(e) =>
                  setNewBooking({ ...newBooking, feedback: e.target.value })
                }
              ></textarea>
              <div className="popup-buttons">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Smart Suggestion Panel */}
{showSuggestions && (
  <div className="suggestion-overlay">
    <div className="suggestion-panel">
      <h2>🤖 Smart Event Suggestions</h2>
      <p>Enter your event details and let our system suggest the best options.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const generatedSuggestions = [
            {
              title: "Corporate Meetup",
              reason:
                "Popular among professionals — highly rated for team collaboration.",
            },
            {
              title: "Wedding Gala",
              reason:
                "Perfect for medium to high budgets and guest lists above 100.",
            },
            {
              title: "Music Concert",
              reason:
                "Ideal for large outdoor gatherings with high entertainment value.",
            },
          ];
          setSuggestions(generatedSuggestions);
        }}
        className="suggestion-form"
      >
        <label>Event Type</label>
        <input
          type="text"
          placeholder="e.g., Wedding, Conference, Festival"
          value={requirements.type}
          onChange={(e) =>
            setRequirements({ ...requirements, type: e.target.value })
          }
        />

        <label>Expected Guests</label>
        <input
          type="number"
          placeholder="e.g., 100"
          value={requirements.guests}
          onChange={(e) =>
            setRequirements({ ...requirements, guests: e.target.value })
          }
        />

        <label>Budget Range ($)</label>
        <input
          type="text"
          placeholder="e.g., 5000 - 10000"
          value={requirements.budget}
          onChange={(e) =>
            setRequirements({ ...requirements, budget: e.target.value })
          }
        />

        <button type="submit" className="generate-btn">
          Generate Suggestions
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className="suggestions-list">
          <h3>Recommended Events:</h3>
          {suggestions.map((s, i) => (
            <div key={i} className="suggestion-card">
              <h4>{s.title}</h4>
              <p>{s.reason}</p>
            </div>
          ))}
        </div>
      )}

      <button
        className="close-panel-btn"
        onClick={() => setShowSuggestions(false)}
      >
        ✖ Close
      </button>
    </div>
  </div>
)}

    </div>
    
  );
}

export default Dashboard;
