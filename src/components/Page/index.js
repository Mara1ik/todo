import { StyledContainer } from "./style";

import Header from "../Header";

function Page({ children }) {
  return (
    <StyledContainer>
      <Header />
      {children}
    </StyledContainer>
  );
}

export default Page;
