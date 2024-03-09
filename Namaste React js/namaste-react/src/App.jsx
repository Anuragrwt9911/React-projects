import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./component/Navbar";
import RestaurantCard from "./component/RestaurantCard";
import { restaurantList } from "./constants";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [filteredRestaurants, setFilterRestaurants] = useState(restaurantList);

  /**filtering food by name */

  const FilterFood = (searchText) => {
    const searchLowerCase = searchText.toLowerCase();
    setFilterRestaurants(
      restaurant.filter((item) => {
        const filterData = item.name.toLowerCase();
        return filterData.includes(searchLowerCase);
      })
    );
  };

  return (
    <div>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        FilterFood={FilterFood}
      />

      <RestaurantCard restaurantList={restaurantList} restaurant={restaurant} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
