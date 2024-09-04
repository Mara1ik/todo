import { useSelector } from "react-redux";
import WeatherCard from "./WeatherCard";
import { StyledCardsWrapper } from "./style";

function WeatherCards() {
  const weatherList = useSelector((state) => state.weatherList);

  return (
    <StyledCardsWrapper>
      {weatherList.map((weatherData, i) => (
        <WeatherCard
          key={i}
          city={weatherData.city}
          temp={weatherData.temp}
          icon={weatherData.icon}
        />
      ))}
    </StyledCardsWrapper>
  );
}

export default WeatherCards;
