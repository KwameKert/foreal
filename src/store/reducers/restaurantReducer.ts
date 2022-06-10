import { Action } from "../actions/restaurant";
import { RestaurantActionType } from "../action-types";

interface RestaurantState {
  restaurants: any;
  loading: boolean;
  error: string | null;
}

const initialState = {
  restaurants: {},
  loading: false,
  error: null,
};

const reducer = (
  state: RestaurantState = initialState,
  action: Action
): RestaurantState => {
  switch (action.type) {
    case RestaurantActionType.START_LOAD_RESTAURANT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RestaurantActionType.SET_RESTAURANT_LIST:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      };
    case RestaurantActionType.END_LOAD_RESTAURANT:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
