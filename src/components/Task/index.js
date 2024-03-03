import { useSelector } from "react-redux";
import { StyledTaskWrapper } from "./style";

function TaskInput({ taskId }) {
  const taskValue = useSelector((state) => {
    state.taskList.forEach((task) => {
      if (task.id === taskId) console.log(task);
    });
  });
  return (
    <StyledTaskWrapper>
      <h2>Task title</h2>
      <h4>{taskValue}</h4>
      <h3>Description</h3>
      <h4>taskdescription</h4>
    </StyledTaskWrapper>
  );
}

export default TaskInput;
