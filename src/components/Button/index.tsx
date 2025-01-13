import { FC, PropsWithChildren, ReactNode } from "react";
import { StyledButton } from "./style";

interface IButton {
  onClick: () => void;
  bottomPlace?: boolean;
  children: ReactNode;
}

const Button: FC<PropsWithChildren<IButton>> = ({
  onClick,
  bottomPlace = false,
  children,
}: IButton) => {
  return (
    <StyledButton onClick={onClick} $isBottomPlace={bottomPlace}>
      {children}
    </StyledButton>
  );
};

export default Button;
