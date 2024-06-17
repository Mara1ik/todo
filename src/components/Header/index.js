import fileIcon from "./../../img/fileIcon.svg";
import sunIcon from "./../../img/sunIcon.svg";
import { StyledHeaderWrapper, StyledLine } from "./style";
import Link from "../Links/Link";

function Header() {
  return (
    <StyledHeaderWrapper>
      <Link to="/">
        <img src={fileIcon} alt="File icon" />
      </Link>
      <h1>To Do app</h1>
      <StyledLine />
      <Link to="/weather">
        <img src={sunIcon} alt="Sun icon" />
      </Link>
    </StyledHeaderWrapper>
  );
}

export default Header;
