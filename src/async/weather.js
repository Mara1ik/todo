import axios from "axios";
import { boundAddWeather } from "../store";
import { baseUrl, keyUrl, weatherIcons } from "../constants/weatherConstants";

export const fetchWeather = (city) => async (dispatch) => {
  try {
    const response = await fetch(baseUrl + city + keyUrl);
    const json = await response.json();
    const weatherData = {
      city: json.name,
      temp: Math.round(json.main.temp - 273.15),
      icon: weatherIcons[json.weather[0].icon.slice(0, 2) + "d"],
    };
    boundAddWeather(weatherData);
  } catch (e) {
    alert("Try another city name pls");
    console.log(e);
  }
};

export const getWeather = (city) => async (dispatch) => {
  axios
    .get(baseUrl + city + keyUrl)
    .then((response) => {
      const weatherData = {
        city: response.data.name,
        temp: Math.round(response.data.main.temp - 273.15),
        icon: weatherIcons[response.data.weather[0].icon.slice(0, 2) + "d"],
      };
      boundAddWeather(weatherData);
    })
    .catch((e) => {
      alert("Try another city name pls");
      console.log(e);
    });
};
