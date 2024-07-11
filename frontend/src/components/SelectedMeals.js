import React from "react";
import "./styles/SelectedMeals.css";

const SelectedMeals = ({ selectedMeals, totalPrice, onDeselectMeal }) => {
  return (
    <div>
      <h2>Selected Meals</h2>
      <ul className="selected-meals-list">
        {selectedMeals.map((meal) => (
          <li key={meal.id} className="selected-meal-card">
            <div className="meal-img-div">
              <img
                src={meal.img}
                alt={meal.title}
                className="selected-meal-img"
              />
            </div>
            <div className="meal-details">
              <h3>{meal.title}</h3>
              <p>${meal.price}</p>
              {meal.selectedDrink && (
                <p>
                  Drink: {meal.selectedDrink.title} (${meal.selectedDrink.price}
                  )
                </p>
              )}
            </div>
            <button
              className="deselect-btn"
              onClick={() => onDeselectMeal(meal.id)}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
      <h3>Total for all passengers: ${totalPrice}</h3>
    </div>
  );
};

export default SelectedMeals;
