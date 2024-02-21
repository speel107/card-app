// FoodMenu.js
import React, { useState } from 'react';
import foodData from './food.json';
import FoodCard from './FoodCard';
import './FoodMenu.css';

const categories = ['100', '200', '300', '400'];
const subcategories = {
  '100': ['Intro', 'Math'],
  '200': ['Required', 'Software Engineering', 'Math'],
  '300': ['Required', 'Software Engineering', 'Animation and Games'],
  '400': ['Required', 'Machine Learning', 'Animation and Games'],
};

const FoodMenu = () => {
  const [category, setCategory] = useState('100');
  const [subcategory, setSubcategory] = useState(null);

  const filteredFoods = subcategory ? foodData.filter(food => food.category === category && food.subcategory === subcategory) : foodData.filter(food => food.category === category);

  return (
    <html data-theme="pastel">
      <div className="h-screen w-screen bg-base-100">
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
      </div>
    </html>
  );
};

export default FoodMenu;
