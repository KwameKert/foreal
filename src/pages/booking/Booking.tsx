import React, { useEffect, useRef, useState } from "react";
import { useActions } from "../../hooks/useBooking";
import { useSelector } from "../../hooks/useTypesSelector";
import Pagination from "@mui/material/Pagination";

import { BookingList } from "./components/BookingList";
import { Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const PER_PAGE = 10;

export const Booking = () => {
  const { getAllBookings } = useActions();
  const { bookingList } = useSelector((state) => state.booking);
  const bookingIN = useSelector((state) => state.booking);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getAllBookings({ size: PER_PAGE, page: currentPage - 1 });
  }, []);
  const handlePageClick = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    getAllBookings({ size: 10, page: value - 1 });
  };
  const getPageCount = () => {
    if (Number(bookingList.total) > 0) {
      return Math.ceil(Number(bookingList.total) / PER_PAGE);
    }
  };
  return (
    <>
      <div className="flex flex-row justify-between mb-7">
        <div className="self-center ">
          <p className="text-2xl font-semibold">
            Bookings
            <Tooltip title="More">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </p>
          <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nisi provident numquam labore, vel Reiciendis nisi provident numquam
            labore, vel
          </p>
        </div>
      </div>
      <BookingList bookings={bookingList.bookings} />
      <div className="flex justify-center py-2">
        <Pagination
          count={getPageCount()}
          page={currentPage}
          onChange={handlePageClick}
        />
      </div>
    </>
  );
};
