import Button from "@mui/material/Button";
import { FunctionComponent } from "react";

type AppButtonProps = {
  variant: "text" | "outlined" | "contained" | undefined;
  color: "primary" | "success" | "error" | "secondary" | "info" | undefined;
  text: string;
  icon?: any;
  buttonStyles?: string | undefined;
};

export const AppButton: FunctionComponent<AppButtonProps> = ({
  variant,
  color,
  buttonStyles,
  text,
  icon,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      className={buttonStyles}
      startIcon={icon}
    >
      {text}
    </Button>
  );
};
