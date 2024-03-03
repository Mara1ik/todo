import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { StyledUl } from "./style";

function List() {
  const taskList = useSelector((state) => state.taskList);

  return (
    <StyledUl>
      {taskList.map((task, i) => (
        <ListItem
          key={task.id}
          taskValue={task.value.title}
          taskId={task.id}
          isDone={task.isDone}
        />
      ))}
    </StyledUl>
  );
}

export default List;
