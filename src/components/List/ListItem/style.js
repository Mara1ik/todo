import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  .checked {
    text-decoration: line-through;
    color: #B5B5BA;
  }
`;

export const StyledInput = styled.input`
  margin: 0;
  margin-right: 9rem;
  width: 20rem;
  aspect-ratio: 1;
  border: 2rem solid #b5b5ba;
  cursor: pointer;
  accent-color: grey;
`;

export const StyledLabel = styled.label`
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const StyledButton = styled.button`
  height: 24rem;
  align-items: center;
  position: absolute;
  right: 0; 
`