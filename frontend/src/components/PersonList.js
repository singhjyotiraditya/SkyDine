import React from "react";
import PersonCard from "./PersonCard.js";
import "./styles/PersonList.css";

const PersonList = ({ people, onSelectPerson, selectedPerson }) => {
  return (
    <div>
      <h2>Select Meals</h2>
      <div className="ticket">
        <div className="ticket-info">
          <div className="source">
            <div className="airport">JFK</div>
            <div className="time">10.45</div>
            <div className="date">15/10/2024</div>
          </div>
          <div className="plane-icon">----- ✈ -----</div>
          <div className="destination">
            <div className="airport">CDG</div>
            <div className="time">04.25</div>
            <div className="date">16/10/2024</div>
          </div>
        </div>
        <div className="people-info">
          {people.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              onSelectPerson={onSelectPerson}
              selectedPerson={selectedPerson}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonList;
