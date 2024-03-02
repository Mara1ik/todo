import { Link } from "react-router-dom";
import { StyledNavLinkWrapper } from "./style";

function StyledNavLink({ to, bottomPlace = false, children }) {
  return (
    <StyledNavLinkWrapper $isBottomPlace={bottomPlace}>
      <Link to={to}>{children}</Link>
    </StyledNavLinkWrapper>
  );
}

export default StyledNavLink;
