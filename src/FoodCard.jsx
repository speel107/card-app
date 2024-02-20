// FoodCard.js
import React from 'react';
import './FoodCard.css';

// class code
// class title
// description
// credit hours
// when taught
// prerequisites

const FoodCard = ({ name, description }) => {
  return (
    <div className="food-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FoodCard;
