// ClassList.jsx
import React, { useState } from "react";
import classData from "./classes.json";
import ClassCard from "./ClassCard";
import "./ClassList.css";

const categories = ["100", "200", "300", "400", "All"];
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
  All: [],
};

const ClassList = () => {
  const [category, setCategory] = useState("All");
  const [subcategory, setSubcategory] = useState(null);
  const [subCategoriesLen, setSubCategoriesLen] = useState("w-1/" + (subcategories["100"].length).toString());

  console.log(subCategoriesLen);

  var filteredClasses = subcategory
    ? classData.filter(
        (classCS) =>
          classCS.category === category && classCS.subcategory === subcategory
      )
    : classData.filter((classCS) => classCS.category === category);
  
  if (category === "All") {
    filteredClasses = classData;
    // setSubcategory(null);
  }

  return (
    <div className="flex flex-col my-4 mx-auto w-3/4 pt-2 mt-0 px-2 mb-auto overflow-y-scroll">
      {/* <div className="flex-1 w-screen bg-base-100 fixed"> */}
        <div className="w-full mt-4 mx-auto px-2 top-0 z-50 bg-base-100">
          <div className="divider divider-neutral mt-0 font-bold text-primary">Course Level</div>
          <div className="tabs flex justify-between -mr-2">
            {categories.map((cat) => (
              <div className="w-1/5 mr-2">
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setSubcategory(null);
                    setSubCategoriesLen("w-1/" + (subcategories[cat].length).toString());
                  }}
                  className={`${
                    category === cat ? "selected" : ""
                  } w-full flex btn btn-neutral text-primary mb-4 rounded-md hover:btn-secondary`}
                >
                  {cat}
                </button>
              </div>
            ))}
          </div>
          <div className={`divider divider-neutral mt-2 font-bold text-primary`}>{category === "All" ? "All CS Courses" : "Subcategory"}</div>
          {category && (
            category !== "All" &&
            <div className="tabs flex justify-between -mr-2">
              {subcategories[category].map((subcat) => (
                <div className={`${subCategoriesLen} mr-2`}>
                  <button
                    key={subcat}
                    onClick={() => {
                      setSubcategory(subcat);
                      setSubCategoriesLen("w-1/" + (subcategories[category].length).toString());
                    }}
                    className={`${
                      subcategory === subcat ? "selected" : ""
                    } w-full btn btn-neutral text-primary rounded-md hover:btn-secondary`}
                  >
                    {subcat}
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className={`divider divider-neutral mt-2 mb-0 ${category === "All" ? "hidden" : ""}`}></div>
        </div>
      <div className="flex my-0 mx-auto w-full p-2 overflow-y-scroll">
        <div className="grid grid-flow-row text-neutral-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between gap-4">
          {filteredClasses.map((classCS) => (
            <ClassCard key={classCS.code} course={classCS} />
          ))}
        </div>
      </div>
      <div className="h-4"></div>
    </div>
  );
};


export default ClassList;
