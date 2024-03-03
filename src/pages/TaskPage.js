import { useParams } from "react-router-dom";
import Page from "../components/Page";
import Header from "../components/Header";
import TasK from "../components/Task";

function TaskPage() {
  const params = useParams();
  return (
    <Page>
      <Header />
      <TasK taskId={params.taskId} />
    </Page>
  );
}

export default TaskPage;
