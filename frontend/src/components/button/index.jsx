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
  return (
    <Button
      width={width}
      type={type}
      onClick={onClick}
      sizebutton={sizebutton}
      colorbutton={colorbutton}
      {...rest}
    >
      {children}
    </Button>
  );
};
