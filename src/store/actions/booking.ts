import { BookingActionType } from "../action-types/booking";

interface InvitationSetAction {
  type: BookingActionType.SET_INVITATION;
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
export type Action =
  | InvitationSetAction
  | InvitationStartAction
  | InvitationEndAction
  | InvitationUpdateAction
  | SetBookingAction
  | UpdateBookingAction;
