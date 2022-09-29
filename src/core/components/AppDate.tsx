import { FunctionComponent } from "react";
import DatePicker from "react-datetime-picker";

type AppDateProps = {
  variant: "standard" | "filled" | "outlined" | undefined;
  label: string;
  onChange?: any;
  value?: any;
  type?: string;
  name?: string;
  touched?: any;
  error?: any;
  inputClass?: string;
};

export const AppDate: FunctionComponent<AppDateProps> = ({
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
  return (
    <>
      <div className={inputClass}>
        <p className="text-xs ">{label}</p>
        <DatePicker
          value={value}
          onChange={(val) => {
            onChange(name, val);
          }}
        />
      </div>
    </>
  );
};
