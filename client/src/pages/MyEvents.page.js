import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Container } from '@mui/system';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import '../components/css/myEvents.css';
import { UserContext } from '../contexts/user.context';

// `https://cs3528.azurewebsites.net/events/user/${userId}`
// `http://localhost:3001/events/user/${userId}`


const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const { user } = useContext(UserContext)
  // const userId = user.id;
  const userId = "63f3500cb72c98bd43764ac4"

  const handleCancelEvent = (id) => {
    fetch(`https://cs3528.azurewebsites.net/events/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      setMyEvents(myEvents.filter(event => event._id !== id));
    })
    .catch(err => console.error(err));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myevents/user/${userId}`)
    .then(res => res.json())
    .then(events => setMyEvents(events))
    .catch(err => console.error(err));
  }, [userId]);

  return (
    <Container style={{ paddingTop: '20px',display: "flex", flexDirection: "column", margin: "auto"}}>
      <div className="my-events-page">
        <h1>My Events</h1>
        <Link to="/events">
          <Button variant="contained" color="primary" className="back-to-events-btn">
            Back to Events
          </Button>
        </Link>
        <h2>Events Created</h2>
        <div className="my-event-list">
          {myEvents.map(event => (
            <div key={event._id} className="event">
              <h4>Type: {event.sportType}</h4>
              <h4>City: {event.city}</h4>
              <p>Address: {event.address}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Signed up: {event.signedUp}</p>
              <p>Max Participants: {event.maxParticipants}</p>
              <div className='event-actions'>
                <Button variant="contained" color="primary" onClick={() => handleCancelEvent(event._id)}>Cancel Event</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MyEvents;
