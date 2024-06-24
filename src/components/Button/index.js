import { StyledButton } from "./style";

function Button({ onClick, bottomPlace, children }) {
  return (
    <StyledButton onClick={onClick} $isBottomPlace={bottomPlace}>
      {children}
    </StyledButton>
  );
}

export default Button;
