import { StyledButton } from "./style";

function Button({ bottomPlace, children }) {
  return (
    <StyledButton
      $isBottomPlace={bottomPlace}
      onClick={() => {
        prompt("City?", "dubai");
      }}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
