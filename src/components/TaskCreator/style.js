import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20rem;
`;

export const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  border: 2rem solid #413f3f;
  border-radius: 4px;
  width: 100%;
  height: 20rem;
  padding: 3rem;
  opacity: 0.6;

  &:focus {
    opacity: 1;
  }
`;

export const StyledTextarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  border: 2rem solid #413f3f;
  border-radius: 4px;
  width: 100%;
  height: 90rem;
  padding: 3rem;
  opacity: 0.6;
  resize: none;

  &:focus {
    opacity: 1;
  }
`;

export const StyledButton = styled.button`
  width: 100rem;
  height: 25rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border: 2rem solid #413f3f;
  border-radius: 15px;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  img {
    height: 16rem;
  }
`;
