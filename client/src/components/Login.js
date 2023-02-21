import React from 'react';

export const Login = () => {

  return (
    <div className="Heading">
      <h1>Login</h1>      
      <div class="masonry-grid">
        <input type="text" placeholder="Enter Username" name="Username" required></input>
        <div class="masonry-grid__item">...</div>
      
        <input type="text" placeholder="Enter Password" name="Password" required></input>
        <div class="masonry-grid__item">...</div>
      
        <input type="checkbox" id="accept" name="Remember" value="yes" />
      
        <label for="Remember"> Remember Me </label>
      </div>

      
    </div>
  );
}



