import { useRef, useState } from "react";
import binIcon from "./../../../img/binIcon.svg";
import { StyledLi, StyledInput, StyledLabel, StyledButton } from "./style";

function ListItem({ task, taskId, deleteTask }) {
  const checkboxRef = useRef(null);
  const [isDone, setIsDone] = useState(false);

  function taskDone() {
    setIsDone(!isDone);
  }

  function onClick() {
    deleteTask(taskId);
  }

  return (
    <StyledLi id={taskId}>
      <StyledInput
        type="checkbox"
        ref={checkboxRef}
        id={task}
        onClick={taskDone}
      />
      <StyledLabel className={isDone && "checked"} for={task}>
        {task}
      </StyledLabel>
      {isDone && (
        <StyledButton type="button" onClick={onClick}>
          <img src={binIcon} alt="Trash bin" />
        </StyledButton>
      )}
    </StyledLi>
  );
}

export default ListItem;
