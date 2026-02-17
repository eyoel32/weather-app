import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm
} from "react-icons/wi";

function WeatherCard({ weather, city }) {
  // Safety check
  if (!weather || !weather.weather || !weather.main) {
    return null;
  }

  const condition = weather.weather[0].main;

  // Default icon
  let IconComponent = WiCloud;

  if (condition === "Clear") IconComponent = WiDaySunny;
  else if (condition === "Clouds") IconComponent = WiCloud;
  else if (condition === "Rain") IconComponent = WiRain;
  else if (condition === "Snow") IconComponent = WiSnow;
  else if (condition === "Thunderstorm") IconComponent = WiThunderstorm;

  return (
    <div className="weather-card">
      {/* City Name */}
      <h2 className="city-name">
        {city || weather.name}
      </h2>

      {/* Weather Icon */}
      <IconComponent size={100} color="#f39c12" />

      {/* Temperature */}
      <p className="weather-temp">
        {Math.round(weather.main.temp)} °C
      </p>

      {/* Description */}
      <p className="weather-description">
        {weather.weather[0].description}
      </p>

      {/* Extra Info */}
      <div className="weather-extra">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
