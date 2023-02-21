import '../components/css/navbar.css'
import React from 'react';
import { Link } from "react-router-dom";

 const Navbar = () => {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events.page">Events</Link>
          </li>
          <li>
            <Link to="/login.page">Login</Link>
          </li>
          <li>
            <Link to="/signup.page">Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
 }
  
export default Navbar;