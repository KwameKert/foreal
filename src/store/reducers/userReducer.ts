import { ActionType, AuthActionType } from "../action-types";
import { Action } from "../actions/user";
import { AuthAction } from "../actions/auth";
import { UserDetails } from "../../user/user.model";

interface UserState {
  user: UserDetails;
  loading: boolean;
  error: string | null;
}
const initialState = {
  user: {},
  loading: false,
  error: null,
};

const reducer = (
  state: UserState = initialState,
  action: Action | AuthAction
): UserState => {
  switch (action.type) {
    case AuthActionType.USER_IS_LOGGING_IN:
      return {
        ...state,
        loading: true,
      };
    case AuthActionType.USER_AUTH_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case ActionType.SET_USER_DETAILS:
      return {
        loading: false,
        error: null,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
