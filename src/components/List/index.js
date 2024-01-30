import ListItem from "./ListItem";
import { StyledUl } from "./style";

function List({ taskList, setTaskList }) {
  function deleteTask(taskId) {
    setTaskList((prev) => {
      return prev.filter((task) => task.id !== taskId);
    });
  }

  return (
    <StyledUl>
      {taskList.map((task, i) => (
        <ListItem
          key={task.id}
          task={task.value}
          taskId={task.id}
          deleteTask={deleteTask}
        />
      ))}
    </StyledUl>
  );
}

export default List;
