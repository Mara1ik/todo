import { useDispatch } from "react-redux";

import WeatherCards from "../components/WeatherCards";
import Page from "../components/Page";
import Button from "../components/Button";
import { fetchWeather } from "../async/weather";

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
        Add weather widget
      </Button>
    </Page>
  );
}

export default WeatherPage;
