import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FunctionComponent } from "react";
import { MenuItem } from "@mui/material";

type AppInputProps = {
  variant: "standard" | "filled" | "outlined" | undefined;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number;
  type?: string;
  name?: string;
  error?: string;
  inputClass?: string;
};

const currencies = [
  "Meat lover",
  "Sea lover",
  "Traditional",
  "Exotic",
  "Gourmet",
  "Cheap and Good",
  "Street food",
  "Pizza Night",
  "Chill Out",
];

export const AppSelect: FunctionComponent<AppInputProps> = ({
  variant,
  name,
  label,
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
          {currencies.map((option) => (
            <MenuItem key={option} value={currencies.indexOf(option)}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {error && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
};
