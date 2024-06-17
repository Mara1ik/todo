import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Page from "../components/Page";
import Task from "../components/Task";
import TaskControl from "../components/TaskControl";

function TaskPage() {
  const taskId = +useParams().taskId;
  const taskValue = useSelector((state) => {
    for (const task of state.taskList) {
      if (task.id === taskId) return task;
    }
  });
  const [taskEdit, setTaskEdit] = useState({
    isEditing: false,
    title: taskValue.value.title,
    description: taskValue.value.description,
  });
  return (
    <Page>
      <Task
        taskValue={taskValue}
        taskEdit={taskEdit}
        setTaskEdit={setTaskEdit}
      />
      <TaskControl
        taskValue={taskValue}
        taskEdit={taskEdit}
        setTaskEdit={setTaskEdit}
      />
    </Page>
  );
}

export default TaskPage;
