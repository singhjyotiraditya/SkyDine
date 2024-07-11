import React, { useState } from "react";
import "./styles/PersonCard.css";

const PersonCard = ({ person, selectedPerson, onSelectPerson }) => {
  const isSelected = selectedPerson === person.id;

  return (
    <div className={`person-card ${isSelected ? "active" : ""}`}>
      <div className="person-image">
        <img src={person.img} alt={person.name} />
      </div>
      <div className="seat-info">
        <h3>{person.name}</h3>
        <p>{person.seat}</p>
      </div>
      <div className="select-meal">
        <button
          className={isSelected ? "active" : ""}
          onClick={() => onSelectPerson(isSelected ? null : person.id)}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
