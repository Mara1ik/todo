import axios from "axios";
import { addWeather } from "../store";

import clearSky from "./../img/weatherIcons/clearSky.png";
import fewClouds from "./../img/weatherIcons/fewClouds.png";
import scatteredClouds from "./../img/weatherIcons/scatteredClouds.png";
import brokenClouds from "./../img/weatherIcons/brokenClouds.png";
import showerRain from "./../img/weatherIcons/showerRain.png";
import rain from "./../img/weatherIcons/rain.png";
import thunderstorm from "./../img/weatherIcons/thunderstorm.png";
import snow from "./../img/weatherIcons/snow.png";
import mist from "./../img/weatherIcons/mist.png";

const key = "8f6ba55858142c39fb43a7ee59c918f0";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const keyUrl = "&appid=" + key;

const icons = {
  "01d": clearSky,
  "02d": fewClouds,
  "03d": scatteredClouds,
  "04d": brokenClouds,
  "09d": showerRain,
  "10d": rain,
  "11d": thunderstorm,
  "13d": snow,
  "50d": mist,
};

export const fetchWeather = (city) => async (dispatch) => {
  try {
    const response = await fetch(baseUrl + city + keyUrl);
    const json = await response.json();
    const weatherData = {
      city: json.name,
      temp: Math.round(json.main.temp - 273.15),
      icon: icons[json.weather[0].icon.slice(0, 2) + "d"],
    };
    dispatch(addWeather(weatherData));
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
        icon: icons[response.data.weather[0].icon.slice(0, 2) + "d"],
      };
      dispatch(addWeather(weatherData));
    })
    .catch((e) => {
      alert("Try another city name pls");
      console.log(e);
    });
};
