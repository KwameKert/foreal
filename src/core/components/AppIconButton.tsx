import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { FunctionComponent } from "react";

type AppInputProps = {
  color:
    | "primary"
    | "success"
    | "error"
    | "secondary"
    | "info"
    | "default"
    | undefined;
  icon: any;
  buttonClass?: string;
  handleClick: () => void;
};
export const AppIconButton: FunctionComponent<AppInputProps> = ({
  color,
  icon,
  handleClick,
}) => {
  return (
    <IconButton
      color={color}
      aria-label="upload picture"
      component="span"
      onClick={handleClick}
    >
      {icon}
    </IconButton>
  );
};
