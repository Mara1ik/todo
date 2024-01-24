import { useRef, useEffect, useState, useId } from "react";
import pencilIcon from "./../../img/pencilIcon.svg";
import { StyledForm, StyledInput, StyledButton } from "./style";

function TaskInput({ setTaskList }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState();
  const taskId = useId();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function addTask() {
    if (inputValue === "") return;
    setTaskList((arr) => [...arr, {id: taskId, value: inputValue}]);
    setInputValue('');
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
