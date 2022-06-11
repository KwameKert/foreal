import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FunctionComponent } from "react";

type AppInputProps = {
  variant: "standard" | "filled" | "outlined" | undefined;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  name?: string;
  error?: string;
  inputClass?: string;
};

export const AppInput: FunctionComponent<AppInputProps> = ({
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
          variant={variant}
          color="secondary"
          defaultValue={value}
          onChange={onChange}
          type={type}
          fullWidth
        />
      </div>

      {error && <div className="text-red-500">{error}</div>}
    </>

    // <>
    //   <label>{label}</label>
    //   <input name={name} type={type} onChange={onChange} value={value} />
    // </>

    // </Box>
  );
};
