import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import '../components/css/navbar.css'



function NavigationBar() {
      return (
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Spòrs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Events" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/createevent">Create Event</NavDropdown.Item>
                  <NavDropdown.Item href="/events">Current Events</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/my-events">My Events</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
            </Navbar>

      );
    }
    
    export default NavigationBar;