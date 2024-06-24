import { StyledCardWrapper, StyledTextWrapper } from "./style";

function WeatherCard({ city, temp, icon }) {
  return (
    <StyledCardWrapper>
      <StyledTextWrapper>
        <h2>{city}</h2>
        <h3>{temp}</h3>
      </StyledTextWrapper>
      <img src={icon} alt="Weather Icon" />
    </StyledCardWrapper>
  );
}

export default WeatherCard;
