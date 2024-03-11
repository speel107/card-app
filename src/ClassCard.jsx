// ClassCard.jsx
import React from "react";

// class code*
// class title*
// description
// credit hours*
// when taught
// prerequisites

const ClassCard = ({ course }) => {
  return (
    <div
      onClick={() =>
        document.getElementById(`${course.name}-modal`).showModal()
      }
      className="card bg-neutral rounded-sm border-primary border-2 hover:shadow-lg hover:scale-105"
    >
      <div className="card-body">
        <h3 className="font-bold text-primary">
          {course.code} - {course.credits}.0 credits
        </h3>
        <p>{course.name}</p>
        <dialog id={`${course.name}-modal`} className="modal">
          <div className="modal-box bg-neutral rounded-md">
            <h3 className="font-bold text-lg text-primary">
              {course.code} - {course.credits}.0 credits
            </h3>
            <p className="font-bold text-lg">{course.name}</p>
            <p className="py-4">
              <b>Course description:</b> {course.description}
            </p>
            <p className="py-4">
              <b>When taught:</b> {course.whenTaught}
            </p>
            <p className="py-4">
              <b>Prerequisites:</b> {course.prereqs}
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-neutral-content hover:btn-secondary rounded-sm border-2 border-secondary">Close</button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button></button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default ClassCard;
