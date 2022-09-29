import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FunctionComponent } from "react";

type AppInputProps = {
  variant: "standard" | "filled" | "outlined" | undefined;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
  name?: string;
  touched?: any;
  error?: string;
  inputClass?: string;
};

export const AppInput: FunctionComponent<AppInputProps> = ({
  variant,
  name,
  label,
  value,
  touched,
  onChange,
  inputClass = "w-full",
  type = "text",
  error,
}) => {
  const showError = () => {
    console.log(error);
    if (touched && error) {
      return <div className="text-red-500">{error}</div>;
    }
  };
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
        <div className="text-red-500">{error}</div>
      </div>
    </>

    // <>
    //   <label>{label}</label>
    //   <input name={name} type={type} onChange={onChange} value={value} />
    // </>

    // </Box>
  );
};
