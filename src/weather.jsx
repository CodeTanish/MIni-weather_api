import React from 'react';

function Weather({ data }) {
  const { name, main, weather } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p>{weather[0].description}</p>
      <h3>{main.temp}°C</h3>
    </div>
  );
}

export default Weather;
