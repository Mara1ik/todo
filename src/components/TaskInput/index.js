import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store";
import pencilIcon from "./../../img/pencilIcon.svg";
import { StyledForm, StyledInput, StyledButton } from "./style";

function TaskInput() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function onFormSubmit(e) {
    e.preventDefault();
    if (inputValue === "") return;
    dispatch(addTask(inputValue));
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
