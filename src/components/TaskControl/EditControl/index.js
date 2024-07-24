import { boundEditTask } from "../../../store";
import { StyledButton } from "./style";

function EditControl({ taskValue, taskEdit, setTaskEdit }) {
  function onAddDescriptionClick() {
    boundEditTask({
      id: taskValue.id,
      value: { title: taskEdit.title, description: "KEK" },
    });
  }

  function onConfirmClick() {
    if (taskEdit.title === "") return;
    boundEditTask({
      id: taskValue.id,
      value: { title: taskEdit.title, description: taskEdit.description },
    });
    setTaskEdit((prev) => ({ ...prev, isEditing: false }));
  }
  return (
    <>
      {!taskValue.value.description && (
        <StyledButton onClick={onAddDescriptionClick} type="button">
          Add description
        </StyledButton>
      )}
      <StyledButton onClick={onConfirmClick} type="button">
        Confirm
      </StyledButton>
    </>
  );
}

export default EditControl;
