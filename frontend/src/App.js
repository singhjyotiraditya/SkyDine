import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MealList from "./components/MealList";
import TagList from "./components/TagList";
import PersonList from "./components/PersonList";
import SelectedMeals from "./components/SelectedMeals";
import Login from "./components/Login";
import LoadingBar from "./components/LoadingBar"; 

const App = () => {
  const [meals, setMeals] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [people] = useState([
    {
      id: "person1",
      name: "Alice",
      seat: "21B",
      img: "https://i.imgur.com/40lJYwE.jpeg",
    },
    {
      id: "person2",
      name: "Bob",
      seat: "20B",
      img: "https://i.imgur.com/S4J5hMt.jpeg",
    },
  ]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personMeals, setPersonMeals] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage, setMealsPerPage] = useState(3);
  const [loadingMeals, setLoadingMeals] = useState(true); 
  const [loadingTags, setLoadingTags] = useState(true); 

  console.log("API URL:", process.env.REACT_APP_API_URL);

  const fetchMeals = async (credentials) => {
    const { username, password } = credentials;
    setLoadingMeals(true); 
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/meals`, {
        auth: { username, password },
        params: { page: 1, limit: 10 },
      });
      setMeals(result.data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setLoadingMeals(false); 
    }
  };

  const fetchTags = async (credentials) => {
    const { username, password } = credentials;
    setLoadingTags(true); // Start loading tags
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/labels`, {
        auth: { username, password },
      });
      setTags(result.data);
    } catch (error) {
      console.error("Error fetching tags:", error);
    } finally {
      setLoadingTags(false); 
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchMeals(credentials);
      fetchTags(credentials);
    }
  }, [isAuthenticated, credentials, currentPage, mealsPerPage]);

  const handleLogin = (username, password) => {
    setCredentials({ username, password });
    setIsAuthenticated(true);
  };

  const handleSelectTag = (tagId) => {
    setSelectedTag(tagId);
  };

  const handleSelectPerson = (personId) => {
    setSelectedPerson(personId);
  };

  const handleSelectMeal = (mealId, selectedDrink) => {
    if (!selectedPerson) return;

    const meal = meals.find((m) => m.id === mealId);
    const drink = selectedDrink
      ? meal.drinks.find((d) => d.id === selectedDrink)
      : null;
    const updatedMeal = { ...meal, selectedDrink: drink };

    setPersonMeals((prevPersonMeals) => {
      const mealsForPerson = prevPersonMeals[selectedPerson] || [];
      const mealIndex = mealsForPerson.findIndex((m) => m.id === mealId);

      if (mealIndex !== -1) {
        mealsForPerson[mealIndex] = updatedMeal;
      } else {
        mealsForPerson.push(updatedMeal);
      }

      return { ...prevPersonMeals, [selectedPerson]: mealsForPerson };
    });
  };

  const handleDeselectMeal = (mealId) => {
    if (!selectedPerson) return;

    setPersonMeals((prevPersonMeals) => {
      const mealsForPerson = prevPersonMeals[selectedPerson] || [];
      const updatedMeals = mealsForPerson.filter((meal) => meal.id !== mealId);
      return { ...prevPersonMeals, [selectedPerson]: updatedMeals };
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredMeals = selectedTag
    ? meals.filter((meal) => meal.labels.includes(selectedTag))
    : meals;

  const selectedMeals = selectedPerson ? personMeals[selectedPerson] || [] : [];

  const totalPages = Math.ceil(filteredMeals.length / mealsPerPage);
  const lastPostIndex = currentPage * mealsPerPage;
  const firstPostIndex = lastPostIndex - mealsPerPage;
  const paginatedMeals = filteredMeals.slice(firstPostIndex, lastPostIndex);

  const totalPrice = Object.values(personMeals)
    .flat()
    .reduce((total, meal) => {
      const mealPrice = meal.price;
      const drinkPrice = meal.selectedDrink ? meal.selectedDrink.price : 0;
      return total + mealPrice + drinkPrice;
    }, 0)
    .toFixed(2);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      {(loadingMeals || loadingTags) && <LoadingBar />} 
      <TagList tags={tags} onSelectTag={handleSelectTag} />
      <div className="bottom">
        <div className="left">
          <MealList
            meals={paginatedMeals}
            selectedPerson={selectedPerson}
            onDeselectMeal={handleDeselectMeal}
            onSelectMeal={handleSelectMeal}
            pagination={{
              currentPage,
              totalPages,
              onPageChange: handlePageChange,
            }}
          />
        </div>
        <div className="right">
          <PersonList
            people={people}
            onSelectPerson={handleSelectPerson}
            selectedPerson={selectedPerson}
          />
          <SelectedMeals
            selectedMeals={selectedMeals}
            totalPrice={totalPrice}
            onDeselectMeal={handleDeselectMeal}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
