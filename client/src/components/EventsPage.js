import React, { useState, useEffect } from 'react';
import './eventsPage.css';

export const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://cs3528.azurewebsites.net/getevents')
      .then(res => res.json())
      .then(events => setEvents(events))
      .catch(err => console.error(err));
  }, []);

  const handleSignUp = id => {
    // const eventToUpdate = events.find(event => event._id === id);
  
    fetch(`https://cs3528.azurewebsites.net/events/${id}`, {
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
      <ul>
        {events.map(event => (
          <li key={event._id} className="event">
            <h2>Type: {event.type}</h2>
            <h2>Location: {event.location}</h2>
            <p>Limit: {event.max}</p>
            <p>Signed up: {event.signedUp}</p>
            <p>Date: {event.date}</p>

            <button id="event-button" className="event-button" onClick={() => handleSignUp(event._id)}>Sign Up</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
