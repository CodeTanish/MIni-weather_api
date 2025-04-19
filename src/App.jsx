import React, {useState} from "react";
import Weather from "./weather";
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert(data.message);
        setWeatherData(null);
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
