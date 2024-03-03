import { useSelector } from "react-redux";
import { StyledTaskWrapper, StyledInput, StyledStatus } from "./style";

function TaskInput({ taskId, isEditing }) {
  const taskValue = useSelector((state) => {
    for (const task of state.taskList) {
      if (task.id === taskId) return task;
    }
  });

  const Title = isEditing ? (
    <StyledInput type="text" value={taskValue.value.title} />
  ) : (
    <span>{taskValue.value.title}</span>
  );

  const Description = isEditing ? (
    <StyledInput type="text" value={taskValue.value.description} />
  ) : (
    <span>{taskValue.value.description}</span>
  );

  return (
    <StyledTaskWrapper>
      <h2>Task title</h2>
      {Title}
      {taskValue.value.description && (
        <>
          <h3>Description</h3>
          {Description}
        </>
      )}
      <StyledStatus $isDone={taskValue.isDone}>
        {taskValue.isDone ? "Complete" : "Incomplete"}
      </StyledStatus>
    </StyledTaskWrapper>
  );
}

export default TaskInput;
