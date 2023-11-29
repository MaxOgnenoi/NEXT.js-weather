// components/Weather.js
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import WeatherHourlyForecast from './WeatherHourlyForecast';
import SearchBox from './SearchBox';
import '../styles/Weather.css';

function Weather() {
  const [city, setCity] = useState('New York City');
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecastData, setHourlyForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        const currentWeatherData = await currentWeatherResponse.json();
        setWeatherData(currentWeatherData);

        const hourlyForecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        const hourlyForecastData = await hourlyForecastResponse.json();
        setHourlyForecastData(hourlyForecastData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div className="weather-container">
      <SearchBox setCity={setCity} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
      {hourlyForecastData && <WeatherHourlyForecast hourlyForecastData={hourlyForecastData} />}
    </div>
  );
}

export default Weather;
