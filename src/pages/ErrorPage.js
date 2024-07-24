import Page from "../components/Page";
import NavLink from "../components/Links/NavLink";

function ErrorPage() {
  return (
    <Page>
      <span>Ops...</span>
      <span>U are not supposed to be here</span>
      <NavLink to="/">Home page</NavLink>
    </Page>
  );
}

export default ErrorPage;
