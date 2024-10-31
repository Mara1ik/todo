import { FC } from "react";
import Dispatcher from "../../../constants/dispatcherType";
import { ITaskEdit, ITaskValue } from "../../../pages/TaskPage";
import { boundEditTask } from "../../../store";
import { StyledButton } from "./style";

interface IEditControl {
  taskValue: ITaskValue;
  taskEdit: ITaskEdit;
  setTaskEdit: Dispatcher<ITaskEdit>;
}

const EditControl: FC<IEditControl> = ({
  taskValue,
  taskEdit,
  setTaskEdit,
}) => {
  function onAddDescriptionClick() {
    boundEditTask({
      id: taskValue.id,
      value: { title: taskEdit.value.title, description: "KEK" },
    });
  }

  function onConfirmClick() {
    if (taskEdit.value.title === "") return;
    boundEditTask({
      id: taskValue.id,
      value: {
        title: taskEdit.value.title,
        description: taskEdit.value.description,
      },
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
};

export default EditControl;
