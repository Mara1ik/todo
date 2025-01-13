import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "./../hooks/useTypedSelector";
import Page from "../components/Page";
import Task from "../components/Task";
import TaskControl from "../components/TaskControl";

type IParams = {
  taskId: string;
};

export interface ITaskValue {
  id: number;
  isDone: boolean;
  value: { title: string; description: string };
}

export interface ITaskEdit extends ITaskValue {
  isEditing: boolean;
}

function TaskPage() {
  let taskId = useParams<IParams>().taskId;
  if (taskId === undefined) {
    taskId = "0";
  }
  const taskValue = useTypedSelector((state) => {
    for (const task of state.taskList) {
      if (task.id === +taskId) return task;
    }
    return defaultTaskValue;
  });

  const defaultTaskValue: ITaskValue = {
    id: 0,
    isDone: true,
    value: {
      title: "Error",
      description: "Pls, try again",
    },
  };

  const defaultState = {
    ...defaultTaskValue,
    isEditing: false,
  };

  const [taskEdit, setTaskEdit] = useState<ITaskEdit>(
    taskValue.id !== 0 ? { ...taskValue, isEditing: false } : defaultState
  );

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
