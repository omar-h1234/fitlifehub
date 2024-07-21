import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>FitLife Hub</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/accueil">Accueil (FR)</Link>
        <Link to="/equipment">Equipment</Link>
        <Link to="/sportstypes">Sports Types</Link>
        <Link to="/community">Community</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
