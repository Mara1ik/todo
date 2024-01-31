import { useState } from "react";
import ListItem from "./ListItem";
import { StyledUl } from "./style";

function List({ taskList, setTaskList }) {
  const [doneTaskList, setDoneTaskList] = useState({});

  function deleteTask(taskId) {
    setTaskList((prev) => {
      return prev.filter((task) => task.id !== taskId);
    });
  }

  function doTask(taskId) {
    setDoneTaskList((prev) => {
      const arr = { ...prev };
      arr[taskId] = arr[taskId] ? !arr[taskId] : true;
      return arr;
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
          doTask={doTask}
          isDone={doneTaskList[task.id]}
        />
      ))}
    </StyledUl>
  );
}

export default List;
