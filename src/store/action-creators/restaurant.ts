import { Dispatch } from "react";
import { RestaurantActionType } from "../action-types";
import { Action } from "../actions/restaurant";
import axios from "../../service/httpclient";
import { RestaurantSearchRequest } from "../../pages/restaurant/restaurant.model";
import {
  FETCH_RESTAURANT_URL,
  UPLOAD_RESTAURANT_EXCEL,
  ADMIN_ADD_RESTAURANT,
  ADMIN_UPDATE_RESTAURANT,
} from "../../service/url";
import { convertObjectToQueryString } from "../../utils/generalHelpters";
import { toast } from "react-toastify";

export const addRestaurant = (data: any) => (dispatch: Dispatch<Action>) => {
  let formData = new FormData();
  for (var key in data) {
    formData.append(key, data[key]);
  }
  dispatch({
    type: RestaurantActionType.START_LOAD_RESTAURANT,
  });
  axios
    .post(`${ADMIN_ADD_RESTAURANT}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response: any) => {
      toast.success("Restaurant added successfully");
      dispatch({
        type: RestaurantActionType.END_LOAD_RESTAURANT,
      });
    })
    .catch((err) => {
      dispatch({
        type: RestaurantActionType.END_LOAD_RESTAURANT,
        payload: err.message,
      });
    });
};


export const updateRestaurant = (data: any) => (dispatch: Dispatch<Action>) => {
  let formData = new FormData();
  for (var key in data) {
    formData.append(key, data[key]);
  }
  dispatch({
    type: RestaurantActionType.START_LOAD_RESTAURANT,
  });
  axios
    .put(`${ADMIN_UPDATE_RESTAURANT}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response: any) => {
      toast.success("Restaurant updated successfully");
      dispatch({
        type: RestaurantActionType.END_LOAD_RESTAURANT,
      });
    })
    .catch((err) => {
      dispatch({
        type: RestaurantActionType.END_LOAD_RESTAURANT,
        payload: err.message,
      });
    });
};

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
          type: RestaurantActionType.END_LOAD_RESTAURANT,
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

export const fetchRestaurantById =
  (id: number) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: RestaurantActionType.START_FETCH_RESTAURANT,
    });
    axios
      .get(`${FETCH_RESTAURANT_URL}/${id}`)
      .then((response: any) => {
        dispatch({
          type: RestaurantActionType.SET_RESTAURANT_DETAILS,
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
