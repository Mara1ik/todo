import { FC, PropsWithChildren, ReactNode } from "react";
import { StyledLink } from "./style";

interface ILink {
  to: string;
  children: ReactNode;
}

const Link: FC<PropsWithChildren<ILink>> = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
