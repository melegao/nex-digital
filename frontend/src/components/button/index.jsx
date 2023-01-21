import { Button } from "./styles";

export const ButtonBase = ({
  children,
  type,
  onClick,
  sizebutton,
  colorbutton,
  width,
  ...rest
}) => {
  return <Button>{children}</Button>;
};
