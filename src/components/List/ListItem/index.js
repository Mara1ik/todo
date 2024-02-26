import { useRef } from "react";
import binIcon from "./../../../img/binIcon.svg";
import { StyledLi, StyledInput, StyledLabel, StyledButton } from "./style";
import { useDispatch } from "react-redux";
import { deleteTask, doTask } from "../../../store";

function ListItem({ taskValue, taskId, isDone }) {
  const checkboxRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <StyledLi>
      <StyledInput
        type="checkbox"
        ref={checkboxRef}
        id={taskId}
        onClick={() => dispatch(doTask(taskId))}
      />
      <StyledLabel className={isDone && "checked"} for={taskId}>
        {taskValue}
      </StyledLabel>
      {isDone && (
        <StyledButton
          type="button"
          onClick={() => dispatch(deleteTask(taskId))}
        >
          <img src={binIcon} alt="Trash bin" />
        </StyledButton>
      )}
    </StyledLi>
  );
}

export default ListItem;
