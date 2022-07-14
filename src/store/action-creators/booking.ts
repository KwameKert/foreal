import { Dispatch } from "react";
import { BookingActionType } from "../action-types";
import { Action } from "../actions/booking";
import axios from "../../service/httpclient";
import {
  ADMIN_FETCH_INVITATION,
  getUserUpdateInvitation,
  RESTAURANT_INVITATION,
  USER_INVITATION,
} from "../../service/url";
import { MemberStatusRequest } from "../../bookings/booking.model";
import { BookingSearchRequest } from "../../pages/booking/booking.model";
import { convertObjectToQueryString } from "../../utils/generalHelpters";

export const getInvitation = (id: Number) => (dispatch: Dispatch<Action>) => {
  //do something
  dispatch({
    type: BookingActionType.START_LOAD_INVITATION,
  });
  axios
    .get(`${USER_INVITATION}/${id}`)
    .then((response: any) => {
      dispatch({
        type: BookingActionType.SET_INVITATION,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log("error caught here");
      dispatch({
        type: BookingActionType.END_LOAD_INVITATION,
        payload: err.message,
      });
    });
};

export const getAllBookings =
  (data: BookingSearchRequest) => (dispatch: Dispatch<Action>) => {
    //do something
    const queryString = convertObjectToQueryString(data);

    dispatch({
      type: BookingActionType.START_LOAD_INVITATION,
    });
    axios
      .get(`${ADMIN_FETCH_INVITATION}/?${queryString}`)
      .then((response: any) => {
        console.log("response", response);
        dispatch({
          type: BookingActionType.SET_ADMIN_INVITATION,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("error caught here");
        dispatch({
          type: BookingActionType.END_LOAD_INVITATION,
          payload: err.message,
        });
      });
  };

export const getBookingDetails =
  (id: Number) => (dispatch: Dispatch<Action>) => {
    //do someth
    dispatch({
      type: BookingActionType.START_LOAD_INVITATION,
    });
    axios
      .get(`${RESTAURANT_INVITATION}/${id}`)
      .then((response: any) => {
        dispatch({
          type: BookingActionType.SET_BOOKING,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("error caught here", err);
        dispatch({
          type: BookingActionType.END_LOAD_INVITATION,
          payload: err.message,
        });
      });
  };

export const updateBookingDetails =
  (id: Number, data: MemberStatusRequest) => (dispatch: Dispatch<Action>) => {
    //do someth
    dispatch({
      type: BookingActionType.START_LOAD_INVITATION,
    });
    axios
      .put(`${RESTAURANT_INVITATION}/${id}`, data)
      .then((response: any) => {
        //do something

        dispatch({
          type: BookingActionType.UPDATE_BOOKING,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("error caught here", err);
        dispatch({
          type: BookingActionType.END_LOAD_INVITATION,
          payload: err.message,
        });
      });
  };
export const updateInvitation =
  (id: Number, data: MemberStatusRequest) => (dispatch: Dispatch<Action>) => {
    //do something
    dispatch({
      type: BookingActionType.START_LOAD_INVITATION,
    });
    axios
      .put(`${getUserUpdateInvitation(id)}`, data)
      .then((response: any) => {
        // dispatch({
        //   type: BookingActionType.SET_INVITATION,
        //   payload: response.data,
        // });
      })
      .catch((err) => {
        console.log("error caught here");
        dispatch({
          type: BookingActionType.END_LOAD_INVITATION,
          payload: err.message,
        });
      });
  };
