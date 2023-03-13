import '../components/css/navbar.css'
import React from 'react';


 const Navbar = () => {
  return (
      <nav>
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/createevent">Create</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
      </nav>
    );
 }
  
export default Navbar;