const express = require("express");
const basicAuth = require("express-basic-auth");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");
require('dotenv').config();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();
const port = 4000;

app.options("*", cors(corsOptions));

const dataset = {
  labels: [
    {
      id: null,
      label: "All",
      image: "https://cdn-icons-png.flaticon.com/512/25/25429.png",
    },
    {
      id: "pork",
      label: "Pork",
      image: "https://cdn-icons-png.flaticon.com/512/1841/1841054.png",
    },
    {
      id: "seafood",
      label: "Seafood",
      image: "https://cdn-icons-png.flaticon.com/512/6469/6469214.png",
    },
    {
      id: "kids",
      label: "Kids",
      image: "https://cdn-icons-png.flaticon.com/512/4108/4108935.png",
    },
    {
      id: "chicken",
      label: "Chicken",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046802.png",
    },
    {
      id: "beef",
      label: "Beef",
      image: "https://cdn-icons-png.flaticon.com/512/3143/3143643.png",
    },
    {
      id: "vegetarian",
      label: "Vegetarian",
      image: "https://cdn-icons-png.flaticon.com/512/2515/2515263.png",
    },
    {
      id: "breakfast",
      label: "Breakfast",
      image: "https://cdn-icons-png.flaticon.com/512/887/887396.png",
    },
  ],
  meals: [
    {
      id: "meal1",
      title: "3 Course Chicken",
      starter: "Chicken Soup",
      desert: "Chocolate Cake",
      price: 9.99,
      labels: ["chicken", "breakfast"],
      img: "https://i.imgur.com/8Wob7Oz.png",
      drinks: [
        {
          id: "drink-1",
          title: "Wine",
          image: "https://cdn-icons-png.flaticon.com/512/2309/2309442.png",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          image: "https://cdn-icons-png.flaticon.com/512/2738/2738730.png",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          image: "https://cdn-icons-png.flaticon.com/512/5288/5288824.png",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal2",
      title: "3 Course Beef",
      starter: "Beef Salad",
      desert: "Cheesecake",
      price: 19.99,
      labels: ["beef"],
      img: "https://i.imgur.com/Ekqp3rb.png",
      drinks: [
        {
          id: "drink-1",
          title: "Wine",
          image: "https://cdn-icons-png.flaticon.com/512/2309/2309442.png",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          image: "https://cdn-icons-png.flaticon.com/512/2738/2738730.png",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          image: "https://cdn-icons-png.flaticon.com/512/5288/5288824.png",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal3",
      title: "3 Course Vegetarian",
      starter: "Vegetable Spring Rolls",
      desert: "Fruit Tart",
      price: 79.99,
      labels: ["vegetarian"],
      img: "https://i.imgur.com/mByiXRy.png",
      drinks: [
        {
          id: "drink-1",
          title: "Wine",
          image: "https://cdn-icons-png.flaticon.com/512/2309/2309442.png",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          image: "https://cdn-icons-png.flaticon.com/512/2738/2738730.png",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          image: "https://cdn-icons-png.flaticon.com/512/5288/5288824.png",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal4",
      title: "3 Course Seafood",
      starter: "Seafood Chowder",
      desert: "Lemon Tart",
      price: 49.99,
      labels: ["seafood"],
      img: "https://i.imgur.com/zeI2KlD.png",
      drinks: [
        {
          id: "drink-1",
          title: "Wine",
          image: "https://cdn-icons-png.flaticon.com/512/2309/2309442.png",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          image: "https://cdn-icons-png.flaticon.com/512/2738/2738730.png",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          image: "https://cdn-icons-png.flaticon.com/512/5288/5288824.png",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal5",
      title: "3 Course Pork",
      starter: "Pork Dumplings",
      desert: "Strawberry Cheesecake",
      price: 39.99,
      labels: ["pork"],
      img: "https://i.imgur.com/Kt2b8pw.png",
      drinks: [
        {
          id: "drink-1",
          title: "Wine",
          image: "https://cdn-icons-png.flaticon.com/512/2309/2309442.png",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          image: "https://cdn-icons-png.flaticon.com/512/2738/2738730.png",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          image: "https://cdn-icons-png.flaticon.com/512/5288/5288824.png",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal6",
      title: "3 Course Kids",
      starter: "Chicken Nuggets",
      desert: "Ice Cream",
      price: 29.99,
      labels: ["kids", "breakfast"],
      img: "https://i.imgur.com/O7GKXE8.png",
      drinks: [
        {
          id: "drink-1",
          title: "Wine",
          image: "https://cdn-icons-png.flaticon.com/512/2309/2309442.png",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          image: "https://cdn-icons-png.flaticon.com/512/2738/2738730.png",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          image: "https://cdn-icons-png.flaticon.com/512/5288/5288824.png",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal7",
      title: "3 Course Roasted Chicken",
      starter: "Garlic Bread",
      desert: "Apple Pie",
      price: 19.99,
      labels: ["chicken"],
      img: "https://i.imgur.com/SaRHzeh.png",
      drinks: [
        {
          id: "drink-1",
          title: "Wine",
          image: "https://cdn-icons-png.flaticon.com/512/2309/2309442.png",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          image: "https://cdn-icons-png.flaticon.com/512/2738/2738730.png",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          image: "https://cdn-icons-png.flaticon.com/512/5288/5288824.png",
          price: 6.99,
        },
      ],
    },
  ],
};


const users = { admin: "password" };

app.use(
  basicAuth({
    users: users,
    challenge: true,
  })
);

const paginate = (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  req.paginate = { page: parseInt(page), limit: parseInt(limit) };
  next();
};


app.get("/labels", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  res.json(dataset.labels);
});


app.get("/meals", paginate, (req, res) => {
  const { page, limit } = req.paginate;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedMeals = dataset.meals.slice(startIndex, endIndex);
   
  res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  res.json(paginatedMeals);
});


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
