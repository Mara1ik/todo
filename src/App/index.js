import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import TaskInput from "../components/TaskInput";
import { Container } from "./style";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <Container>
        <Header />
        <List taskList={taskList} setTaskList={setTaskList} />
        <TaskInput setTaskList={setTaskList} />
      </Container>
    </>
  );
}

export default App;
