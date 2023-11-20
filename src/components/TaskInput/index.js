import { useRef } from "react";
import pencilIcon from "./../../img/pencilIcon.svg";
import { StyledTaskInputWrapper, StyledInput, StyledButton } from "./style";

function TaskInput({ setTaskList }) {
  const inputRef = useRef(null);
  function addTask() {
    const value = inputRef.current.value;
    if (value === "") return;
    setTaskList((arr) => [...arr, value]);
    inputRef.current.value = "";
  }

  return (
    <StyledTaskInputWrapper>
      <StyledButton type="button" onClick={addTask}>
        <img src={pencilIcon} alt="pencil" />
      </StyledButton>
      <StyledInput type="text" ref={inputRef} placeholder="Write a task..." />
    </StyledTaskInputWrapper>
  );
}

export default TaskInput;
