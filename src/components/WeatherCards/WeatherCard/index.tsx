import { FC } from "react";
import { StyledCardWrapper, StyledTextWrapper } from "./style";

interface IWeatherCard {
  city: string;
  temp: number;
  icon: string;
}

const WeatherCard: FC<IWeatherCard> = ({ city, temp, icon }) => {
  return (
    <StyledCardWrapper>
      <StyledTextWrapper>
        <h2>{city}</h2>
        <h3>{temp}</h3>
      </StyledTextWrapper>
      <img src={icon} alt="Weather Icon" />
    </StyledCardWrapper>
  );
};

export default WeatherCard;
