import WeatherCard from "./WeatherCard";
import { StyledCardsWrapper } from "./style";
import { useTypedSelector } from "../../hooks/useTypedSelector";

function WeatherCards() {
  const weatherList = useTypedSelector((state) => state.weatherList);

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
