import { useEffect, useState } from "react";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=019919a887221e24ba0d9e0fbd837648";

const res = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
  ],
  base: "stations",
  main: {
    temp: 283.91,
    feels_like: 282.9,
    temp_min: 282.59,
    temp_max: 285.81,
    pressure: 1021,
    humidity: 71,
  },
  visibility: 10000,
  wind: { speed: 3.6, deg: 110 },
  clouds: { all: 68 },
  dt: 1709736362,
  sys: {
    type: 2,
    id: 2075535,
    country: "GB",
    sunrise: 1709706854,
    sunset: 1709747366,
  },
  timezone: 0,
  id: 2643743,
  name: "London",
  cod: 200,
};

function WeatherPage() {
  const [data, setData] = useState("empty");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      <span>{data.name}</span>
      <span>{data.main.temp}</span>
    </div>
  );
}

export default WeatherPage;
