import fileIcon from "./../../img/fileIcon.svg";
import arrow from "./../../img/arrow.svg";
import { StyledHeaderWrapper, StyledLine } from "./style";

function Header() {
  return (
    <StyledHeaderWrapper>
      <img src={fileIcon} alt="file icon" />
      <h1>To Do app</h1>
      <StyledLine />
      <img src={arrow} alt="arrow down" />
    </StyledHeaderWrapper>
  );
}

export default Header;
