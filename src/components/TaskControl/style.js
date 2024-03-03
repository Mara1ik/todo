import styled from "styled-components";

export const StyledTaskControlWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 15rem;
`;

export const StyledButton = styled.button`
  border: 2rem solid #413f3f;
  border-radius: 15px;
  opacity: 0.6;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 5rem;

  img {
    height: 16rem;
  }

  &:hover {
    opacity: 1;
  }
`;
