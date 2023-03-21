import '../components/css/navbar.css'
import React from 'react';
import { Link } from "react-router-dom";

 const Navbar = () => {
  return (
      <nav>

            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/createevent">Create</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>

      </nav>
    );
 }
  
export default Navbar;