import { useRef, useId } from "react";
import binIcon from "./../../../img/binIcon.svg";
import { StyledLi, StyledInput, StyledLabel, StyledButton } from "./style";

function ListItem({ task, taskId, deleteTask, doTask, isDone }) {
  const checkboxRef = useRef(null);
  const inputId = useId();

  function onCheckboxClick() {
    doTask(taskId);
  }

  function onButtonClick() {
    deleteTask(taskId);
  }

  return (
    <StyledLi>
      <StyledInput
        type="checkbox"
        ref={checkboxRef}
        id={inputId}
        onClick={onCheckboxClick}
      />
      <StyledLabel className={isDone && "checked"} for={inputId}>
        {task}
      </StyledLabel>
      {isDone && (
        <StyledButton type="button" onClick={onButtonClick}>
          <img src={binIcon} alt="Trash bin" />
        </StyledButton>
      )}
    </StyledLi>
  );
}

export default ListItem;
