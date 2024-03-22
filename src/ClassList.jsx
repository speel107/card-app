// ClassList.jsx
import React, { useState } from "react";
import classData from "./classes.json";
import ClassCard from "./ClassCard";
import "./ClassList.css";

const categories = ["100", "200", "300", "400"];
const subcategories = {
  100: ["Intro", "Math"],
  200: [
    "Required",
    "Software Engineering",
    "Animation",
    "Bioinformatics",
    "Math",
    "Stats",
  ],
  300: [
    "Required",
    "Software Engineering",
    "Animation",
    "Bioinformatics",
    "Math",
  ],
  400: [
    "Required",
    "Software Engineering",
    "Animation",
    "Bioinformatics",
    "Machine Learning",
  ],
};

const ClassList = () => {
  const [category, setCategory] = useState("100");
  const [subcategory, setSubcategory] = useState(null);

  const filteredClasses = subcategory
    ? classData.filter(
        (classCS) =>
          classCS.category === category && classCS.subcategory === subcategory
      )
    : classData.filter((classCS) => classCS.category === category);

  return (
    <div className="flex-1 w-screen bg-base-100 overflow-y-scroll">
      <div className="class-list">
        <div className="tabs justify-between space-x-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${
                category === cat ? "selected" : ""
              } btn btn-neutral text-primary mb-4 rounded-sm hover:btn-secondary`}
              onClick={() => {
                setCategory(cat);
                setSubcategory(null);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        {category && (
          <div className="tabs justify-between space-x-2">
            {subcategories[category].map((subcat) => (
              <button
                key={subcat}
                className={`${
                  subcategory === subcat ? "selected" : ""
                } btn btn-neutral text-primary rounded-sm hover:btn-secondary`}
                onClick={() => setSubcategory(subcat)}
              >
                {subcat}
              </button>
            ))}
          </div>
        )}
        <hr className="border-1 border-primary mt-4 mb-8" />
        <div className="class-card-container">
          {filteredClasses.map((classCS) => (
            <ClassCard key={classCS.code} course={classCS} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassList;
