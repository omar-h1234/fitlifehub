import React, { useState } from 'react';
import '../styles/SportsTypes.css';

const sportsData = [
  {
    name: 'Running',
    image: '/images/running.jpg',
    description: 'Improve your cardiovascular health and endurance.',
    goals: ['weight_loss', 'endurance'],
    types: ['outdoor', 'cardio']
  },
  {
    name: 'Weightlifting',
    image: '/images/weightlifting.jpg',
    description: 'Build muscle and increase strength.',
    goals: ['muscle_gain', 'strength'],
    types: ['indoor', 'strength']
  },
  {
    name: 'Yoga',
    image: '/images/yoga.jpg',
    description: 'Enhance flexibility and reduce stress.',
    goals: ['flexibility', 'relaxation'],
    types: ['indoor', 'mind_body']
  },
  // Add more sports types as needed
];

const SportsTypes = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [filteredSports, setFilteredSports] = useState(sportsData);

  const handleRecommendationClick = () => {
    const filtered = sportsData.filter(item => {
      return (
        (selectedGoal === '' || item.goals.includes(selectedGoal)) &&
        (selectedType === '' || item.types.includes(selectedType))
      );
    });
    setFilteredSports(filtered);
  };

  return (
    <div className="sports-types">
      <h1>Explore Sports Equipment</h1>
      <form className="sports-types-form">
        <input type="text" placeholder="Enter your name" />
        <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)}>
          <option value="">Select your fitness goal</option>
          <option value="weight_loss">Weight Loss</option>
          <option value="muscle_gain">Muscle Gain</option>
          <option value="flexibility">Flexibility</option>
          <option value="endurance">Endurance</option>
          <option value="relaxation">Relaxation</option>
          <option value="strength">Strength</option>
        </select>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">Select Type of Sport</option>
          <option value="outdoor">Outdoor</option>
          <option value="indoor">Indoor</option>
          <option value="cardio">Cardio</option>
          <option value="strength">Strength</option>
          <option value="mind_body">Mind & Body</option>
        </select>
        <button type="button" onClick={handleRecommendationClick}>Show Recommendations</button>
      </form>
      <div className="sports-list">
        {filteredSports.length > 0 ? (
          filteredSports.map((item) => (
            <div key={item.name} className="sports-item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="availability">{item.availability}</p>
            </div>
          ))
        ) : (
          <p>No sports equipment matches your criteria. Please try different options.</p>
        )}
      </div>
    </div>
  );
};

export default SportsTypes;
