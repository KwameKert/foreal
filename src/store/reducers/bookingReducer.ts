import { Action } from "../actions/booking";
import { BookingActionType } from "../action-types";
import { Booking, Invitation } from "../../bookings/booking.model";

interface BookState {
  invitation: Invitation;
  bookingRequest: Booking;
  loading: boolean;
  error: string | null;
}

const initialState = {
  invitation: {},
  bookingRequest: {},
  loading: false,
  error: null,
};

const reducer = (
  state: BookState = initialState,
  action: Action
): BookState => {
  switch (action.type) {
    case BookingActionType.START_LOAD_INVITATION:
      return {
        ...state,
        loading: true,
      };
    case BookingActionType.SET_INVITATION:
      return {
        ...state,
        loading: false,
        invitation: action.payload,
      };
    case BookingActionType.SET_BOOKING:
      return {
        ...state,
        bookingRequest: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
