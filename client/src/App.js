import React from 'react';
// import axios from 'axios';
import "./index.css";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Events } from './components/Events';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { CreateEvent } from './components/Createevent';

import { Navbar } from './components/Navbar';

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

      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/events' component={Events} />
            <Route path='/createevent' component={CreateEvent} />
            <Route path='/login' component={Login} />
          </Switch>

      </Router>

      
    </div>
   
  );
}

export default App;
