import styled from "styled-components";

export const StyledTaskWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20rem;

  span {
    height: 20rem;
  }
`;

export const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  border: 2rem solid #413f3f;
  border-radius: 4px;
  width: 100%;
  height: 20rem;
  font-size: 15rem;
  padding-left: 0px;
  opacity: 0.6;

  &:focus {
    opacity: 1;
  }
`;

export const StyledStatus = styled.div`
  width: 80rem;
  position: absolute;
  top: 3rem;
  right: 3rem;
  border: 2px solid #413f3f;
  border-radius: 10px;
  background-color: ${(props) => (props.$isDone ? "#abf7b1" : "#f1807e")};
  padding: 3rem;
  text-align: center;
`;
