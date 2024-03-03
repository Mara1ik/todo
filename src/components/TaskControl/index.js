import { useDispatch } from "react-redux";
import { StyledTaskControlWrapper, StyledButton } from "./style";
import check from "./../../img/check.svg";
import pencilIcon from "./../../img/pencilIcon.svg";
import binIcon from "./../../img/binIcon.svg";
import { deleteTask, doTask, editTask } from "../../store";
import { useNavigate } from "react-router-dom";

function TaskControl({ taskValue, taskEdit, setTaskEdit }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onAddDescriptionClick() {
    dispatch(
      editTask({
        id: taskValue.id,
        value: { title: taskEdit.title, description: "KEK" },
      })
    );
  }

  function onConfirmClick() {
    dispatch(
      editTask({
        id: taskValue.id,
        value: { title: taskEdit.title, description: taskEdit.description },
      })
    );
    setTaskEdit((prev) => ({ ...prev, isEditing: false }));
  }

  function onEditClick() {
    setTaskEdit((prev) => ({ ...prev, isEditing: !prev.isEditing }));
  }

  function onDeleteClick() {
    navigate("/");
    dispatch(deleteTask(taskValue.id));
  }

  return (
    <StyledTaskControlWrapper>
      {taskEdit.isEditing ? (
        <>
          <StyledButton onClick={onAddDescriptionClick} type="button">
            Add description
          </StyledButton>
          <StyledButton onClick={onConfirmClick} type="button">
            Confirm
          </StyledButton>
        </>
      ) : (
        <>
          <StyledButton
            onClick={() => dispatch(doTask(taskValue.id))}
            type="button"
          >
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
      )}
    </StyledTaskControlWrapper>
  );
}

export default TaskControl;
