import { useDispatch, useSelector } from "react-redux";
import { StyledTaskControlWrapper, StyledButton } from "./style";
import check from "./../../img/check.svg";
import pencilIcon from "./../../img/pencilIcon.svg";
import binIcon from "./../../img/binIcon.svg";
import { deleteTask, doTask } from "../../store";
import { useNavigate } from "react-router-dom";

function TaskControl({ taskId, edit }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskValue = useSelector((state) => {
    for (const task of state.taskList) {
      if (task.id === taskId) return task;
    }
  });

  function onDelete() {
    navigate("/");
    dispatch(deleteTask(taskId));
  }

  return (
    <StyledTaskControlWrapper>
      <StyledButton onClick={() => dispatch(doTask(taskId))} type="button">
        <span>{taskValue.isDone ? "Close task" : "Open task"}</span>
        <img src={check} alt="Check mark"></img>
      </StyledButton>
      <StyledButton onClick={() => edit((prev) => !prev)} type="button">
        <span>Edit task</span>
        <img src={pencilIcon} alt="Pencil"></img>
      </StyledButton>
      <StyledButton onClick={onDelete} type="button">
        <span>Delete task</span>
        <img src={binIcon} alt="Bin"></img>
      </StyledButton>
    </StyledTaskControlWrapper>
  );
}

export default TaskControl;
