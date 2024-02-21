// ClassCard.jsx
import React from 'react';
import './ClassCard.css';

// class code*
// class title*
// description
// credit hours*
// when taught
// prerequisites

const ClassCard = ({ course }) => {
  return (
    <div onClick={()=>document.getElementById(`${course.name}-modal`).showModal()} className="class-card hover:shadow-lg hover:scale-105">
      <h3>{course.code} - {course.credits}</h3>
      <p>{course.name}</p>
    <dialog id={`${course.name}-modal`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{course.name}</h3>
        <p className="py-4">{course.description}</p>
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
