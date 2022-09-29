import moment from "moment";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthHeader } from "../auth/components/auth-header";
import { useActions } from "../hooks/useBooking";
import { useSelector } from "../hooks/useTypesSelector";

export function BookingSuccess() {
  let { id } = useParams();
  const { getBooking } = useActions();
  const { bookingResponse } = useSelector((state) => state.booking);

  useEffect(() => {
    getBooking(Number(id));
  }, []);
  return (
    <>
      <div className=" h-full w-full flex flex-col justify-center items-center bg-image">
        <p className="text-3xl font-bold text-red-700 mb-2">Foreal</p>
        <div className="flex flex-col gap-y-7">
          <div className="md:w-[35rem] w-full p-8  rounded-xl bg-white">
            <p className="text-xl font-bold">Congratulations!</p>
            <div className="flex flex-col justify-center items-center">
              <img src="/images/booked.png" width="50%" height="50%" />
            </div>
            <p>
              You have successfully boooked a table at{" "}
              <span className="font-bold">{bookingResponse.place_name}</span>
            </p>
            <p className="pb-1">
              <span className="font-bold">Time: </span>{" "}
              {moment(bookingResponse.meeting_time)
                .zone("+0000")
                .format("MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
