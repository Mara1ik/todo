import Header from "../components/Header";
import List from "../components/List";
import Page from "../components/Page";
import StyledLink from "../components/StyledLink";
import pencilIcon from "../img/pencilIcon.svg";

function HomePage() {
  return (
    <>
      <Page>
        <Header />
        <List />
        <StyledLink to="/addTask">
          <span>Add new task</span>
          <img src={pencilIcon} alt="Pencil"></img>
        </StyledLink>
      </Page>
    </>
  );
}

export default HomePage;
