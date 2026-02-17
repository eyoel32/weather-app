import { useState } from "react";

const API_KEY = "e2a7dbf7be5e1c18001d3f2e02d1ac4b";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function useWeather() {
  
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  

  // if the user did not type a real city name, show an error.

  const fetchByCity = async () => {
    if (!input.trim()) {
      setError("Please enter a city");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Current Weather
      const weatherRes = await fetch(
        `${BASE_URL}/weather?q=${input}&units=metric&appid=${API_KEY}`
      );
       // response validation + data extraction part.
      if (!weatherRes.ok) {
        throw new Error("City not found");
      }

      const weatherData = await weatherRes.json();
      setWeather(weatherData);

    
    } catch (err) {
      setError(err.message);
      setWeather(null);
      
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Fetch Weather By Location
  // =========================
  const fetchByLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          // Current Weather
          const weatherRes = await fetch(
            `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          );

          if (!weatherRes.ok) {
            throw new Error("Failed to fetch location weather");
          }

          const weatherData = await weatherRes.json();
          setWeather(weatherData);
          setInput(weatherData.name);

          
          
          
        } catch (err) {
          setError(err.message);
          setWeather(null);
          
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setLoading(false);
        setError("Location permission denied");
      }
    );
  };

  return {
    
    input,
    setInput,
    weather,
    loading,
    error,
    fetchByCity,
    fetchByLocation,
  };
}

export default useWeather;


