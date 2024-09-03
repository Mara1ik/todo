import axios from "axios";
import { baseUrl, keyUrl } from "../constants/weatherConstants";

export const getWeatherFetch = async (city) => {
  try {
    const response = await fetch(baseUrl + city + keyUrl);
    if (response.status === 404) {
      alert("Try another city name pls");
      return 404;
    }
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const getWeather = async (city) => {
  try {
    const response = await axios.get(baseUrl + city + keyUrl);
    return response.data;
  } catch (e) {
    alert("Try another city name pls");
    console.log(e);
    return 404;
  }
};
