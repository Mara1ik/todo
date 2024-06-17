import { StyledLink } from "./style";

function Link({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

export default Link;
