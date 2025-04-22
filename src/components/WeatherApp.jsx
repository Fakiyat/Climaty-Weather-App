import React from "react";
import "./WeatherApp.css";
import Sunny from "../assets/Images/Sunny-weather.png";
import Snowy from "../assets/Images/Snowfalling.png";
import Rainy from "../assets/Images/Raining.png";
import Cloudy from "../assets/Images/cloudy.png";
// import Sunny from "./../assets/Images/sunny.png";

function WeatherApp() {
  return (
    <div class="container">
      <div class="weather-app">
        <button class="theme-toggle">
          <i class="fa-solid fa-moon"></i>
        </button>

        <div class="search">
          <div class="search-top">
            <i class="fa-solid fa-location-crosshairs"></i>
            <div class="loaction-name">Srinagar</div>
          </div>
          <div class="search_bar">
            <input type="text" placeholder="Search for a City" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div class="climate">
          <img src={Sunny} alt="sunny" />
          <div class="weather-type">Clear</div>
          <div class="temp">28°C</div>
          <div class="weather-date">
            <p>Wed, 23 April</p>
          </div>
        </div>

        <div class="extra-info">
          <div class="info-item">
            <i class="fa-solid fa-temperature-high info-icon"></i>
            <div class="info-title">Feels Like</div>
            <div class="info-value">30°C</div>
          </div>
          <div class="info-item">
            <i class="fa-solid fa-compress info-icon"></i>
            <div class="info-title">Pressure</div>
            <div class="info-value">1013 hPa</div>
          </div>
          <div class="info-item">
            <i class="fa-solid fa-sun info-icon"></i>
            <div class="info-title">UV Index</div>
            <div class="info-value">8</div>
          </div>
        </div>

        <div class="weather-data">
          <div class="humidity">
            <div class="data-name">Humidity</div>
            <i class="fa-solid fa-droplet"></i>
            <div class="data">35%</div>
          </div>
          <div class="wind">
            <div class="data-name">Wind</div>
            <i class="fa-solid fa-wind"></i>
            <div class="data">3 km/h</div>
          </div>
        </div>

        <div class="forecast">
          <div class="forecast-title">5-Day Forecast</div>
          <div class="forecast-items">
            <div class="forecast-item">
              <div class="forecast-day">Thu</div>
              <i class="fa-solid fa-sun forecast-icon"></i>
              <div class="forecast-temp">29°C</div>
            </div>
            <div class="forecast-item">
              <div class="forecast-day">Fri</div>
              <i class="fa-solid fa-cloud-sun forecast-icon"></i>
              <div class="forecast-temp">27°C</div>
            </div>
            <div class="forecast-item">
              <div class="forecast-day">Sat</div>
              <i class="fa-solid fa-cloud forecast-icon"></i>
              <div class="forecast-temp">25°C</div>
            </div>
            <div class="forecast-item">
              <div class="forecast-day">Sun</div>
              <i class="fa-solid fa-cloud-sun-rain forecast-icon"></i>
              <div class="forecast-temp">24°C</div>
            </div>
            <div class="forecast-item">
              <div class="forecast-day">Mon</div>
              <i class="fa-solid fa-sun forecast-icon"></i>
              <div class="forecast-temp">26°C</div>
            </div>
          </div>
        </div>

        <div class="loading">
          <div class="spinner"></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
