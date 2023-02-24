import React, { useState, useEffect } from 'react';
import '../components/css/eventsPage.css';

// https://cs3528.azurewebsites.net/getevents
// https://cs3528.azurewebsites.net/events/${id}
// http://localhost:3001/getevents

 const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/getevents')
      .then(res => res.json())
      .then(events => setEvents(events))
      .catch(err => console.error(err));
  }, []);

  const handleSignUp = id => {
    // const eventToUpdate = events.find(event => event._id === id);
    document.getElementById(`event-button-${id}`).disabled = true;

    fetch(`http://localhost:3001/events/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ signedUp: events.find(event => event._id === id)}),
    })
      .then(res => res.json())
      .then(updatedEvent => {
        setEvents(events.map(event => (event._id === id ? {...event, signedUp: event.signedUp + 1} : event)));
      })
      .catch(err => console.error(err));
  };
  
  

  return (
    <div className="events-page">
      <h1>Events</h1>
      <div className="event-list">
        {events.map(event => (
        <div key={event._id} className="event">
          <h2>Type: {event.sportType}</h2>
          <h2>City: {event.city}</h2>
          <p>Address: {event.address}</p>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Signed up: {event.signedUp}</p>
          <p>Limit: {event.maxParticipants}</p>
          <button id={`event-button-${event._id}`} className="event-button" onClick={() => handleSignUp(event._id)}>Sign Up</button>
        </div>
        ))}
      </div>
    </div>
  );
 };

export default Events;