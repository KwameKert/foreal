import { Action } from "../actions/booking";
import { BookingActionType } from "../action-types";

export interface Place {
  place_id: number;
  place_name: string;
  place_latitude: number;
  place_longitude: number;
  place_city: string;
  place_image: string;
}

export interface Person {
  booking_member_id: number;
  member_email: string;
  member_name: string;
  bmstatus: number;
  member_phone_number: string;
  username: string;
  user_image: string;
}

export interface Invitation {
  booking_id?: number;
  title?: string;
  meeting_time?: Date;
  moment_creator?: number;
  moment_id?: number;
  booked_by?: number;
  status?: number;
  expired?: number;
  restaurant_approved?: number;
  creator_name?: any;
  place?: Place;
  people?: Person[];
}

interface BookState {
  invitation: Invitation;
  loading: boolean;
  error: string | null;
}

const initialState = {
  invitation: {},
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
    case BookingActionType.START_LOAD_INVITATION:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
