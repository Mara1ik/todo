import Page from "../components/Page";
import StyledNavLink from "../components/StyledLinks/StyledNavLink";

function ErrorPage() {
  return (
    <Page>
      <span>Ops...</span>
      <span>U are not supposed to be here</span>
      <StyledNavLink>Home page</StyledNavLink>
    </Page>
  );
}

export default ErrorPage;
