import { FC } from "react";
import { StyledTaskWrapper, StyledInput, StyledStatus } from "./style";
import { ITaskValue, ITaskEdit } from "./../../pages/TaskPage";
import Dispatcher from "./../../constants/dispatcherType";

interface ITask {
  taskEdit: ITaskEdit;
  taskValue: ITaskValue;
  setTaskEdit: Dispatcher<ITaskEdit>;
}

const Task: FC<ITask> = ({ taskValue, taskEdit, setTaskEdit }) => {
  function onTitleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskEdit((prev) => ({
      ...prev,
      value: { ...prev.value, title: e.target.value },
    }));
  }

  function onDescriptionInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskEdit((prev) => ({
      ...prev,
      value: { ...prev.value, description: e.target.value },
    }));
  }

  const Title = taskEdit.isEditing ? (
    <StyledInput
      onChange={onTitleInputChange}
      type="text"
      value={taskEdit.value.title}
    />
  ) : (
    <span>{taskValue.value.title}</span>
  );

  const Description = taskEdit.isEditing ? (
    <StyledInput
      onChange={onDescriptionInputChange}
      type="text"
      value={taskEdit.value.description}
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
};

export default Task;
