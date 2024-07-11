import React from "react";
import MealCard from "./MealCard.js";
import "./styles/MealList.css";

const MealList = ({
  meals,
  onSelectDrink,
  selectedPerson,
  onDeselectMeal,
  pagination,
  onSelectMeal,
}) => {
  const { currentPage, totalPages, onPageChange } = pagination;

  const handlePageClick = (pageNumber) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    onPageChange(pageNumber);
  };

  return (
    <div>
      <div className="meal-list">
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            onSelectDrink={onSelectDrink}
            selectedPerson={selectedPerson}
            onDeselectMeal={onDeselectMeal}
            onSelectMeal={onSelectMeal}
          />
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MealList;
