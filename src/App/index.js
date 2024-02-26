import Header from "../components/Header";
import List from "../components/List";
import TaskInput from "../components/TaskInput";
import { StyledContainer } from "./style";

function App() {
  return (
    <>
      <StyledContainer>
        <Header />
        <List />
        <TaskInput />
      </StyledContainer>
    </>
  );
}

export default App;
