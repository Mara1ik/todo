import WeatherCards from "../components/WeatherCards";
import Page from "../components/Page";
import Button from "../components/Button";
import { fetchWeather, getWeather } from "../async/weather";
import { boundAddWeather } from "../store";

function WeatherPage() {
  function getCity() {
    return prompt("City?", "dubai");
  }

  function onAddButClick(getFunc) {
    getFunc(getCity()).then((response) => {
      if (response !== 404) boundAddWeather(response);
    });
  }

  return (
    <Page>
      <WeatherCards />
      <Button onClick={() => onAddButClick(fetchWeather)} bottomPlace>
        Add weather widget (fetch)
      </Button>
      <Button onClick={() => onAddButClick(getWeather)}>
        Add weather widget (axios)
      </Button>
    </Page>
  );
}

export default WeatherPage;
