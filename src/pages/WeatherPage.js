import { useDispatch } from "react-redux";

import WeatherCards from "../components/WeatherCards";
import Page from "../components/Page";
import Button from "../components/Button";
import { fetchWeather, getWeather } from "../async/weather";

function WeatherPage() {
  const dispatch = useDispatch();
  function getCity(func) {
    const city = prompt("City?", "dubai");
    dispatch(func(city));
  }
  return (
    <Page>
      <WeatherCards />
      <Button onClick={() => getCity(fetchWeather)} bottomPlace>
        Add weather widget (fetch)
      </Button>
      <Button onClick={() => getCity(getWeather)}>
        Add weather widget (axios)
      </Button>
    </Page>
  );
}

export default WeatherPage;
