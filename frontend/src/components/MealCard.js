import React, { useState } from "react";
import MealDrinks from "./MealDrinks.js";
import "./styles/MealCard.css";

const MealCard = ({ meal, onSelectDrink, selectedPerson, onSelectMeal }) => {
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleSelectDrink = (mealId, drinkId) => {
    setSelectedDrink((prevDrinkId) =>
      prevDrinkId === drinkId ? null : drinkId
    );
    onSelectDrink(mealId, drinkId);
  };

  const handleSelectMeal = () => {
    onSelectMeal(meal.id, selectedDrink);
    setSelectedDrink(null);
  };

  return (
    <div className="meal-card">
      <div className="meal-header">
        <div className="meal-img-container">
          <img src={meal.img} alt={meal.title} className="meal-img" />
        </div>
        <div className="meal-info">
          <h3>{meal.title}</h3>
          <p>
            <b>Starter:</b> {meal.starter}
          </p>
          <p>
            <b>Desert:</b> {meal.desert}
          </p>
          <div className="meal-price">
            <span className="dollar-sign">$</span>
            {meal.price}
          </div>
        </div>
      </div>
      <div className="meal-details">
        <MealDrinks
          meal={meal}
          onSelectDrink={handleSelectDrink}
          selectedPerson={selectedPerson}
          selectedDrink={selectedDrink}
        />
        {selectedPerson && (
          <div className="select-btn-container">
            <button className="select-btn" onClick={handleSelectMeal}>
              Select
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCard;
