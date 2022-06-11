import { useActions } from "../hooks/useAuth";
import * as Yup from "yup";
import { AuthHeader } from "./components/auth-header";
import { AppInput } from "../core/components/AppInput";
import { AppButton } from "../core/components/AppButton";
import { useFormik } from "formik";
import { useSelector } from "../hooks/useTypesSelector";
import LinearProgress from "@mui/material/LinearProgress";

interface FormValues {
  username: string;
  password: string;
}

export function Login() {
  const { login } = useActions();
  const { loading, error } = useSelector((state) => state.user);
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });
  const handleLogin = (values: FormValues) => {
    login(values);
  };

  return (
    <>
      {/* {loading && <LinearProgress />} */}

      <div className=" h-full w-full flex flex-col justify-center items-center bg-image">
        <div className="flex flex-col gap-y-7">
          <div className="md:w-[35rem] w-full p-8  rounded-xl bg-white">
            <AuthHeader
              headLine="Let's get you signed in!"
              description="Please fill in your credentials."
            />
            <form onSubmit={formik.handleSubmit}>
              {error && <p className="text-red-500">{error}</p>}
              <AppInput
                variant="standard"
                label="Username"
                name="username"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.username}
                error={formik.errors.username}
              />
              <AppInput
                variant="standard"
                label="Password"
                type="password"
                name="password"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password}
              />
              <div className="mt-4">
                <AppButton
                  color="primary"
                  variant="contained"
                  text="Search"
                  buttonStyles="font-bold "
                  handleClick={formik.handleSubmit}
                  disabled={!formik.dirty || !formik.isValid || loading}
                />
              </div>
            </form>
          </div>
          <div className="grid justify-items-center">
            <p className="text-sm text-gray-500	font-extrabold">
              &copy; Copyright 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
