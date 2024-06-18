import { useEffect, useState } from "react";

import Page from "../components/Page";
import Button from "../components/Button";

import clearSky from "./../img/weatherIcons/clearSky.png";
import fewClouds from "./../img/weatherIcons/fewClouds.png";
import scatteredClouds from "./../img/weatherIcons/scatteredClouds.png";
import brokenClouds from "./../img/weatherIcons/brokenClouds.png";
import showerRain from "./../img/weatherIcons/showerRain.png";
import rain from "./../img/weatherIcons/rain.png";
import thunderstorm from "./../img/weatherIcons/thunderstorm.png";
import snow from "./../img/weatherIcons/snow.png";
import mist from "./../img/weatherIcons/mist.png";

function WeatherPage() {
  const key = "8f6ba55858142c39fb43a7ee59c918f0";
  const city = "dugblin";
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

  const [weatherData, setWeatherData] = useState({
    city: "",
    condition: "",
    temp: "",
    iconId: "",
  });

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      const temp = await response.json();
      setWeatherData({
        city: temp.name,
        condition: temp.weather[0].main,
        temp: Math.round(temp.main.temp - 273.15),
        iconId: icons[temp.weather[0].icon.slice(0, 2) + "d"],
      });
    };
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <h2>{weatherData.city}</h2>
      <h3>{weatherData.temp}</h3>
      <h3>{weatherData.condition}</h3>
      <img
        style={{ width: "100px", height: "100px" }}
        src={weatherData.iconId}
        alt="weather icon"
      />
      <Button bottomPlace>Add weather widget</Button>
    </Page>
  );
}

export default WeatherPage;
