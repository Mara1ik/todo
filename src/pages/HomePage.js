import List from "../components/List";
import Page from "../components/Page";
import StyledNavLink from "../components/StyledLinks/StyledNavLink";
import pencilIcon from "../img/pencilIcon.svg";

function HomePage() {
  return (
    <>
      <Page>
        <List />
        <StyledNavLink to="/addTask" bottomPlace>
          <span>Add new task</span>
          <img src={pencilIcon} alt="Pencil"></img>
        </StyledNavLink>
      </Page>
    </>
  );
}

export default HomePage;
