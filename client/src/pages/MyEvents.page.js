import React from 'react';
import { Container } from '@mui/system';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import '../components/css/myEvents.css';

const MyEvents = () => {
  return (
    <Container style={{ paddingTop: '20px',display: "flex", flexDirection: "column", margin: "auto"}}>
      <div className="my-events-page">
        <h1>My Events</h1>
        <Link to="/events">
          <Button variant="contained" color="primary" className="back-to-events-btn">
            Back to Events
          </Button>
        </Link>
        <div className="my-event-list">
          
        </div>
      </div>
    </Container>
  );
};

export default MyEvents;
