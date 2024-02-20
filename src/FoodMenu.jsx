// FoodMenu.js
import React, { useState } from 'react';
import foodData from './food.json';
import FoodCard from './FoodCard';
import './FoodMenu.css';

const categories = ['Italian', 'Japanese', 'Mexican'];
const subcategories = {
  'Italian': ['Pizza', 'Pasta', 'Dessert'],
  'Japanese': ['Sushi Rolls', 'Fried Dishes', 'Noodles', 'Dessert'],
  'Mexican': ['Tacos', 'Burritos', 'Dips & Salsas', 'Dessert']
};

const FoodMenu = () => {
  const [category, setCategory] = useState('Italian');
  const [subcategory, setSubcategory] = useState(null);

  const filteredFoods = subcategory ? foodData.filter(food => food.category === category && food.subcategory === subcategory) : foodData.filter(food => food.category === category);

  return (
    <div className="food-menu">
      <div className="tabs">
        {categories.map(cat => (
          <button key={cat} className={category === cat ? 'selected' : ''} onClick={() => { setCategory(cat); setSubcategory(null); }}>{cat}</button>
        ))}
      </div>
      {category &&
        <div className="subtabs">
          {subcategories[category].map(subcat => (
            <button key={subcat} className={subcategory === subcat ? 'selected' : ''} onClick={() => setSubcategory(subcat)}>{subcat}</button>
          ))}
        </div>
      }
      <div className="food-card-container">
        {filteredFoods.map(food => (
          <FoodCard key={food.name} name={food.name} description={food.description} />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
