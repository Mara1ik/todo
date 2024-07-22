import { useNavigate } from "react-router-dom";
import { boundDoTask, boundDeleteTask } from "../../../store";
import { StyledButton } from "./style";
import check from "./../../../img/check.svg";
import pencilIcon from "./../../../img/pencilIcon.svg";
import binIcon from "./../../../img/binIcon.svg";

function ShowControl({ taskValue, setTaskEdit }) {
  const navigate = useNavigate();

  function onEditClick() {
    setTaskEdit((prev) => ({ ...prev, isEditing: !prev.isEditing }));
  }

  function onDeleteClick() {
    navigate("/");
    boundDeleteTask(taskValue.id);
  }

  return (
    <>
      <StyledButton onClick={() => boundDoTask(taskValue.id)} type="button">
        <span>{taskValue.isDone ? "Open task" : "Close task"}</span>
        <img src={check} alt="Check mark"></img>
      </StyledButton>
      <StyledButton onClick={onEditClick} type="button">
        <span>Edit task</span>
        <img src={pencilIcon} alt="Pencil"></img>
      </StyledButton>
      <StyledButton onClick={onDeleteClick} type="button">
        <span>Delete task</span>
        <img src={binIcon} alt="Bin"></img>
      </StyledButton>
    </>
  );
}

export default ShowControl;
