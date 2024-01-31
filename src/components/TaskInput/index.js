import { useRef, useEffect, useState } from "react";
import pencilIcon from "./../../img/pencilIcon.svg";
import { StyledForm, StyledInput, StyledButton } from "./style";

function TaskInput({ setTaskList }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function onFormSubmit(e) {
    e.preventDefault();
    if (inputValue === "") return;
    setTaskList((arr) => [...arr, { id: Math.random(), value: inputValue, isDone: false }]);
    setInputValue("");
  }

  function onInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledButton type="submit">
        <img src={pencilIcon} alt="pencil" />
      </StyledButton>
      <StyledInput
        onChange={onInputChange}
        type="text"
        ref={inputRef}
        placeholder={"Write a task..."}
        value={inputValue || ""}
      />
    </StyledForm>
  );
}

export default TaskInput;
