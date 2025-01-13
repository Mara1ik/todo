import { FC } from "react";
import { StyledTaskControlWrapper } from "./style";
import EditControl from "./EditControl";
import ShowControl from "./ShowControl";
import { ITaskEdit, ITaskValue } from "../../pages/TaskPage";
import Dispatcher from "../../constants/dispatcherType";

interface ITaskControl {
  taskValue: ITaskValue;
  taskEdit: ITaskEdit;
  setTaskEdit: Dispatcher<ITaskEdit>;
}

const TaskControl: FC<ITaskControl> = ({
  taskValue,
  taskEdit,
  setTaskEdit,
}) => {
  return (
    <StyledTaskControlWrapper>
      {!taskEdit.isEditing ? (
        <ShowControl taskValue={taskValue} setTaskEdit={setTaskEdit} />
      ) : (
        <EditControl
          taskValue={taskValue}
          taskEdit={taskEdit}
          setTaskEdit={setTaskEdit}
        />
      )}
    </StyledTaskControlWrapper>
  );
};

export default TaskControl;
