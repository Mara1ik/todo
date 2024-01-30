import { useState, useRef } from "react";
import pencilIcon from "./../../img/pencilIcon.svg";
import { StyledForm, StyledInput, StyledButton } from "./style";

function TaskInput({ setTaskList, taskList }) {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const id = Date.now();
    setTaskList([...taskList, { id: id, text: inputValue, isDone: false }]);
    setInputValue("");
  }

  function onInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledButton type="submit">
        <img src={pencilIcon} alt="pencil" />
      </StyledButton>
      <StyledInput
        onChange={onInputChange}
        type="text"
        ref={inputRef}
        placeholder={"Write a task..."}
        value={inputValue}
      />
    </StyledForm>
  );
}

export default TaskInput;
