import { Dispatch } from "react";
import { RestaurantActionType } from "../action-types";
import { Action } from "../actions/restaurant";
import axios from "../../service/httpclient";

export const uploadRestaurantExcel =
  (file: File) => (dispatch: Dispatch<Action>) => {
    //do something
    dispatch({
      type: RestaurantActionType.START_LOAD_RESTAURANT,
    });
    axios
      .get(`/plan/`)
      .then((response: any) => {
        dispatch({
          type: RestaurantActionType.SET_RESTAURANT_LIST,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: RestaurantActionType.END_LOAD_RESTAURANT,
          payload: err.message,
        });
      });
  };
