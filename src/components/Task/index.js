import { StyledTaskWrapper, StyledInput, StyledStatus } from "./style";

function Task({ taskValue, taskEdit, setTaskEdit }) {
  function onTitleInputChange(e) {
    setTaskEdit((prev) => ({ ...prev, title: e.target.value }));
  }

  function onDescriptionInputChange(e) {
    setTaskEdit((prev) => ({ ...prev, description: e.target.value }));
  }

  const Title = taskEdit.isEditing ? (
    <StyledInput
      onChange={onTitleInputChange}
      type="text"
      value={taskEdit.title}
    />
  ) : (
    <span>{taskValue.value.title}</span>
  );

  const Description = taskEdit.isEditing ? (
    <StyledInput
      onChange={onDescriptionInputChange}
      type="text"
      value={taskEdit.description}
    />
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
        {taskValue.isDone ? "Closed" : "Opened"}
      </StyledStatus>
    </StyledTaskWrapper>
  );
}

export default Task;
