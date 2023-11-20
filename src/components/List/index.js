import ListItem from "./ListItem";
import { StyledUl } from "./style";

function List({ taskList, setTaskList }) {

  function deleteTask(task) {
    setTaskList((arr) => arr.filter((item) => item !== task))
  }

  return (
    <StyledUl>
      {taskList.map(
        (task, i) =>
          i < 11 && <ListItem task={task} id={task} deleteTask={deleteTask} />
      )}
    </StyledUl>
  );
}

export default List;
