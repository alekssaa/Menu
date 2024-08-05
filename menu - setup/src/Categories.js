import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            className="filter-btn"
            onClick={() => {
              filterItems(item);
            }}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
