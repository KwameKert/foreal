import { AppButton } from "../../../core/components/AppButton";
import AddIcon from "@mui/icons-material/Add";
import React, { useRef } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useActions } from "../../../hooks/useRestaurant";
import { useSelector } from "../../../hooks/useTypesSelector";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { AppInput } from "../../../core/components/AppInput";
import { useMediaQuery, useTheme } from "@mui/material";
import { IAddRestaurant } from "../restaurant.model";

export const AddRestaurant = () => {
  const theme = useTheme();
  const { loading, error, success } = useSelector((state) => state.restaurant);
  const { addRestaurant, fetchRestaurant } = useActions();

  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = React.useState(false);
  const pictureFile = useRef<any>(null);
  const menuFile = useRef<any>(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    longitude: Yup.string().required("Longitude is required"),
    latitude: Yup.string().required("Latitude is required"),
    reservation: Yup.string().required("Reservation is required"),
    startAm: Yup.string().required("Time is required"),
    startPm: Yup.string().required("Time is required"),
    stopAm: Yup.string().required("Time is required"),
    stopPm: Yup.string().required("Time is required"),
    description: Yup.string().required("Description is required"),
  });
  const initialValues = {
    name: "",
    manager: "1",
    description: "",
    latitude: "",
    longitude: "",
    city: "",
    address: "",
    reservation: "1",
    startAm: "",
    stopAm: "",
    startPm: "",
    stopPm: "",
    closingDay: "0",
    phone: "",
    email: "",
    picture: {},
    menu: {},
  };
  const formik = useFormik<IAddRestaurant>({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleRestaurantSubmission(values);
    },
  });
  const handleRestaurantSubmission = (values: IAddRestaurant) => {
    addRestaurant(values);
    setOpen(false);
    fetchRestaurant({ size: 10, page: 0 });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectFile = (data: any) => {
    if (data.current) {
      data.current.click();
    }
  };

  const onChangePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      var file = event.target.files[0];
      formik.setFieldValue("picture", file);
    }
  };

  const onChangeMenu = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      var file = event.target.files[0];

      formik.setFieldValue("menu", file);
    }
  };

  return (
    <>
      <AppButton
        variant="outlined"
        text="Add Restaurant"
        icon={<AddIcon />}
        buttonStyles="bg-red-500 text-blue-500"
        handleClick={handleClickOpen}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        maxWidth="lg"
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>Add Restaurant</DialogTitle>
          <DialogContent className="md:w-[55rem] w-full ">
            <DialogContentText>
              To add a new restaurant please enter details here.
            </DialogContentText>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex gap-2">
              <AppInput
                variant="standard"
                label="Name"
                name="name"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name}
              />
            </div>

            <div className="flex gap-2">
              <AppInput
                variant="standard"
                label="Longitude"
                name="longitude"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.longitude}
                error={formik.errors.longitude}
              />
              <AppInput
                variant="standard"
                label="Latitude"
                name="latitude"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.latitude}
                error={formik.errors.latitude}
              />
            </div>

            <div className="flex gap-2">
              <AppInput
                variant="standard"
                label="City"
                name="city"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.city}
                error={formik.errors.city}
              />
              <AppInput
                variant="standard"
                label="Address"
                name="address"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.address}
                error={formik.errors.address}
              />
            </div>

            <div className="flex gap-2">
              <AppInput
                variant="standard"
                label="Start AM"
                name="startAm"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.startAm}
                error={formik.errors.startAm}
              />
              <AppInput
                variant="standard"
                label="Stop Am"
                name="stopAm"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.stopAm}
                error={formik.errors.stopAm}
              />
            </div>

            <div className="flex gap-2">
              <AppInput
                variant="standard"
                label="Start PM"
                name="startPm"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.startPm}
                error={formik.errors.startPm}
              />
              <AppInput
                variant="standard"
                label="Stop Pm"
                name="stopPm"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.stopPm}
                error={formik.errors.stopPm}
              />
            </div>
            <div className="flex gap-2">
              <AppInput
                variant="standard"
                label="Email"
                name="email"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
              />
              <AppInput
                variant="standard"
                label="Phone"
                name="phone"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.errors.phone}
              />
            </div>
            <AppInput
              variant="standard"
              label="Description"
              name="description"
              inputClass="w-full py-2"
              onChange={formik.handleChange}
              value={formik.values.description}
              error={formik.errors.description}
            />

            <div className="flex gap-2">
              <div>
                <p>Picture</p>
                <input
                  name="picture"
                  type="file"
                  id="file"
                  ref={pictureFile}
                  onChange={onChangePicture.bind(this)}
                />
              </div>

              <div>
                <p>Menu</p>
                <input
                  type="file"
                  id="file"
                  ref={menuFile}
                  onChange={onChangeMenu.bind(this)}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <AppButton
              color="primary"
              variant="contained"
              text="Submit"
              buttonStyles="font-bold "
              handleClick={formik.handleSubmit}
              disabled={!formik.dirty || !formik.isValid || loading}
            />
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
