function Forecast({ forecast }) {
  if (!forecast || !Array.isArray(forecast)) {
    return null;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>5-Day Forecast</h3>

      {forecast.map((day, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
          <p>{Math.round(day.main.temp)} °C</p>
          <p>{day.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
