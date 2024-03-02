import fileIcon from "./../../img/fileIcon.svg";
import arrow from "./../../img/arrow.svg";
import { StyledHeaderWrapper, StyledLine } from "./style";
import StyledLinkWithImg from "../StyledLinks/StyledLinkWithImg";

function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledLinkWithImg to="/">
        <img src={fileIcon} alt="file icon" />
      </StyledLinkWithImg>
      <h1>To Do app</h1>
      <StyledLine />
      <img src={arrow} alt="arrow down" />
    </StyledHeaderWrapper>
  );
}

export default Header;
