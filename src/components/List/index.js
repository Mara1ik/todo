import ListItem from "./ListItem";
import { StyledUl } from "./style";

function List({ taskList, setTaskList }) {
  const deleteTask = (id) => {
    setTaskList([...taskList.filter((task) => task.id !== id)]);
  };

  const updateTaskStatus = (id) => {
    setTaskList((prevState) => {
      const newState = prevState.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });

      return newState;
    });
  };

  return (
    <StyledUl>
      {taskList.map((task) => (
        <ListItem
          key={task.id}
          id={task.id}
          text={task.text}
          isDone={task.isDone}
          deleteTask={deleteTask}
          updateTaskStatus={updateTaskStatus}
        />
      ))}
    </StyledUl>
  );
}

export default List;
