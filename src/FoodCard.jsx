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
    <div onClick={()=>document.getElementById(`${name}-modal`).showModal()} className="food-card hover:shadow-lg hover:scale-105">
      <h3>{name}</h3>
      <p>{description}</p>
      <dialog id={`${name}-modal`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
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

export default FoodCard;
