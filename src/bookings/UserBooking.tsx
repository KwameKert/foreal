import { useSelector } from "../hooks/useTypesSelector";
import * as Yup from "yup";
import momentJs from "moment";
import { useFormik } from "formik";
import { AuthHeader } from "../auth/components/auth-header";
import { AppInput } from "../core/components/AppInput";
import { AppButton } from "../core/components/AppButton";
import { AppDate } from "../core/components/AppDate";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useBooking";
import { useEffect } from "react";

interface FormValues {
  title: string;
  meeting_time: Date | string | any;
  moment_creator?: number;
  moment_id?: number;
  place_id?: number;
  party_size_adults: number;
  email: string;
  username: string;
  full_name: string;
}

export const UserBooking = () => {
  const { addBooking } = useActions();
  const { moment } = useSelector((state) => state.booking);
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const { bookingSuccessful, bookingId } = useSelector(
    (state) => state.booking
  );
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    party_size_adults: Yup.number().required("Party size is required"),
    full_name: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required"),
    username: Yup.string().required("Username is required"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      title: "",
      meeting_time: null,
      moment_creator: moment.moment_creator,
      moment_id: moment.moment_id,
      place_id: moment.place_id,
      party_size_adults: 2,
      email: "",
      full_name: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handlebooking(values);
    },
  });

  const handlebooking = (values: FormValues) => {
    addBooking(values);
  };

  useEffect(() => {
    checkBooking();
  });

  const checkBooking = () => {
    if (bookingSuccessful && bookingId) {
      navigate(`/booking/success/${bookingId}`);
    }
  };

  return (
    <>
      <div className=" h-full w-full flex flex-col justify-center items-center bg-image">
        <p className="text-3xl font-bold text-red-700 mb-2">Foreal</p>
        <div className="flex flex-col gap-y-7">
          <div className="md:w-[35rem] w-full p-8  rounded-xl bg-white">
            <AuthHeader
              headLine="Let's get your table ready!"
              description="Please fill in your credentials."
            />

            <form onSubmit={formik.handleSubmit}>
              {error && <p className="text-red-500">{error}</p>}
              <AppInput
                variant="standard"
                label="Title"
                name="title"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.errors.title}
              />

              <AppDate
                variant="standard"
                label="Date"
                name="meeting_time"
                inputClass="w-full py-2 border-b-2 border-slate-500"
                onChange={formik.setFieldValue}
                value={formik.values.meeting_time}
                error={formik.errors.meeting_time}
              />

              <AppInput
                variant="standard"
                label="Party size"
                name="party_size_adults"
                type="number"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.party_size_adults}
                error={formik.errors.party_size_adults}
                touched={formik.touched.party_size_adults}
              />
              <AppInput
                variant="standard"
                label="Full name"
                name="full_name"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.full_name}
                error={formik.errors.full_name}
              />
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
                label="Email"
                name="email"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
              />
              <div className="mt-4">
                <AppButton
                  color="primary"
                  variant="contained"
                  text="Book now"
                  buttonStyles="font-bold"
                  handleClick={formik.handleSubmit}
                  disabled={!formik.dirty || !formik.isValid || loading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
