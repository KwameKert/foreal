import { RestaurantActionType } from "../action-types/restaurant";

interface RestaurantSetListAction {
  type: RestaurantActionType.SET_RESTAURANT_LIST;
  payload: any;
}
interface RestaurantSetDetailsAction {
  type: RestaurantActionType.SET_RESTAURANT_DETAILS;
  payload: any;
}

interface RestaurantStartLoadAction {
  type: RestaurantActionType.START_LOAD_RESTAURANT;
}

interface RestaurantEndLoadAction {
  type: RestaurantActionType.END_FETCH_RESTAURANT;
  payload?: any;
}

interface RestaurantStartFetchAction {
  type: RestaurantActionType.START_FETCH_RESTAURANT;
}

interface RestaurantEndFetchAction {
  type: RestaurantActionType.END_LOAD_RESTAURANT;
  payload?: any;
}

interface RestaurantUploadLoadAction {
  type: RestaurantActionType.UPLOAD_RESTAURANT_FILE;
}

export type Action =
  | RestaurantSetListAction
  | RestaurantStartLoadAction
  | RestaurantEndLoadAction
  | RestaurantUploadLoadAction
  | RestaurantStartFetchAction
  | RestaurantEndFetchAction
  | RestaurantSetDetailsAction;
