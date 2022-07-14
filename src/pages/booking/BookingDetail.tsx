import { Avatar, Divider } from "@mui/material";
import { FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppButton } from "../../core/components/AppButton";
import { Booking } from "./booking.model";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";

type BookingDetailProps = {};

export const BookingDetail: FunctionComponent<BookingDetailProps> = ({}) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const booking = state as Booking;
  return (
    <>
      <AppButton
        color="primary"
        size="small"
        text="back"
        icon={<ArrowBackIcon />}
        buttonStyles="bg-red-500 text-gray-500 "
        handleClick={() => navigate(-1)}
      />
      <div className="p-4">
        <div className="flex">
          <Avatar alt="User name" src={booking.creator_pix} />
          <p className="p-2 font-semibold	">{booking.creator_name}</p>
        </div>
        <Divider className="py-3" />

        <div className="flex flex-row">
          <div className="basis-1/2">
            <p className="font-bold mt-3">User Information</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="py-4">
                <p className="text-slate-500">User name</p>
                <p className="font-semibold">{booking.creator_name}</p>
              </div>
              <div className="py-4">
                <p className="text-slate-500">User phone</p>
                <p className="font-semibold">{booking.creator_phone}</p>
              </div>
            </div>
            <Divider className="py-3" />
            <p className="font-bold mt-3">Invitation Information</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="py-4">
                <p className="text-slate-500">Meeting time </p>
                <p className="font-semibold">
                  {moment(booking.meeting_time).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </p>
              </div>
              <div className="py-4">
                <p className="text-slate-500">Created at</p>
                <p className="font-semibold">
                  {moment(booking.created_at, "YYYYMMDD").fromNow()}
                </p>
              </div>
            </div>
          </div>
          <Divider orientation="vertical" flexItem className="py-2" />

          <div className="basis-1/2 px-2">
            <p className="font-bold mt-3">Restaurant Information</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="py-4">
                <p className="text-slate-500">Name</p>
                <p className="font-semibold">{booking.place_name}</p>
              </div>
              <div className="py-4">
                <p className="text-slate-500">Phone</p>
                <p className="font-semibold">{booking.place_phone}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="py-4">
                <p className="text-slate-500">City</p>
                <p className="font-semibold">{booking.place_city}</p>
              </div>
              <div className="py-4">
                <p className="text-slate-500">Email</p>
                <p className="font-semibold">{booking.place_email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
