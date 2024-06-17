import styled from "styled-components";

export const StyledButton = styled.button`
  height: 24rem;
  border: 2rem solid #413f3f;
  border-radius: 15px;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  margin-top: ${(props) => (props.$isBottomPlace ? "auto" : "inherit")};

  &:hover {
    opacity: 1;
  }
`;
