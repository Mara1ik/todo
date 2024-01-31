import { useRef } from "react";
import binIcon from "./../../../img/binIcon.svg";
import { StyledLi, StyledInput, StyledLabel, StyledButton } from "./style";

function ListItem({ taskValue, taskId, deleteTask, doTask, isDone }) {
  const checkboxRef = useRef(null);

  return (
    <StyledLi>
      <StyledInput
        type="checkbox"
        ref={checkboxRef}
        id={taskId}
        onClick={() => doTask(taskId)}
      />
      <StyledLabel className={isDone && "checked"} for={taskId}>
        {taskValue}
      </StyledLabel>
      {isDone && (
        <StyledButton type="button" onClick={() => deleteTask(taskId)}>
          <img src={binIcon} alt="Trash bin" />
        </StyledButton>
      )}
    </StyledLi>
  );
}

export default ListItem;
