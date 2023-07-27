import React from "react";

const ButtonCategory = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div className="button-category">
      <button
        className={selectedCategory === "all" ? "active" : "inactive"}
        onClick={() => handleCategoryChange("all")}
      >
        All
      </button>
      {/* Add more buttons for other categories */}
      <button
        className={selectedCategory === "16" ? "active" : "inactive"}
        onClick={() => handleCategoryChange("16")}
      >
        Animation
      </button>
      <button
        className={selectedCategory === "18" ? "active" : "inactive"}
        onClick={() => handleCategoryChange("18")}
      >
        Drama
      </button>
      {/* Add more buttons for other categories */}
    </div>
  );
};

export default ButtonCategory;