import clearSky from "./../img/weatherIcons/clearSky.png";
import fewClouds from "./../img/weatherIcons/fewClouds.png";
import scatteredClouds from "./../img/weatherIcons/scatteredClouds.png";
import brokenClouds from "./../img/weatherIcons/brokenClouds.png";
import showerRain from "./../img/weatherIcons/showerRain.png";
import rain from "./../img/weatherIcons/rain.png";
import thunderstorm from "./../img/weatherIcons/thunderstorm.png";
import snow from "./../img/weatherIcons/snow.png";
import mist from "./../img/weatherIcons/mist.png";
import { addWeather } from "../store";

const key = "8f6ba55858142c39fb43a7ee59c918f0";

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
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );
    const json = await response.json();
    const weatherData = {
      city: json.name,
      temp: Math.round(json.main.temp - 273.15),
      icon: icons[json.weather[0].icon.slice(0, 2) + "d"],
    };
    dispatch(addWeather(weatherData));
  } catch (e) {
    console.log(e);
  }
};
