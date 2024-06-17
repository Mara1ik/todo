import { Link } from "react-router-dom";
import { StyledNavLinkWrapper } from "./style";

function NavLink({ to, bottomPlace = false, children }) {
  return (
    <StyledNavLinkWrapper $isBottomPlace={bottomPlace}>
      <Link to={to}>{children}</Link>
    </StyledNavLinkWrapper>
  );
}

export default NavLink;
