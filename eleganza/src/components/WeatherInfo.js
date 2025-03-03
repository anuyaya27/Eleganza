import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (location) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=YOUR_API_KEY`)
        .then((response) => {
          setWeather(response.data);
          setError('');
        })
        .catch((error) => {
          setError('Could not fetch weather data');
          setWeather(null);
        });
    }
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(e.target.location.value);
  };

  return (
    <div className="weather-info p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-4 text-turquoise-600">Weather Information</h2>

      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          className="p-2 border rounded text-gray-700 w-full focus:ring-2 focus:ring-turquoise-500"
        />
        <button
          type="submit"
          className="bg-turquoise-500 text-white p-2 mt-4 rounded hover:bg-turquoise-600 transition duration-300"
        >
          Get Weather
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="mt-4 text-lg text-gray-700">
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
