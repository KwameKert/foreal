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
  handleCklick: () => void;
};
export const AppIconButton: FunctionComponent<AppInputProps> = ({
  color,
  icon,
  handleCklick,
}) => {
  return (
    <IconButton
      color={color}
      aria-label="upload picture"
      component="span"
      onClick={handleCklick}
    >
      {icon}
    </IconButton>
  );
};
