import { FC, PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";
import { StyledNavLinkWrapper } from "./style";

interface INavLink {
  to: string;
  bottomPlace?: boolean;
  children: ReactNode;
}

const NavLink: FC<PropsWithChildren<INavLink>> = ({
  to,
  bottomPlace = false,
  children,
}) => {
  return (
    <StyledNavLinkWrapper $isBottomPlace={bottomPlace}>
      <Link to={to}>{children}</Link>
    </StyledNavLinkWrapper>
  );
};

export default NavLink;
