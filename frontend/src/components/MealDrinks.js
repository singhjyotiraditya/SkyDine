import React from "react";
import "./styles/MealDrinks.css";

const MealDrinks = ({ meal, onSelectDrink, selectedPerson, selectedDrink }) => {
  return (
    <div className="meal-drinks">
      <h4>Drinks</h4>
      <div className="drinks-list">
        {meal.drinks.map((drink) => (
          <div
            key={drink.id}
            className={`drink-card ${
              selectedDrink === drink.id ? "active" : ""
            }`}
            onClick={() => onSelectDrink(meal.id, drink.id)}
            style={{ cursor: selectedPerson ? "pointer" : "not-allowed" }}
          >
            <img src={drink.image} alt={drink.title} className="drink-img" />
            <div className="drink-details">
              <p>{drink.title}</p>
              <div className="drink-price">
                <span className="dollar-sign">$</span>
                {drink.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealDrinks;
