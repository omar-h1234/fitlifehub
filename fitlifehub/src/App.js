import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Equipment from './components/Equipment';
import SportsTypes from './components/SportsTypes';
import Community from './components/Community';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeFrench from './components/HomeFrench';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/sportstypes" element={<SportsTypes />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accueil" element={<HomeFrench />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
