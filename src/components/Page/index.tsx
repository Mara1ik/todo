import { FC, PropsWithChildren } from "react";
import { StyledContainer } from "./style";

import Header from "../Header";

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      {children}
    </StyledContainer>
  );
};

export default Page;
