import React from "react";
import HourlyWeatherCard from "./HourlyWeatherCard"; 
import "../styles/WeatherHourlyForecast.css";

const WeatherHourlyForecast = ({ hourlyForecastData }) => {
  if (!hourlyForecastData || !hourlyForecastData.list) {
    return null;
  }

  const hourlyForecastList = hourlyForecastData.list.slice(0, 6);

  return (
    <div className="hourly-forecast-container">
      <div className="forecast-header">
        <h2>Hourly Forecast</h2>
      </div>
      <div className="hourly-forecast-cards">
        {hourlyForecastList.map((forecast) => (
          <div className="hourly-time" key={forecast.dt} >
            <HourlyWeatherCard weatherData={forecast} showTime />
          </div>
        ))}
      </div>
    </div>
  );

};

export default WeatherHourlyForecast;
