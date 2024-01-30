import ListItem from "./ListItem";
import { StyledUl } from "./style";

function List({ taskList, setTaskList }) {
  function onDeleteTask(taskId) {
    const index = taskList.findIndex((task) => task.id === taskId);
    document.getElementsByTagName("li")[index].remove();
    const TasksArray = [...document.getElementsByTagName("li")];
    const result = [];
    TasksArray.forEach((element) => {
      result.push({ id: element.id, value: element.textContent });
    });
    setTaskList(result);
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
              onDeleteTask={onDeleteTask}
            />
          )
      )}
    </StyledUl>
  );
}

export default List;
