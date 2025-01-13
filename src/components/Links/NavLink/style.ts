import styled from "styled-components";

interface IStyledNavLinkWrapper {
  $isBottomPlace: boolean;
}

export const StyledNavLinkWrapper = styled.div<IStyledNavLinkWrapper>`
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

  a {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 5rem;
  }

  img {
    height: 24rem;
  }
`;
