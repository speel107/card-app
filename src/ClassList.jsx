// ClassList.jsx
import React, { useState } from 'react';
import classData from './classes.json';
import ClassCard from './ClassCard';
import './ClassList.css';

const categories = ['100', '200', '300', '400'];
const subcategories = {
  '100': ['Intro', 'Math'],
  '200': ['Required', 'Software Engineering', 'Math'],
  '300': ['Required', 'Software Engineering', 'Animation and Games'],
  '400': ['Required', 'Software Engineering', 'Machine Learning', 'Animation and Games']
};

const ClassList = () => {
  const [category, setCategory] = useState('100');
  const [subcategory, setSubcategory] = useState(null);

  const filteredClasses = subcategory ? 
    classData.filter(classCS => classCS.category === category && classCS.subcategory === subcategory) : 
    classData.filter(classCS => classCS.category === category);

  return (
    <html data-theme="pastel">
      <div className="h-screen w-screen bg-base-100">
        <div className="class-list">
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
          <div className="class-card-container">
            {filteredClasses.map(classCS => (
              <ClassCard key={classCS.code} code={classCS.code} credits={classCS.credits} name={classCS.name} />
            ))}
          </div>
        </div>
      </div>
    </html>
  );
};

export default ClassList;
