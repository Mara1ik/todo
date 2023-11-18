import fileIcon from "./../../img/fileIcon.svg";
import arrow from "./../../img/arrow.svg";
import { HeaderWrapper, Line } from "./style";

function Header() {
  return (
    <HeaderWrapper>
      <img src={fileIcon} alt="file icon" />
      <h1>To Do app</h1>
      <Line></Line>
      <img src={arrow} alt="arrow down" />
    </HeaderWrapper>
  );
}

export default Header;
