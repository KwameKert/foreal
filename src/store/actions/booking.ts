import { BookingActionType } from "../action-types/booking";

interface InvitationSetAction {
  type: BookingActionType.SET_INVITATION;
  payload: any;
}

interface BoookingAddBooking {
  type: BookingActionType.ADD_BOOKING;
  payload: any;
}

interface InvitationUpdateAction {
  type: BookingActionType.SET_INVITATION;
  payload: any;
}

interface SetBookingAction {
  type: BookingActionType.SET_BOOKING;
  payload: any;
}

interface SetAdminInvitationAction {
  type: BookingActionType.SET_ADMIN_INVITATION;
  payload: any;
}
interface InvitationStartAction {
  type: BookingActionType.START_LOAD_INVITATION;
}
interface InvitationEndAction {
  payload: any;
  type: BookingActionType.END_LOAD_INVITATION;
}

interface UpdateBookingAction {
  payload: any;
  type: BookingActionType.UPDATE_BOOKING;
}

interface SetMoment {
  payload: any;
  type: BookingActionType.SET_MOMENT;
}

interface GetMoment {
  payload: any;
  type: BookingActionType.GET_MOMENT;
}

interface SetBookingResponse {
  payload: any;
  type: BookingActionType.SET_BOOKING_RESPONSE;
}

export type Action =
  | InvitationSetAction
  | InvitationStartAction
  | InvitationEndAction
  | InvitationUpdateAction
  | SetBookingAction
  | UpdateBookingAction
  | GetMoment
  | SetMoment
  | BoookingAddBooking
  | SetBookingResponse
  | SetAdminInvitationAction;
