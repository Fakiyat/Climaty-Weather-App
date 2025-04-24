import React, { useEffect, useState } from "react";
import "./WeatherApp.css";
import Sunny from "../assets/Images/Sunny-weather.png";
import Snowy from "../assets/Images/Snowfalling.png";
import Rainy from "../assets/Images/Raining.png";
import Cloudy from "../assets/Images/Cloudyy.png";
// import Sunny from "./../assets/Images/sunny.png";

function WeatherApp() {
  const [data, setData] = useState({});
  const [loaction, setLoaction] = useState("");

  const api_key = "91d1cb936f8682bef4adc123701c79bf";

  const date = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentDate = new Date().getDate();
  const dateName = date[currentDate % 7];
  const monthNumber = new Date().getMonth(); // Months are zero based

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = monthNames[monthNumber];
  const formatedDate = `${dateName} , ${currentDate} ${monthName} `;

  // for default loaction when the app loads
  useEffect(() => {
    const fetchDefaultWeather = async () => {
      const defaultLoaction = "Srinagar";
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${defaultLoaction}&units=Metric&appid=${api_key}`
        );
        const defaultData = await response.json();
        setData(defaultData);
      } catch (error) {
        console.erroe("Error fetching defalut location", error);
      }
    };
    fetchDefaultWeather();
  }, []);

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
    if (loaction.trim() !== "") {
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
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      weatherData2();
    }
  };
  const weatherImages = {
    Clear: Sunny,
    Snow: Snowy,
    Rain: Rainy,
    Clouds: Cloudy,
    Haze: Cloudy,
    Mist: Cloudy,
  };
  const weatherImage = data.weather
    ? weatherImages[data.weather[0].main]
    : null;
  const backgroundImages = {
    Clear: `linear-gradient(135deg,rgb(224, 142, 75),rgb(223, 174, 83))`,
    Snow: `linear-gradient(135deg, #2c3e50,rgb(161, 202, 209))`,
    Rain: `linear-gradient(135deg,rgb(112, 133, 155),rgb(75, 83, 85)`,
    Clouds: `linear-gradient(135deg,rgb(57, 92, 133),rgb(69, 87, 114)`,
    Haze: `linear-gradient(135deg,rgb(81, 127, 173), #93ccd6)`,
    Mist: `linear-gradient(135deg, #2c3e50, #93ccd6)`,
  };
  const backgroundImage = data.weather
    ? backgroundImages[data.weather[0].main]
    : null;
  return (
    <div className="container" style={{ backgroundImage }}>
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
          <img src={weatherImage} alt="sunny" />
          <div className="weather-type">
            {data.weather ? data.weather[0].main : null}
          </div>
          <span className="weather-description">
            {data.weather ? data.weather[0].description : null}
          </span>
          <div className="temp">
            {data.main ? `${Math.floor(data.main.temp)}°` : null}
          </div>
          <div style={{ color: "white", marginBottom: "10px" }}>
            {data.main ? (
              <span>
                H: {Math.floor(data.main.temp_max)}° / L:{" "}
                {Math.floor(data.main.temp_min)}°
              </span>
            ) : null}
          </div>
          <div className="weather-date">
            <p>{formatedDate}</p>
          </div>
        </div>

        <div className="extra-info">
          <div className="info-item">
            <i className="fa-solid fa-temperature-high info-icon"></i>
            <div className="info-title">Feels Like</div>
            <div className="info-value">
              {data.main ? `${Math.floor(data.main.feels_like)}°` : null}
            </div>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-compress info-icon"></i>
            <div className="info-title">Pressure</div>
            <div className="info-value">
              {data.main ? data.main.pressure : null} hPa
            </div>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-water info-icon"></i>
            <div className="info-title">Sea Level</div>
            <div className="info-value">
              {data.main ? data.main.sea_level : null} mSl
            </div>
          </div>
        </div>

        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">{data.main ? data.main.humidity : null}%</div>
          </div>
          <div className="wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">
              {data.wind ? `${Math.floor(data.wind.speed)} kph` : null}
            </div>
          </div>
        </div>

        <div className="forecast">
          <div className="forecast-title">Day Forecast</div>
          <div className="forecast-items">
            <div className="forecast-item">
              <i className="fa-solid fa-sun forecast-icon"></i>
              <div className="forecast-temp">29°C</div>
            </div>
            <div className="forecast-item">
              <i className="fa-solid fa-cloud-sun forecast-icon"></i>
              <div className="forecast-temp">27°C</div>
            </div>
            <div className="forecast-item">
              <i className="fa-solid fa-cloud forecast-icon"></i>
              <div className="forecast-temp">25°C</div>
            </div>
            <div className="forecast-item">
              <i className="fa-solid fa-cloud-sun-rain forecast-icon"></i>
              <div className="forecast-temp">24°C</div>
            </div>
            <div className="forecast-item">
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
