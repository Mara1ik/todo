import { useRef } from "react";
import { boundDoTask, boundDeleteTask } from "../../../store";
import binIcon from "./../../../img/binIcon.svg";
import { StyledLi, StyledInput, StyledLink, StyledButton } from "./style";

function ListItem({ taskValue, taskId, isDone }) {
  const checkboxRef = useRef(null);

  return (
    <StyledLi>
      <StyledInput
        type="checkbox"
        ref={checkboxRef}
        onClick={() => boundDoTask(taskId)}
        checked={isDone}
      />
      <StyledLink to={"/" + taskId} className={isDone && "checked"}>
        {taskValue}
      </StyledLink>
      {isDone && (
        <StyledButton type="button" onClick={() => boundDeleteTask(taskId)}>
          <img src={binIcon} alt="Trash bin" />
        </StyledButton>
      )}
    </StyledLi>
  );
}

export default ListItem;
