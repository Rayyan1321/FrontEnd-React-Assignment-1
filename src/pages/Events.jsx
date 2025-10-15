import React, { useEffect, useState } from "react";
import LiveEvents from "./LiveEvents";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [recommendation, setRecommendation] = useState("");
  const [bookedEvents, setBookedEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userPreferences, setUserPreferences] = useState({
    type: "",
    budget: "",
    location: "",
  });

  // Mock data: previously booked events by famous companies
  const previousBookings = [
    {
      id: 1,
      name: "Global Tech Conference",
      bookedBy: "Microsoft Corporation",
      feedback:
        "Exceptional organization and seamless coordination. The audience engagement was remarkable!",
    },
    {
      id: 2,
      name: "Music Fest 2024",
      bookedBy: "Sony Entertainment",
      feedback:
        "Brilliant stage setup and light management. Highly professional event management service!",
    },
    {
      id: 3,
      name: "Luxury Wedding Gala",
      bookedBy: "Celebrity: Emma Watson",
      feedback:
        "An unforgettable evening. The decoration, coordination, and timing were absolutely flawless!",
    },
    {
      id: 4,
      name: "Startup Meetup 2025",
      bookedBy: "Tesla Inc.",
      feedback:
        "Great networking opportunity! Everything was on schedule and handled smoothly.",
    },
  ];

  // Fetch events from Ticketmaster API
  useEffect(() => {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&countryCode=US")
      .then((res) => res.json())
      .then((data) => setEvents(data._embedded?.events || []))
      .catch((err) => console.error(err));
  }, []);

  // AI-like recommendation logic
  useEffect(() => {
    if (userPreferences.type || userPreferences.budget || userPreferences.location) {
      setRecommendation(
        `Based on your interest in ${userPreferences.type || "various"} events and budget ${
          userPreferences.budget || "flexible"
        }, we recommend exploring premium venues in ${
          userPreferences.location || "your region"
        } for optimal audience engagement.`
      );
    } else {
      setRecommendation(
        "Based on recent analytics, corporate galas, conferences, and music festivals are highly trending this season."
      );
    }
  }, [userPreferences]);

  // Book new event
  const handleBookEvent = (event) => {
    if (bookedEvents.some((e) => e.id === event.id)) {
      alert("You already booked this event!");
      return;
    }
    setBookedEvents([...bookedEvents, event]);
  };

  // Delete booking
  const handleDeleteBooking = (id) => {
    setBookedEvents(bookedEvents.filter((e) => e.id !== id));
  };

  // Modify booking
  const handleModifyBooking = (id) => {
    const newName = prompt("Enter a new event title:");
    if (newName) {
      setBookedEvents(
        bookedEvents.map((e) =>
          e.id === id ? { ...e, name: newName } : e
        )
      );
    }
  };

  return (
    <div className="events-container">
      <header className="events-header">
        <h1>Discover & Manage Events</h1>
        <p>
          Explore trending events and learn from real experiences of top companies and personalities.
        </p>
        <button className="book-event-btn" onClick={() => setShowModal(true)}>
          + Book New Event
        </button>
      </header>

      {/* Smart Suggestion Section */}
      <section className="recommendation-box">
        <h3>🌟 Smart Event Suggestion</h3>
        <p>{recommendation}</p>
      </section>

      {/* Real-world Feedback Section */}
      <section className="previous-bookings">
        <h2>🏆 Previously Booked Events & Feedback</h2>
        <div className="feedback-list">
          {previousBookings.map((booking) => (
            <div className="feedback-card" key={booking.id}>
              <h3>{booking.name}</h3>
              <p>
                <strong>Booked by:</strong> {booking.bookedBy}
              </p>
              <p className="feedback-text">💬 “{booking.feedback}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event List */}
      <section className="event-list">
        {events.length === 0 ? (
          <p className="loading">Loading events...</p>
        ) : (
          events.map((event) => (
            <div className="event-card" key={event.id}>
              <img
                src={event.images?.[0]?.url}
                alt={event.name}
                className="event-image"
              />
              <div className="event-info">
                <h3>{event.name}</h3>
                <p>
                  📅 <strong>Date:</strong>{" "}
                  {event.dates?.start?.localDate || "TBA"}
                </p>
                <p>
                  📍 <strong>Venue:</strong>{" "}
                  {event._embedded?.venues?.[0]?.name || "Unknown"}
                </p>
                <button
                  className="book-btn"
                  onClick={() => handleBookEvent(event)}
                >
                  Book Event
                </button>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Booked Events Section */}
      {bookedEvents.length > 0 && (
        <section className="booked-events">
          <h2>🎟️ Your Booked Events</h2>
          <div className="booked-list">
            {bookedEvents.map((e) => (
              <div className="booked-card" key={e.id}>
                <h3>{e.name}</h3>
                <p>
                  <strong>Date:</strong> {e.dates?.start?.localDate || "TBA"}
                </p>
                <div className="actions">
                  <button onClick={() => handleModifyBooking(e.id)}>✏ Modify</button>
                  <button onClick={() => handleDeleteBooking(e.id)}>🗑 Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      <LiveEvents />


      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Book an Event</h2>
            <label>Event Type</label>
            <input
              type="text"
              placeholder="e.g. Corporate, Wedding, Music"
              value={userPreferences.type}
              onChange={(e) =>
                setUserPreferences({ ...userPreferences, type: e.target.value })
              }
            />
            <label>Budget</label>
            <input
              type="text"
              placeholder="e.g. $2000 - $5000"
              value={userPreferences.budget}
              onChange={(e) =>
                setUserPreferences({ ...userPreferences, budget: e.target.value })
              }
            />
            <label>Preferred Location</label>
            <input
              type="text"
              placeholder="e.g. New York, Los Angeles"
              value={userPreferences.location}
              onChange={(e) =>
                setUserPreferences({ ...userPreferences, location: e.target.value })
              }
            />
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
