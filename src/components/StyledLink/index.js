import { Link } from "react-router-dom";
import { StyledLinkWrapper } from "./style";

function StyledLink({ children }) {
  return (
    <StyledLinkWrapper>
      <Link>{children}</Link>
    </StyledLinkWrapper>
  );
}

export default StyledLink;
