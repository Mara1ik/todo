import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import TaskInput from "../components/TaskInput";
import { StyledContainer } from "./style";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <StyledContainer>
        <Header />
        <List taskList={taskList} setTaskList={setTaskList} />
        <TaskInput setTaskList={setTaskList} />
      </StyledContainer>
    </>
  );
}

export default App;
