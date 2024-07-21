import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About FitLife Hub</h1>
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>Our Mission</h2>
          <p>
            At FitLife Hub, our mission is to empower individuals to lead healthier lives by providing the best fitness equipment, resources, and community support. We believe that everyone should have access to high-quality fitness tools and information, regardless of their fitness level or background.
          </p>
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone is inspired to achieve their fitness goals and maintain a healthy lifestyle. Our platform is designed to offer a comprehensive range of fitness solutions, from top-notch equipment to expert advice and a supportive community.
          </p>
        </div>
        <div className="about-us-images">
          <img src="/images/mission.jpg" alt="Our Mission" />
          <img src="/images/vision.jpg" alt="Our Vision" />
        </div>
      </div>
      <div className="about-us-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="/images/team1.jpg" alt="Team Member 1" />
          <h3>Jane Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="/images/team2.jpg" alt="Team Member 2" />
          <h3>John Smith</h3>
          <p>Head of Fitness</p>
        </div>
        <div className="team-member">
          <img src="/images/team3.jpg" alt="Team Member 3" />
          <h3>Emily Johnson</h3>
          <p>Community Manager</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
