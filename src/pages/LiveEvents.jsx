import React, { useEffect, useState } from "react";

function LiveEvents() {
  const [events, setEvents] = useState([]); // stores event data
  const [loading, setLoading] = useState(true); // shows loading
  const [error, setError] = useState(null); // stores errors if any

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://api.predicthq.com/v1/events/?country=PK&limit=5&category=concerts,conferences,sports",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_PREDICTHQ_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data.results); // save data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>🎤 Live Upcoming Events</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "250px",
              background: "#fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{event.title}</h3>
            <p><strong>Type:</strong> {event.category}</p>
            <p><strong>Date:</strong> {new Date(event.start).toLocaleString()}</p>
            <p><strong>Location:</strong> {event.entities?.[0]?.name || "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveEvents;
