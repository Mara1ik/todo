import WeatherCards from "../components/WeatherCards";
import Page from "../components/Page";
import Button from "../components/Button";
import { addWeather, addWeatherFetch } from "../store";

function WeatherPage() {
  async function getCity() {
    return prompt("City?", "dubai");
  }

  function onAddButFetchClick() {
    getCity().then((response) => addWeatherFetch(response));
  }

  function onAddButClick() {
    getCity().then((response) => addWeather(response));
  }

  return (
    <Page>
      <WeatherCards />
      <Button onClick={onAddButFetchClick} bottomPlace>
        Add weather widget (fetch)
      </Button>
      <Button onClick={onAddButClick}>Add weather widget (axios)</Button>
    </Page>
  );
}

export default WeatherPage;
