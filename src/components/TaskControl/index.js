import { StyledTaskControlWrapper } from "./style";
import EditControl from "./EditControl";
import ShowControl from "./ShowControl";

function TaskControl({ taskValue, taskEdit, setTaskEdit }) {
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
}

export default TaskControl;
