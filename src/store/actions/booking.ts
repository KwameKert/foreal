import { BookingActionType } from "../action-types/booking";

interface InvitationSetAction {
  type: BookingActionType.SET_INVITATION;
  payload: any;
}

interface InvitationUpdateAction {
  type: BookingActionType.SET_INVITATION;
  payload: any;
}

interface InvitationStartAction {
  type: BookingActionType.START_LOAD_INVITATION;
}
interface InvitationEndAction {
  type: BookingActionType.END_LOAD_INVITATION;
}
export type Action =
  | InvitationSetAction
  | InvitationStartAction
  | InvitationEndAction
  | InvitationUpdateAction;
