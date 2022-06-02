import { ActionType } from "../action-types";
import { UserDetails } from "../../user/user.model";

interface setUserAction {
  type: ActionType.SET_USER_DETAILS;
  payload: UserDetails;
}

export type Action = setUserAction;
