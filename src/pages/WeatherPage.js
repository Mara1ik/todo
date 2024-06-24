import { useDispatch } from "react-redux";

import WeatherCards from "../components/WeatherCards";
import Page from "../components/Page";
import Button from "../components/Button";
import { fetchWeather, getWeather } from "../async/weather";

function WeatherPage() {
  const dispatch = useDispatch();

  return (
    <Page>
      <WeatherCards />
      <Button
        onClick={() => {
          const city = prompt("City?", "dubai");
          dispatch(fetchWeather(city));
        }}
        bottomPlace
      >
        Add weather widget (fetch)
      </Button>
      <Button
        onClick={() => {
          const city = prompt("City?", "dubai");
          dispatch(getWeather(city));
        }}
      >
        Add weather widget (axios)
      </Button>
    </Page>
  );
}

export default WeatherPage;
