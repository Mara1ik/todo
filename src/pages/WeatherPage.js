import WeatherCards from "../components/WeatherCards";
import Page from "../components/Page";
import Button from "../components/Button";
import { addWeather } from "../store";
import { getWeather, getWeatherFetch } from "../async/weather";

function WeatherPage() {
  async function getCity() {
    return prompt("City?", "dubai");
  }

  function onAddButClick(func) {
    getCity().then((response) => addWeather(response, func));
  }

  return (
    <Page>
      <WeatherCards />
      <Button onClick={() => onAddButClick(getWeatherFetch)} bottomPlace>
        Add weather widget (fetch)
      </Button>
      <Button onClick={() => onAddButClick(getWeather)}>
        Add weather widget (axios)
      </Button>
    </Page>
  );
}

export default WeatherPage;
