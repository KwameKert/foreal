import { Dispatch } from "react";
import { LoginRequest } from "../../auth/auth.model";
import { BookingActionType } from "../action-types";
import { Action } from "../actions/booking";
import axios from "../../service/httpclient";

export const getInvitation = (id: Number) => (dispatch: Dispatch<Action>) => {
  //do something
  dispatch({
    type: BookingActionType.START_LOAD_INVITATION,
  });
  axios
    .get(`/plan/${id}`)
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
      });
    });
};
