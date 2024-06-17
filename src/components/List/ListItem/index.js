import { useRef } from "react";
import { useDispatch } from "react-redux";
import { doTask, deleteTask } from "../../../store";
import binIcon from "./../../../img/binIcon.svg";
import { StyledLi, StyledInput, StyledLink, StyledButton } from "./style";

function ListItem({ taskValue, taskId, isDone }) {
  const checkboxRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <StyledLi>
      <StyledInput
        type="checkbox"
        ref={checkboxRef}
        onClick={() => dispatch(doTask(taskId))}
        checked={isDone}
      />
      <StyledLink to={"/" + taskId} className={isDone && "checked"}>
        {taskValue}
      </StyledLink>
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
