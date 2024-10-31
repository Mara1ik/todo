import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { boundAddTask } from "../../store";
import pencilIcon from "./../../img/pencilIcon.svg";
import { StyledForm, StyledInput, StyledTextarea, StyledButton } from "./style";

function TaskCreator() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultTaskValue = { title: "", description: "" };
  const [taskValue, setTaskValue] = useState(defaultTaskValue);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function onFormSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (taskValue.title === "") return;
    boundAddTask(taskValue);
    navigate("/");
    setTaskValue(defaultTaskValue);
  }

  function onTitleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskValue((prev) => ({ ...prev, title: e.target.value }));
  }

  function onDescriptionInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTaskValue((prev) => ({ ...prev, description: e.target.value }));
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <h2>Task title</h2>
      <StyledInput
        onChange={onTitleInputChange}
        type="text"
        ref={inputRef}
        placeholder={"Write title..."}
        value={taskValue.title || ""}
      />
      <h3>Description</h3>
      <StyledTextarea
        onChange={onDescriptionInputChange}
        placeholder={"Write description..."}
        value={taskValue.description || ""}
      />
      <StyledButton type="submit">
        <span>Add task</span>
        <img src={pencilIcon} alt="pencil" />
      </StyledButton>
    </StyledForm>
  );
}

export default TaskCreator;
