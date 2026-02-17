import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import useWeather from "./hooks/useWeather";
import "./App.css";

function App() {
  const {
    input,
    setInput,
    weather,
    forecast,
    loading,
    error,
    fetchByCity,
    fetchByLocation,
  } = useWeather();

  return (
    <div className="container">
      {/* App Title */}
      <Header />

      {/* Search Section */}
      <SearchBar
        input={input}
        setInput={setInput}  
        fetchByCity={fetchByCity}
        fetchByLocation={fetchByLocation}
      />

      {/* Loading */}
      {loading && <Loader />}

      {/* Error */}
      {error && <ErrorMessage message={error} />}

      {/* Weather + Forecast */}
      {!loading && !error && weather && (
        <>
          <WeatherCard weather={weather} />
          {forecast && <Forecast forecast={forecast} />}
        </>
      )}
    </div>
  );
}

export default App;
