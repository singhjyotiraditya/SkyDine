# Skydine

Skydine is a React application for ordering food and drinks on a plane. The app allows users to view a list of meals, filter meals by tags, select meals for different people, and see the total price of selected meals and drinks.

## Features

- Display a list of available meals with images and basic information
- Optional drink selection for each meal
- Filter meals based on selected tags
- Associate meal selection with specific people
- Deselect a meal
- Display the total price of all selected meals and drinks
- Authentication
- Pagination
- Responsive interface

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) 

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/singhjyotiraditya/SkyDine.git
    cd skydine
    ```

2. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the `frontend` directory and add the following variables:
    ```env
    REACT_APP_API_URL=http://localhost:4000
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

The application should now be running on `http://localhost:3000` (frontend) and `http://localhost:4000` (backend).

## API Specification

The API is documented using Swagger. After starting the backend server, you can access the Swagger documentation at `http://localhost:4000/api`.

### Endpoints

- **Meals**
  - `GET /meals`: Get a paginated list of meals

- **Tags**
  - `GET /labels`: Get a list of tags


## Snapshots

## Login Page
![login](https://github.com/singhjyotiraditya/Skydine/assets/96012244/7712ec77-239c-409f-9408-806f49370390)

## Home Page
![image](https://github.com/singhjyotiraditya/Skydine/assets/96012244/5ca9f9c5-2ebc-4f05-ba9b-4a0580925075)

## Responsive
![Responsive](https://github.com/singhjyotiraditya/Skydine/assets/96012244/06798693-a1c8-49fd-b55a-8a5c7eb3bb9b)


