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
    <div onClick={()=>document.getElementById(`${name}-modal`).showModal()} className="class-card hover:shadow-lg hover:scale-105">
      <h3>{code} - {credits}</h3>
      <p>{name}</p>
    <dialog id={`${name}-modal`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  </div>
  );
};

export default ClassCard;
