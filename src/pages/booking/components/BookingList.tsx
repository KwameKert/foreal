import { FunctionComponent } from "react";
import { Booking } from "../booking.model";
import moment from "moment";

import {
  TableCell,
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StatusLabel } from "../../../bookings/components/StatusLabel";

type InvitationListProps = {
  bookings?: Booking[];
};
export const BookingList: FunctionComponent<InvitationListProps> = ({
  bookings,
}) => {
  const navigate = useNavigate();
  const viewInvitationDetails = (booking: Booking) => {
    navigate(`/app/booking/${booking.booking_id}`, {
      state: booking,
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <p className="font-bold">User</p>
            </TableCell>
            <TableCell align="center">
              <p className="font-bold">Title</p>
            </TableCell>
            <TableCell align="center">
              <p className="font-bold">Booking Time</p>
            </TableCell>
            <TableCell align="center">
              <p className="font-bold">Status</p>
            </TableCell>
            <TableCell align="center">
              <p className="font-bold">Restaurant</p>
            </TableCell>

            <TableCell align="center">
              <p className="font-bold">Created At</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings?.map((booking) => (
            <TableRow
              hover
              key={booking.booking_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => viewInvitationDetails(booking)}
            >
              <TableCell align="center">
                <div className="flex">
                  <Avatar alt="User name" src={booking.creator_pix} />
                  <p className="p-2 font-semibold	">{booking.creator_name}</p>
                </div>
              </TableCell>
              <TableCell align="center">
                <p className="font-semibold">{booking.title}</p>
              </TableCell>
              <TableCell align="center">
                <p className="font-semibold">
                  {moment(booking.meeting_time).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </p>
              </TableCell>
              <TableCell align="center">
                <StatusLabel
                  restaurant_approved={Number(booking.restaurant_approved)}
                />
              </TableCell>
              <TableCell align="center">
                <p className="font-semibold">{booking.place_name}</p>
              </TableCell>

              <TableCell align="center">
                <p className="font-semibold">
                  {moment(booking.meeting_time, "YYYYMMDD").fromNow()}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
