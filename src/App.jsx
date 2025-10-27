import { useState } from "react";

const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
  animation: shimmer 15s ease-in-out infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.app-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.app-card {
  width: 100%;
  max-width: 480px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app-header {
  margin-bottom: 2rem;
}

.app-header h1 {
  font-size: 2.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.header-icon {
  font-size: 2rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
}

.app-subtitle {
  color: #6b7280;
  font-size: 0.95rem;
  font-weight: 500;
}

.search-container {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.search-input {
  flex: 1;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.search-button {
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: inherit;
  white-space: nowrap;
}

.search-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.search-button:active:not(:disabled) {
  transform: translateY(0);
}

.search-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.search-button.loading {
  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
}

.search-icon {
  font-size: 1rem;
}

.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.error-icon {
  font-size: 1.25rem;
}

.weather-card {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(240, 147, 251, 0.05) 100%);
  border-radius: 1rem;
  border: 1px solid rgba(102, 126, 234, 0.1);
  animation: slideIn 0.4s ease-out;
}

.weather-header h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.country {
  color: #6b7280;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.weather-icon-large {
  font-size: 5rem;
  margin: 1rem 0;
  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.1));
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.temperature {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 1rem 0;
  letter-spacing: -2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
}

.weather-description {
  font-size: 1.25rem;
  color: #4b5563;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
}

.weather-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.75rem;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.detail-icon {
  font-size: 1.5rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
}

.detail-label {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-size: 1.1rem;
  color: #1f2937;
  font-weight: 700;
}

.update-time {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(156, 163, 175, 0.2);
  color: #9ca3af;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 640px) {
  .app-card {
    padding: 1.5rem;
  }

  .app-header h1 {
    font-size: 1.75rem;
  }

  .search-container {
    flex-direction: column;
  }

  .search-button {
    width: 100%;
    justify-content: center;
  }

  .temperature {
    font-size: 2.75rem;
  }

  .weather-icon-large {
    font-size: 4rem;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
}

function SearchBar({ city, setCity, onSearch, loading }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && city && !loading) {
      onSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        className="search-input"
        disabled={loading}
      />
      <button
        onClick={onSearch}
        disabled={!city || loading}
        className={`search-button ${loading ? 'loading' : ''}`}
      >
        {loading ? (
          <>
            <span className="spinner"></span>
            Loading...
          </>
        ) : (
          <>
            <span className="search-icon">🔍</span>
            Search
          </>
        )}
      </button>
    </div>
  );
}

function WeatherCard({ weather }) {
  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if (code <= 3) return "⛅";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "🌨️";
    if (code <= 82) return "🌦️";
    return "⛈️";
  };

  const getWeatherDescription = (code) => {
    if (code === 0) return "Clear sky";
    if (code <= 3) return "Partly cloudy";
    if (code <= 67) return "Rainy";
    if (code <= 77) return "Snowy";
    if (code <= 82) return "Rain showers";
    return "Thunderstorm";
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{weather.name}</h2>
        <p className="country">{weather.country}</p>
      </div>

      <div className="weather-icon-large">
        {getWeatherIcon(weather.weathercode)}
      </div>

      <div className="temperature">
        {Math.round(weather.temperature)}°C
      </div>

      <div className="weather-description">
        {getWeatherDescription(weather.weathercode)}
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <span className="detail-label">Wind</span>
          <span className="detail-value">{weather.windspeed} km/h</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🧭</span>
          <span className="detail-label">Direction</span>
          <span className="detail-value">{weather.winddirection}°</span>
        </div>
      </div>

      <div className="update-time">
        Last updated: {new Date(weather.time).toLocaleString()}
      </div>
    </div>
  );
}

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(cityName) {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found ❌");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        name,
        country,
        ...weatherData.current_weather,
      });
    } catch (err) {
      console.error(err);
      setError("Failed to fetch weather data ⚠️");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <div className="app-card">
        <div className="app-header">
          <h1>
            <span className="header-icon">🌤️</span>
            Weather Now
          </h1>
          <p className="app-subtitle">Get real-time weather updates</p>
        </div>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={() => fetchWeather(city)}
          loading={loading}
        />

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}