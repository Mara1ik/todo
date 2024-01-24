import ListItem from "./ListItem";
import { StyledUl } from "./style";

function List({ taskList, setTaskList }) {
  function deleteTask(taskId) {
    setTaskList((arr) => arr.filter((item) => item.id !== taskId));
  }

  return (
    <StyledUl>
      {taskList.map(
        (task, i) =>
          i < 11 && (
            <ListItem
              id={task.id}
              task={task.value}
              taskId={task.id}
              deleteTask={deleteTask}
            />
          )
      )}
    </StyledUl>
  );
}

export default List;
