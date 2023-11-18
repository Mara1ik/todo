import ListItem from "./ListItem";
import { Ul } from "./style";

function List({ taskList, setTaskList }) {

  function deleteTask(task) {
    setTaskList((arr) => arr.filter((item) => item !== task))
  }

  return (
    <Ul>
      {taskList.map(
        (task, i) =>
          i < 11 && <ListItem task={task} id={task} deleteTask={deleteTask} />
      )}
    </Ul>
  );
}

export default List;
