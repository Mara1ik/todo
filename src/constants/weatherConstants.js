import clearSky from "./../img/weatherIcons/clearSky.png";
import fewClouds from "./../img/weatherIcons/fewClouds.png";
import scatteredClouds from "./../img/weatherIcons/scatteredClouds.png";
import brokenClouds from "./../img/weatherIcons/brokenClouds.png";
import showerRain from "./../img/weatherIcons/showerRain.png";
import rain from "./../img/weatherIcons/rain.png";
import thunderstorm from "./../img/weatherIcons/thunderstorm.png";
import snow from "./../img/weatherIcons/snow.png";
import mist from "./../img/weatherIcons/mist.png";

export const weatherIcons = {
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

export const key = "8f6ba55858142c39fb43a7ee59c918f0";

export const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
export const keyUrl = "&appid=" + key;
