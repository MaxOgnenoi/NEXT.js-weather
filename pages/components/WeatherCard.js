// components/WeatherCard.js
import React from 'react';
import moment from 'moment';
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiDayCloudy,
  WiNightClear,
  WiNightRain,
  WiNightCloudy,
  WiDayFog,
  WiHumidity,
  WiBarometer,
  WiStrongWind,
  WiSunrise,
  WiSunset,
} from 'react-icons/wi';
import '../styles/Weather.css';

const getWeatherIcon = (weatherDescription, sunrise, sunset, currentTime) => {
  const isDaytime = currentTime > sunrise && currentTime < sunset;

  switch (weatherDescription) {
    case 'Clear':
      return isDaytime ? <WiDaySunny size={64} /> : <WiNightClear size={64} />;
    case 'Rain':
      return isDaytime ? <WiRain size={64} /> : <WiNightRain size={64} />;
    case 'Clouds':
      return isDaytime ? <WiCloudy size={64} /> : <WiNightCloudy size={64} />;
    default:
      return isDaytime ? <WiDayCloudy size={64} /> : <WiNightCloudy size={64} />;
  }
};

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather, sys, visibility, wind } = weatherData;
  const currentTime = moment().unix();

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-container">
        <div className="temperature main-temperature">{Math.round(main.temp)}°C</div>
        <div className="feels-like">Feels like: {Math.round(main.feels_like)}°C</div>
        <div className="condition">
          {getWeatherIcon(weather[0].main, sys.sunrise, sys.sunset, currentTime)}
          {weather[0].description}
        </div>
        <div className="other-info">
          <div className="humidity">
            <WiHumidity />
            Humidity: {main.humidity}%
          </div>
          <div className="pressure">
            <WiBarometer />
            Pressure: {main.pressure} hPa
          </div>
          <div className="visibility">
            <WiDayFog />
            Visibility: {visibility / 1000} km
          </div>
          <div className="wind">
            <WiStrongWind />
            Wind: {wind.speed} m/s
          </div>
        </div>
      </div>
      <div className="weather-details">
        <div>
          <WiSunrise />Sunrise: {moment.unix(sys.sunrise).format('HH:mm')}
        </div>
        <div>
          <WiSunset />Sunset: {moment.unix(sys.sunset).format('HH:mm')}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
