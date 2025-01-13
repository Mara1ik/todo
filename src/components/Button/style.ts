import styled from "styled-components";

interface IStyledButton {
  $isBottomPlace: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
  height: 24rem;
  border: 2rem solid #413f3f;
  border-radius: 15px;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.$isBottomPlace ? "auto" : "inherit")};

  &:hover {
    opacity: 1;
  }
`;
