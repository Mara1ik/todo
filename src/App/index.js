import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import TaskInput from "../components/TaskInput";
import { StyledContainer } from "./style";

function App() {
  const [taskList, setTaskList] = useState([]);
  //   interface of task list
  //   {
  //     id: String;
  //     isDone: Boolean;
  //     text: String;
  //   }

  return (
    <>
      <StyledContainer>
        <Header />
        <List taskList={taskList} setTaskList={setTaskList} />
        <TaskInput taskList={taskList} setTaskList={setTaskList} />
      </StyledContainer>
    </>
  );
}

export default App;
