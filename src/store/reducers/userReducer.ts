import { ActionType } from "../action-types";
import { Action } from "../actions/user";
import { UserDetails } from "../../user/user.model";

interface State {
  user: UserDetails;
  loading: boolean;
  error: string | null;
}
const initialState = {
  user: {},
  loading: false,
  error: null,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
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
