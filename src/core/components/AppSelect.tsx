import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FunctionComponent } from "react";
import { MenuItem } from "@mui/material";

type AppInputProps = {
  variant: "standard" | "filled" | "outlined" | undefined;
  label: string;
  list: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number;
  type?: string;
  name?: string;
  error?: string;
  inputClass?: string;
};

export const AppSelect: FunctionComponent<AppInputProps> = ({
  variant,
  name,
  label,
  list,
  value,
  onChange,
  inputClass = "w-full",
  type = "text",
  error,
}) => {
  return (
    <>
      <div className={inputClass}>
        <TextField
          id="standard-basic"
          label={label}
          name={name}
          select
          variant={variant}
          color="secondary"
          value={value}
          onChange={onChange}
          type={type}
          fullWidth
        >
          {list.map((option) => (
            <MenuItem key={option} value={list.indexOf(option)}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {error && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
};
