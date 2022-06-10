import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FunctionComponent } from "react";

type AppInputProps = {
  variant: "standard" | "filled" | "outlined" | undefined;
  label: string;
};

export const AppInput: FunctionComponent<AppInputProps> = ({
  variant,
  label,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      className="w-full"
    >
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        className="w-full"
        fullWidth
      />
    </Box>
  );
};
