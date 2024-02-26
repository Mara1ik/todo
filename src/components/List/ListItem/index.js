import { useRef } from "react";
import { useDispatch } from "react-redux";
import { doTaskAction, deleteTaskAction } from "../../../store";
import binIcon from "./../../../img/binIcon.svg";
import { StyledLi, StyledInput, StyledLabel, StyledButton } from "./style";

function ListItem({ taskValue, taskId, isDone }) {
  const checkboxRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <StyledLi>
      <StyledInput
        type="checkbox"
        ref={checkboxRef}
        id={taskId}
        onClick={() => dispatch(doTaskAction(taskId))}
      />
      <StyledLabel className={isDone && "checked"} for={taskId}>
        {taskValue}
      </StyledLabel>
      {isDone && (
        <StyledButton
          type="button"
          onClick={() => dispatch(deleteTaskAction(taskId))}
        >
          <img src={binIcon} alt="Trash bin" />
        </StyledButton>
      )}
    </StyledLi>
  );
}

export default ListItem;
