import React, { useState } from 'react';
import '../styles/Equipment.css';

const equipmentData = [
  {
    name: 'Treadmill',
    image: '/images/treadmill.jpg',
    description: 'High-quality treadmill for indoor running.',
    availability: 'In Stock',
    goals: ['weight_loss'],
    sports: ['running'],
    types: ['cardio']
  },
  {
    name: 'Dumbbells',
    image: '/images/dumbbells.jpg',
    description: 'Set of adjustable dumbbells for weight training.',
    availability: 'In Stock',
    goals: ['muscle_gain'],
    sports: ['weightlifting'],
    types: ['strength']
  },
  {
    name: 'Yoga Mat',
    image: '/images/yoga-mat.jpg',
    description: 'Comfortable yoga mat with non-slip surface.',
    availability: 'Out of Stock',
    goals: ['flexibility'],
    sports: ['yoga'],
    types: ['accessories']
  },
  // Add more equipment as needed
];

const Equipment = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [filteredEquipment, setFilteredEquipment] = useState(equipmentData);

  const handleRecommendationClick = () => {
    const filtered = equipmentData.filter(item => {
      return (
        (selectedGoal === '' || item.goals.includes(selectedGoal)) &&
        (selectedSport === '' || item.sports.includes(selectedSport)) &&
        (selectedType === '' || item.types.includes(selectedType))
      );
    });
    setFilteredEquipment(filtered);
  };

  return (
    <div className="equipment">
      <h1>Find Your Perfect Equipment</h1>
      <form className="equipment-form">
        <input type="text" placeholder="Enter your name" />
        <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)}>
          <option value="">Select your fitness goal</option>
          <option value="weight_loss">Weight Loss</option>
          <option value="muscle_gain">Muscle Gain</option>
          <option value="flexibility">Flexibility</option>
        </select>
        <select value={selectedSport} onChange={(e) => setSelectedSport(e.target.value)}>
          <option value="">Choose Your Sport</option>
          <option value="running">Running</option>
          <option value="weightlifting">Weightlifting</option>
          <option value="yoga">Yoga</option>
        </select>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">Select Type of Equipment</option>
          <option value="cardio">Cardio</option>
          <option value="strength">Strength</option>
          <option value="accessories">Accessories</option>
        </select>
        <button type="button" onClick={handleRecommendationClick}>Show Recommendations</button>
      </form>
      <div className="equipment-list">
        {filteredEquipment.length > 0 ? (
          filteredEquipment.map((item) => (
            <div key={item.name} className="equipment-item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="availability">{item.availability}</p>
            </div>
          ))
        ) : (
          <p>No equipment matches your criteria. Please try different options.</p>
        )}
      </div>
    </div>
  );
};

export default Equipment;
