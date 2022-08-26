import { Action } from "../actions/restaurant";
import { RestaurantActionType } from "../action-types";
import {
  Restaurant,
  RestaurantList,
} from "../../pages/restaurant/restaurant.model";

interface RestaurantState {
  restaurants: RestaurantList;
  restaurant: Restaurant;
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: RestaurantState = {
  restaurants: {},
  restaurant: {},
  loading: false,
  error: null,
  success: false,
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
    case RestaurantActionType.SET_RESTAURANT_DETAILS:
      return {
        ...state,
        loading: false,
        restaurant: action.payload,
      };
    case RestaurantActionType.END_LOAD_RESTAURANT:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RestaurantActionType.START_FETCH_RESTAURANT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RestaurantActionType.END_FETCH_RESTAURANT:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
