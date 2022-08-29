import { Action } from "../actions/booking";
import { BookingActionType } from "../action-types";
import { Booking, Invitation } from "../../bookings/booking.model";
import { BookingList } from "../../pages/booking/booking.model";

interface BookState {
  invitation: Invitation;
  bookingList: BookingList;
  bookingRequest: Booking;
  loading: boolean;
  error: string | null;
}

const initialState = {
  invitation: {},
  bookingList: {},
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
    case BookingActionType.SET_ADMIN_INVITATION:
      return {
        ...state,
        loading: false,
        bookingList: action.payload,
      };
    case BookingActionType.SET_BOOKING:
      return {
        ...state,
        bookingRequest: action.payload,
        loading: false,
      };

    case BookingActionType.UPDATE_BOOKING:
      return {
        ...state,
        bookingRequest: {
          ...state.bookingRequest,
          restaurant_approved: action.payload.value,
        },
        loading: false,
      };
    case BookingActionType.END_LOAD_INVITATION:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
