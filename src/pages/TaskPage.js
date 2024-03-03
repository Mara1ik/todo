import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Page from "../components/Page";
import Header from "../components/Header";
import TasK from "../components/Task";
import TaskControl from "../components/TaskControl";

function TaskPage() {
  const taskId = +useParams().taskId;
  const taskValue = useSelector((state) => {
    for (const task of state.taskList) {
      if (task.id === taskId) return task;
    }
  });
  const [taskEdit, useTaskEdit] = useState({
    isEditing: false,
    title: taskValue.value.title,
    description: taskValue.value.description,
  });
  return (
    <Page>
      <Header />
      <TasK
        taskValue={taskValue}
        taskEdit={taskEdit}
        setTaskEdit={useTaskEdit}
      />
      <TaskControl
        taskValue={taskValue}
        taskEdit={taskEdit}
        setTaskEdit={useTaskEdit}
      />
    </Page>
  );
}

export default TaskPage;
