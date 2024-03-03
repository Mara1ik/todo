import { useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import Header from "../components/Header";
import TasK from "../components/Task";
import TaskControl from "../components/TaskControl";

function TaskPage() {
  const taskId = +useParams().taskId;
  const [isEditing, useIsEditing] = useState(false);
  return (
    <Page>
      <Header />
      <TasK taskId={taskId} isEditing={isEditing} />
      <TaskControl taskId={taskId} edit={useIsEditing} />
    </Page>
  );
}

export default TaskPage;
