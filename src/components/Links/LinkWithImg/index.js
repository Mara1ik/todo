import { StyledLink } from "./style";

function StyledLinkWithImg({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

export default StyledLinkWithImg;
