import { Dispatch } from "react";
import { RestaurantActionType } from "../action-types";
import { Action } from "../actions/restaurant";
import axios from "../../service/httpclient";
import { RestaurantSearchRequest } from "../../pages/restaurant/restaurant.model";
import {
  FETCH_RESTAURANT_URL,
  UPLOAD_RESTAURANT_EXCEL,
} from "../../service/url";
import { convertObjectToQueryString } from "../../utils/generalHelpters";

export const uploadRestaurantExcel =
  (file: File) => (dispatch: Dispatch<Action>) => {
    //do something
    let formData = new FormData();
    formData.append("excel_file", file);

    dispatch({
      type: RestaurantActionType.START_LOAD_RESTAURANT,
    });
    axios
      .post(`${UPLOAD_RESTAURANT_EXCEL}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
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

export const fetchRestaurant =
  (data: RestaurantSearchRequest) => (dispatch: Dispatch<Action>) => {
    const queryString = convertObjectToQueryString(data);
    dispatch({
      type: RestaurantActionType.START_FETCH_RESTAURANT,
    });
    axios
      .get(`${FETCH_RESTAURANT_URL}?${queryString}`)
      .then((response: any) => {
        console.log("fetching data here");
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
