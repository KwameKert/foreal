import { Button, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useEffect, useState } from "react";
import { useActions } from "../hooks/useBooking";
import { useSelector } from "../hooks/useTypesSelector";
import { useParams } from "react-router-dom";
import { Participant } from "./components/Participant";
import { ChipParticipant } from "./components/ChipParticipant";
import { MemberStatusRequest, RestaurantPeople } from "./booking.model";
import { ConfirmBooking } from "./components/ConfirmBooking";
import { StatusLabel } from "./components/StatusLabel";

export const RestaurantBooking = () => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState(false);
  let { id } = useParams();
  let decodedArr: Array<string> = atob(String(id)).split(";");
  let decodedStr: string = decodedArr[0];
  let decodedContact: string = decodedArr[1];
  const { getBookingDetails, updateBookingDetails } = useActions();
  const { loading, bookingRequest, error } = useSelector(
    (state) => state.booking
  );

  const handleDialogRequest = (response: boolean) => {
    setOpen(true);
    setResponse(response);
  };
  function padTo2Digits(num: number) {
    return num?.toString().padStart(2, "0");
  }
  const getDate = () => {
    let dateStr = String(bookingRequest.meeting_time);
    let date: Date = new Date(dateStr.toString());
    return (
      [
        date?.getFullYear(),
        padTo2Digits(date?.getMonth() + 1),
        padTo2Digits(date?.getDate()),
      ].join("-") +
      " " +
      [
        padTo2Digits(date?.getHours()),
        padTo2Digits(date?.getMinutes()),
        padTo2Digits(date?.getSeconds()),
      ].join(":")
    );
  };

  const handleDialogResponse = (response: boolean) => {
    setOpen(false);
    updateStatus(response ? 2 : 3);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateStatus = (status: number) => {
    let data: MemberStatusRequest = {
      status,
      contact: decodedContact,
    };
    updateBookingDetails(Number(decodedStr), data);
    bookingRequest.restaurant_approved = status;

    //  getBookingDetails(Number(decodedStr));
  };

  const acceptInvitationButton = () => {
    if (bookingRequest) {
      if (
        bookingRequest.restaurant_approved == 1 ||
        bookingRequest.restaurant_approved == 3
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
        bookingRequest.restaurant_approved == 2 ||
        bookingRequest.restaurant_approved == 1
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

  const getMessage = () => {
    if (bookingRequest !== undefined) {
      switch (bookingRequest?.restaurant_approved) {
        case 2:
          return (
            <p className=" text-lg ">
              <span className="text-green-600	">Accepted invitation 😀.</span>{" "}
              You have successfully accepted invitation to{" "}
              <span className="font-bold">{bookingRequest.title}.</span>
            </p>
          );
        case 3:
          return (
            <p className=" text-lg ">
              <span className="text-red-500">Declined invitation 😢.</span> You
              have successfully declined invitation to{" "}
              <span className="font-bold">{bookingRequest.title}.</span>
            </p>
          );
        default:
          return (
            <p className="text-xl font-medium	text-center text-slate-700	 ">
              Hello 👋🏻, you have received a new booking request. See below for
              details
            </p>
          );
      }
    }
  };

  useEffect(() => {
    getBookingDetails(Number(decodedStr));
  }, []);
  return (
    <>
      <ConfirmBooking
        open={open}
        handleClose={handleClose}
        handleResponse={handleDialogResponse}
        response={response}
      />
      {!loading && (
        <div className=" h-full w-full flex flex-col justify-center items-center bg-image">
          <div className="flex flex-col gap-y-7">
            <div className="md:w-[35rem] w-full p-8  rounded-xl bg-white">
              {error && (
                <div className=" text-lg text-red-500">
                  Ooops an error occurred
                </div>
              )}
              {bookingRequest && (
                <>
                  <div className="flex gap-x-2">
                    <Avatar
                      src={bookingRequest.place_image}
                      sx={{ width: 40, height: 35 }}
                    />
                    <p className="text-2xl font-semibold flex justify-center">
                      {bookingRequest.place_name}
                    </p>
                  </div>
                  <Divider className="py-1" />

                  <div className="p-3">
                    <div className="py-3">{getMessage()}</div>

                    <p className="pb-1">
                      <span className="font-bold">Event: </span>{" "}
                      {bookingRequest.title}
                    </p>
                    <p className="pb-1">
                      <span className="font-bold">Time: </span> {getDate()}
                    </p>
                    <p className="pb-1">
                      <span className="font-bold"> Organizer: </span>{" "}
                      {bookingRequest.creator?.name}
                    </p>

                    <p className="pb-1">
                      <span className="font-bold"> Number of People: </span>{" "}
                      {bookingRequest.party_size_adults}
                    </p>
                    {/* <div>
   <p className="text-neutral-400 text-sm">Participants</p>
   <div className="justify-content-center">
     {bookingRequest.people?.map(
       (participant: RestaurantPeople) => (
         <ChipParticipant
           key={participant.name + Math.random()}
           name={participant.name}
         />
       )
     )}
   </div>
 </div> */}
                  </div>

                  <div className="flex justify-center mt-3 gap-3">
                    {acceptInvitationButton()}
                    {declineInvitationButton()}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
