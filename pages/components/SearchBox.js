import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../styles/Weather.css";

function SearchBox({ setCity }) {
  const [city, setCityValue] = useState("");

  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };

  const handleCitySubmit = (event) => {
    event.preventDefault();
    setCity(city);
    setCityValue('');
  };

  return (
    <form onSubmit={handleCitySubmit} className="search-box">
      <FiSearch />
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Search for a city..."
      />
      <button className="searchBtn" type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
