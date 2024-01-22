import { useRef, useEffect, useState } from "react";
import pencilIcon from "./../../img/pencilIcon.svg";
import { StyledForm, StyledInput, StyledButton } from "./style";

function TaskInput({ setTaskList }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function addTask() {
    if (inputValue === "") return;
    setTaskList((arr) => [...arr, inputValue]);
    setInputValue('');
    console.log("gds")
  }

  function submitHandler(e) {
    e.preventDefault();
    addTask();
  }

  function onInputChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledButton type="submit">
        <img src={pencilIcon} alt="pencil" />
      </StyledButton>
      <StyledInput
        onChange={onInputChange}
        type="text"
        ref={inputRef}
        placeholder={"Write a task..."}
        value={inputValue || ''}
      />
    </StyledForm>
  );
}

export default TaskInput;
