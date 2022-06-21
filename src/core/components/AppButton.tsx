import Button from "@mui/material/Button";
import { FunctionComponent } from "react";

type AppButtonProps = {
  variant?: "text" | "outlined" | "contained" | undefined;
  color: "primary" | "success" | "error" | "secondary" | "info" | undefined;
  text: string;
  icon?: any;
  size?: any;
  buttonStyles?: string | undefined;
  disabled?: boolean;
  handleClick?: () => void;
};

export const AppButton: FunctionComponent<AppButtonProps> = ({
  variant,
  color,
  buttonStyles,
  text,
  icon,
  size = "medium",
  handleClick,
  disabled = false,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      className={buttonStyles}
      startIcon={icon}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
