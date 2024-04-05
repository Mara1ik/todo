import fileIcon from "./../../img/fileIcon.svg";
import sunIcon from "./../../img/sunIcon.svg";
import { StyledHeaderWrapper, StyledLine } from "./style";
import StyledLinkWithImg from "../StyledLinks/StyledLinkWithImg";

function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledLinkWithImg to="/">
        <img src={fileIcon} alt="File icon" />
      </StyledLinkWithImg>
      <h1>To Do app</h1>
      <StyledLine />
      <StyledLinkWithImg to="/weather">
        <img src={sunIcon} alt="Sun icon" />
      </StyledLinkWithImg>
    </StyledHeaderWrapper>
  );
}

export default Header;
