// FoodCard.js
import React from 'react';
import './FoodCard.css';

const FoodCard = ({ name, description }) => {
  return (
    <div className="food-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FoodCard;
