import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";
import { useActions } from "../hooks/useBooking";
import { useSelector } from "../hooks/useTypesSelector";
import { Participant } from "./components/Participant";

import { useParams } from "react-router-dom";
import { ConfirmBooking } from "./components/ConfirmBooking";
import { StatusLabel } from "./components/StatusLabel";
import { MemberStatusRequest } from "./booking.model";
import { Person } from "../store/reducers/bookingReducer";

export function Invitation() {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState(false);
  const { getInvitation, updateInvitation } = useActions();
  let { id } = useParams();
  let decodedArr: Array<string> = atob(String(id)).split(";");
  let decodedStr: string = decodedArr[0];
  let decodedContact: string = decodedArr[1];
  const { loading, invitation } = useSelector((state) => state.booking);

  const handleDialogRequest = (response: boolean) => {
    setOpen(true);
    setResponse(response);
  };

  const handleDialogResponse = (response: boolean) => {
    setOpen(false);
    updateStatus(response ? 2 : 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUserDetails = () => {
    let user: Person = invitation.people?.find((person) => {
      if (person.member_phone_number === decodedContact) {
        return person;
      } else if (person.member_email === decodedContact) {
        return person;
      }
    }) as Person;

    return user;
  };

  const getMessage = () => {
    let user = getUserDetails();
    if (user !== undefined) {
      switch (user?.bmstatus) {
        case 1:
          return (
            <p className=" text-2xl ">
              Reply to{" "}
              <span className="font-bold">{invitation.creator_name}'s</span> and
              get ready for{" "}
              <span className="font-bold">{invitation.title}</span>
            </p>
          );
        case 2:
          return (
            <p className=" text-2xl ">
              Accepted invitation 😀. You have successfully accepted{" "}
              <span className="font-bold">{invitation.creator_name}'s</span>{" "}
              invitation to{" "}
              <span className="font-bold">{invitation.title}</span>
            </p>
          );
        case 3:
          return (
            <p className=" text-2xl ">
              Declined invitation 😢. You have successfully declined{" "}
              <span className="font-bold">{invitation.creator_name}'s</span>{" "}
              invitation to{" "}
              <span className="font-bold">{invitation.title}</span>
            </p>
          );
      }
    }
  };

  const updateStatus = (status: Number) => {
    let data: MemberStatusRequest = {
      status,
      contact: decodedContact,
    };
    updateInvitation(Number(decodedStr), data);
    getInvitation(Number(decodedStr));
  };
  const getDate = () => {
    let date = String(invitation.meeting_time);
    return new Date(date.toString()).toString();
  };
  useEffect(() => {
    getInvitation(Number(decodedStr));
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
              <div className="flex justify-end">
                <StatusLabel
                  restaurant_approved={invitation.restaurant_approved || 0}
                />
              </div>

              <div className=" text-center mb-2">
                <p className=" text-2xl ">Hi 👋🏻</p>
                {getMessage()}
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Participants</p>
                <div className="justify-content-center">
                  {invitation.people?.map((participant: any) => (
                    <Participant
                      key={participant.member_email + Math.random()}
                      booking_member_id={participant.booking_member_id}
                      member_email={participant.member_email}
                      member_name={participant.member_name}
                      bmstatus={participant.bmstatus}
                      username={participant.username}
                      user_image={participant.user_image}
                      member_phone_number={participant.member_phone_number}
                    />
                  ))}
                </div>
                <div className="mt-3">
                  <p className="text-sm">
                    <AccessTimeIcon className="text-red-600	" />
                    {getDate()}
                  </p>
                  <p className="font-bold">
                    <LocationOnIcon className="text-red-600" />
                    {invitation.place?.place_name},{" "}
                    {invitation.place?.place_city}
                  </p>

                  {getUserDetails()?.bmstatus === 1 && (
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
                  )}
                </div>
              </div>
            </div>
            <div className="mt-7 grid justify-items-center">
              <p className="text-3xl text-red-500	font-extrabold">foreal</p>
              <p className="text-gray-700	font-thin text-xs	">www.foreal.app</p>
              <Divider variant="middle" />
              <div>
                <p className="text-gray-700	 text-sm mt-6	">
                  Download our app for your Android or IOS device
                </p>
                <div className="flex gap-6 justify-center mt-3">
                  <img
                    src="/images/apple.png"
                    alt="apple-store"
                    className="w-28"
                  />
                  <img
                    src="/images/play.png"
                    alt="google-playstore"
                    className="w-28"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
