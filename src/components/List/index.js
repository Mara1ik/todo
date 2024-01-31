import ListItem from "./ListItem";
import { StyledUl } from "./style";

function List({ taskList, setTaskList }) {
  function deleteTask(taskId) {
    setTaskList((prev) => {
      return prev.filter((task) => task.id !== taskId);
    });
  }

  function doTask(taskId) {
    setTaskList((prev) => {
      return prev.map((task) => {
        if (task.id !== taskId) return task;
        return { ...task, isDone: !task.isDone };
      });
    });
  }

  return (
    <StyledUl>
      {taskList.map((task, i) => (
        <ListItem
          key={task.id}
          taskValue={task.value}
          taskId={task.id}
          deleteTask={deleteTask}
          doTask={doTask}
          isDone={task.isDone}
        />
      ))}
    </StyledUl>
  );
}

export default List;
