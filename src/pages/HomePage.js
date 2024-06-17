import List from "../components/List";
import Page from "../components/Page";
import NavLink from "../components/Links/NavLink";
import pencilIcon from "../img/pencilIcon.svg";

function HomePage() {
  return (
    <>
      <Page>
        <List />
        <NavLink to="/addTask" bottomPlace>
          <span>Add new task</span>
          <img src={pencilIcon} alt="Pencil"></img>
        </NavLink>
      </Page>
    </>
  );
}

export default HomePage;
