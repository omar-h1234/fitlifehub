import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Your Fitness Journey Starts Here</h1>
        <p>Welcome to FitLife Hub, your ultimate fitness companion. Find the best equipment, learn about various sports, and join our community of fitness enthusiasts.</p>
        <div className="buttons">
          <button className="explore">Explore Equipment</button>
          <button className="join">Join Community</button>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Wide Range of Equipment</h2>
          <p>Explore a variety of fitness equipment tailored to your needs.</p>
        </div>
        <div className="feature">
          <h2>Expert Reviews and Recommendations</h2>
          <p>Get insights and recommendations from fitness experts.</p>
        </div>
        <div className="feature">
          <h2>Available Now</h2>
          <p>All equipment is available for immediate purchase.</p>
        </div>
        <div className="feature">
          <h2>Delivered to Your Door</h2>
          <p>Enjoy fast and reliable delivery to your doorstep.</p>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 FitLife Hub. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
