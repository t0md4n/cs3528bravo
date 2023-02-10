import React from 'react';
import axios from 'axios';
import "./index.css";
import './App.css';
import { EventsPage } from './components/EventsPage';

function App() {
  return (
    <div className="App">
      {/* <h1>Sign Up</h1>
      <p>Please fill in the below information</p>
      
      <div class="masonry-grid">
      <input type="text" placeholder="Enter Username" name="Username" required></input>
      <div class="masonry-grid__item">...</div>
      
      <input type="text" placeholder="Enter Password" name="Password" required></input>
      <div class="masonry-grid__item">...</div>
      
      <input type="text" placeholder="Repeat Password" name="Password" required></input>
      <div class="masonry-grid__item">...</div>
      
      <input type="checkbox" id="accept" name="Remember" value="yes" />  
      
      <label for="Remember"> Remember Me </label>
      </div> */}

      <EventsPage />
      
    </div>
   
  );
}

export default App;
