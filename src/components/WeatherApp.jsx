import React, { useState } from "react";
import "./WeatherApp.css";
import Sunny from "../assets/Images/Sunny-weather.png";
import Snowy from "../assets/Images/Snowfalling.png";
import Rainy from "../assets/Images/Raining.png";
import Cloudy from "../assets/Images/cloudy.png";
// import Sunny from "./../assets/Images/sunny.png";

function WeatherApp() {
  const [data, setData] = useState({});
  const [loaction, setLoaction] = useState("");
  const api_key = "91d1cb936f8682bef4adc123701c79bf";

  const handleSearchInput = (e) => {
    setLoaction(e.target.value);

    console.log(loaction);
  };

  // const weatherData = async () => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${loaction}&units=Metric&appid=${api_key}`;
  //   const response = await fetch(url);
  //   const searchData = response.json();
  //   console.log(searchData);
  //   setData(searchData);
  // };
  async function weatherData2() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${loaction}&units=Metric&appid=${api_key}`
      );
      const searchData = await response.json();
      console.log(searchData);
      setData(searchData);
    } catch (error) {
      console.error("Error fetching data from api", error);
    }
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      weatherData2();
    }
  };
  return (
    <div className="container">
      <div className="weather-app">
        <button className="theme-toggle">
          <i className="fa-solid fa-moon"></i>
        </button>

        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-crosshairs"></i>
            <div className="loaction-name">{data.name}</div>
          </div>
          <div className="search_bar">
            <input
              type="text"
              placeholder="Search for a City"
              value={loaction}
              onChange={handleSearchInput}
              onKeyDown={handleKeyDown}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={weatherData2}
            ></i>
          </div>
        </div>

        <div className="climate">
          <img src={Sunny} alt="sunny" />
          <div className="weather-type">
            {data.weather ? data.weather[0].main : null}
          </div>
          <div className="temp">
            {data.main ? `${Math.floor(data.main.temp)}°` : null}
          </div>
          <div className="weather-date">
            <p>Wed, 23 April</p>
          </div>
        </div>

        <div className="extra-info">
          <div className="info-item">
            <i className="fa-solid fa-temperature-high info-icon"></i>
            <div className="info-title">Feels Like</div>
            <div className="info-value">23</div>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-compress info-icon"></i>
            <div className="info-title">Pressure</div>
            <div className="info-value">1000</div>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-sun info-icon"></i>
            <div className="info-title">UV Index</div>
            <div className="info-value">8</div>
          </div>
        </div>

        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">35%</div>
          </div>
          <div className="wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">3 km/h</div>
          </div>
        </div>

        <div className="forecast">
          <div className="forecast-title">5-Day Forecast</div>
          <div className="forecast-items">
            <div className="forecast-item">
              <div className="forecast-day">Thu</div>
              <i className="fa-solid fa-sun forecast-icon"></i>
              <div className="forecast-temp">29°C</div>
            </div>
            <div className="forecast-item">
              <div className="forecast-day">Fri</div>
              <i className="fa-solid fa-cloud-sun forecast-icon"></i>
              <div className="forecast-temp">27°C</div>
            </div>
            <div className="forecast-item">
              <div className="forecast-day">Sat</div>
              <i className="fa-solid fa-cloud forecast-icon"></i>
              <div className="forecast-temp">25°C</div>
            </div>
            <div className="forecast-item">
              <div className="forecast-day">Sun</div>
              <i className="fa-solid fa-cloud-sun-rain forecast-icon"></i>
              <div className="forecast-temp">24°C</div>
            </div>
            <div className="forecast-item">
              <div className="forecast-day">Mon</div>
              <i className="fa-solid fa-sun forecast-icon"></i>
              <div className="forecast-temp">26°C</div>
            </div>
          </div>
        </div>

        <div className="loading">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
