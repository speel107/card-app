// ClassCard.jsx
import React from 'react';
import './ClassCard.css';

// class code*
// class title*
// description
// credit hours*
// when taught
// prerequisites

const ClassCard = ({ code, credits, name }) => {
  return (
    <div className="class-card">
      <h3>{code} - {credits}</h3>
      <p>{name}</p>
    </div>
  );
};

export default ClassCard;
