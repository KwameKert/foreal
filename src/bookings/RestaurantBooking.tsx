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
  const { loading, bookingRequest } = useSelector((state) => state.booking);

  const handleDialogRequest = (response: boolean) => {
    setOpen(true);
    setResponse(response);
  };
  function padTo2Digits(num: number) {
    return num?.toString().padStart(2, "0");
  }
  const getDate = () => {
    console.log("people", bookingRequest.people);
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
    getBookingDetails(Number(decodedStr));
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
              <StatusLabel
                restaurant_approved={bookingRequest.restaurant_approved || 0}
              />

              <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                  <Avatar
                    src={bookingRequest.place_image}
                    sx={{ width: 76, height: 76 }}
                  />
                </div>
                <p className="text-2xl font-semibold flex justify-center">
                  {bookingRequest.place_name}
                </p>
              </div>
              <Divider className="py-1" />
              <div className="p-3">
                <p className="pb-1">
                  <span className="font-bold">Event: </span>{" "}
                  {bookingRequest.title}
                </p>
                <p className="pb-1">
                  <span className="font-bold">Time: </span> {getDate()}
                </p>
                <p className="pb-1">
                  <span className="font-bold"> Organizer: </span> Kertice
                </p>
                <div>
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
                </div>
              </div>

              <div className="flex justify-center mt-3 gap-3">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleDialogRequest(true)}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDialogRequest(false)}
                >
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
