import { AppButton } from "../../../core/components/AppButton";
import AddIcon from "@mui/icons-material/Add";
import React, { FunctionComponent, useRef } from "react";
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
import { Restaurant } from "../restaurant.model";
import { AppSelect } from "../../../core/components/AppSelect";
import { categories } from "../../../utils/data";

type RestaurantListCardProps = {
  restaurant?: Restaurant;
  onDone?: any;
  label?: string;
};
export const AddRestaurant: FunctionComponent<RestaurantListCardProps> = ({
  restaurant,
  onDone,
  label = "Add Restaraunt",
}) => {
  const theme = useTheme();
  const { loading, error } = useSelector((state) => state.restaurant);
  const { addRestaurant, fetchRestaurant, updateRestaurant } = useActions();

  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = React.useState(false);
  const pictureFile = useRef<any>(null);
  const menuFile = useRef<any>(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    longitude: Yup.string().required("Longitude is required"),
    latitude: Yup.string().required("Latitude is required"),
    description: Yup.string().required("Description is required"),
    stopPm: Yup.number().required("Stop pm is required"),
    stopAm: Yup.number().required("Stop am is required"),
    startPm: Yup.number().required("Start pm is required"),
    startAm: Yup.number().required("Start am is required"),
  });

  const initialValues = {
    id: restaurant?.id,
    name: restaurant?.name,
    categoryId: restaurant?.categoryId,
    manager: "1",
    longitude: restaurant?.longitude,
    latitude: restaurant?.latitude,
    reservation: restaurant?.reservation,
    startAm: restaurant?.startAm,
    startPm: restaurant?.startPm,
    stopAm: restaurant?.stopAm,
    stopPm: restaurant?.stopPm,
    closingDay: "0",
    phone: restaurant?.phone,
    email: restaurant?.email,
    description: restaurant?.description,
    profilePicture: restaurant?.profileImage,
    menu: restaurant?.menu,
  };
  const formik = useFormik<Restaurant>({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleRestaurantSubmission(values);
    },
  });
  const handleRestaurantSubmission = (values: Restaurant) => {
    if (!values.email) {
      values.email = "marco@foreal.app";
    }
    if (!values.phone) {
      values.phone = "+393467746393";
    }
    if (values.id) {
      updateRestaurant(values);
    } else {
      addRestaurant(values);
    }
    if (!error) {
      setOpen(false);
      onDone();
    }
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
        text={label}
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
          <DialogTitle>{label}</DialogTitle>
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
              <AppSelect
                list={categories}
                variant="standard"
                label="Category"
                name="categoryId"
                inputClass="w-full py-2"
                onChange={formik.handleChange}
                value={formik.values.categoryId}
                error={formik.errors.categoryId}
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
            <AppSelect
              list={[
                { label: "True", value: 1 },
                { label: "False", value: 0 },
              ]}
              variant="standard"
              label="Reservation"
              name="reservation"
              inputClass="w-full py-2"
              onChange={formik.handleChange}
              value={formik.values.reservation}
              error={formik.errors.reservation}
            />
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
