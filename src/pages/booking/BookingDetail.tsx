import { Avatar, Button, Divider } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppButton } from "../../core/components/AppButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";
import { ConfirmBooking } from "../../bookings/components/ConfirmBooking";
import { MemberStatusRequest } from "../../bookings/booking.model";
import { useActions } from "../../hooks/useBooking";
import { StatusLabel } from "../../bookings/components/StatusLabel";
import { useSelector } from "../../hooks/useTypesSelector";

type BookingDetailProps = {};

export const BookingDetail: FunctionComponent<BookingDetailProps> = ({}) => {
  const navigate = useNavigate();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState(false);
  const { getBookingDetails, updateBookingDetails } = useActions();
  const { bookingRequest } = useSelector((state) => state.booking);
  const handleDialogRequest = (response: boolean) => {
    setOpen(true);
    setResponse(response);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const acceptInvitationButton = () => {
    if (bookingRequest) {
      if (
        bookingRequest.restaurant_approved === 1 ||
        bookingRequest.restaurant_approved === 3
      ) {
        return (
          <Button
            variant="contained"
            color="success"
            onClick={() => handleDialogRequest(true)}
          >
            Accept
          </Button>
        );
      } else {
        return <></>;
      }
    }
  };

  const declineInvitationButton = () => {
    if (bookingRequest) {
      if (
        bookingRequest.restaurant_approved === 2 ||
        bookingRequest.restaurant_approved === 1
      ) {
        return (
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDialogRequest(false)}
          >
            Decline
          </Button>
        );
      } else {
        return <></>;
      }
    }
  };

  const handleDialogResponse = (response: boolean) => {
    setOpen(false);
    updateStatus(response ? 2 : 3);
  };

  const updateStatus = (status: number) => {
    let data: MemberStatusRequest = {
      status,
      contact: bookingRequest.creator?.phone,
    };
    updateBookingDetails(Number(bookingRequest.booking_id), data);
    // bookingRequest.restaurant_approved = status;

    //  getBookingDetails(Number(decodedStr));
  };

  useEffect(() => {
    getBookingDetails(Number(params.id));
  }, []);

  return (
    <>
      <ConfirmBooking
        open={open}
        handleClose={handleClose}
        handleResponse={handleDialogResponse}
        response={response}
      />
      <AppButton
        color="primary"
        size="small"
        text="back"
        icon={<ArrowBackIcon />}
        buttonStyles="bg-red-500 text-gray-500 "
        handleClick={() => navigate(-1)}
      />
      <div className="flex justify-end mt-3 gap-3">
        {acceptInvitationButton()}
        {declineInvitationButton()}
      </div>
      <div className="p-4">
        <div className="flex">
          <Avatar alt="User name" src={bookingRequest?.creator?.image} />
          <p className="p-2 font-semibold	">{bookingRequest?.creator?.name}</p>
        </div>
        <Divider className="py-3" />

        <div className="flex flex-row">
          <div className="basis-1/2">
            <p className="font-bold mt-3">User Information</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="py-4">
                <p className="text-slate-500">User name</p>
                <p className="font-semibold">{bookingRequest?.creator?.name}</p>
              </div>
              <div className="py-4">
                <p className="text-slate-500">User phone</p>
                <p className="font-semibold">
                  {bookingRequest?.creator?.phone}
                </p>
              </div>
            </div>
            <Divider className="py-3" />
            <p className="font-bold mt-3">Invitation Information</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="py-4">
                <p className="text-slate-500">Meeting time </p>
                <p className="font-semibold">
                  {moment(booking.meeting_time)
                    .zone("+0000")
                    .format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </div>
              {/* <div className="py-4">
                <p className="text-slate-500">Created at</p>
                <p className="font-semibold">
                  {moment(bookingRequest., "YYYYMMDD").fromNow()}
                </p>
              </div> */}

              <div className="py-4">
                <p className="text-slate-500">Status </p>
                <StatusLabel
                  restaurant_approved={Number(
                    bookingRequest.restaurant_approved
                  )}
                />
              </div>
            </div>
          </div>
          <Divider orientation="vertical" flexItem className="py-2" />

          <div className="basis-1/2 px-2">
            <p className="font-bold mt-3">Restaurant Information</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="py-4">
                <p className="text-slate-500">Name</p>
                <p className="font-semibold">{bookingRequest.place_name}</p>
              </div>
              {/* <div className="py-4">
                <p className="text-slate-500">Phone</p>
                <p className="font-semibold">{bookingRequest.place_name}</p>
              </div> */}
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
              <div className="py-4">
                <p className="text-slate-500">City</p>
                <p className="font-semibold">{bookingRequest.}</p>
              </div>
              <div className="py-4">
                <p className="text-slate-500">Email</p>
                <p className="font-semibold">{bookingRequest.pl}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
