import { Action } from "../actions/booking";
import { BookingActionType } from "../action-types";
import {
  Booking,
  BookingResponse,
  Invitation,
} from "../../bookings/booking.model";
import { BookingList } from "../../pages/booking/booking.model";
import { Moment } from "../../bookings/moment.model";

interface BookState {
  invitation: Invitation;
  bookingList: BookingList;
  bookingResponse: BookingResponse;
  bookingRequest: Booking;
  bookingId: number | string;
  moment: Moment;
  loading: boolean;
  bookingSuccessful: boolean;
  error: string | null;
}

const initialState = {
  invitation: {},
  bookingList: {},
  bookingRequest: {},
  moment: {},
  bookingResponse: {},
  bookingId: "",
  loading: false,
  bookingSuccessful: false,
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

    case BookingActionType.ADD_BOOKING:
      return {
        ...state,
        bookingSuccessful: true,
        bookingId: action.payload,
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
    case BookingActionType.SET_MOMENT:
      return {
        ...state,
        moment: action.payload,
        bookingSuccessful: false,
        loading: false,
      };

    case BookingActionType.SET_BOOKING_RESPONSE:
      return {
        ...state,
        bookingResponse: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
