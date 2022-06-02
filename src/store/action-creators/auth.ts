import { Dispatch } from "react";
import { LoginRequest } from "../../auth/auth.model";
import { ActionType } from "../action-types";
import { Action } from "../actions/user";
import axios from "../../service/httpclient";

export const login =
  (request: LoginRequest) => (dispatch: Dispatch<Action>) => {
    //do something
    axios
      .post("/auth/login", request)
      .then((response: any) => {
        dispatch({
          type: ActionType.SET_USER_DETAILS,
          payload: response,
        });
      })
      .catch((err) => {
        console.log("error caught here");
        dispatch({
          type: ActionType.SET_USER_DETAILS,
          payload: {},
        });
      });
  };

export const fetchSermon = () => (dispatch: Dispatch<Action>) => {
  //do something
  axios
    .get("/event")
    .then((response: any) => {
      dispatch({
        type: ActionType.SET_USER_DETAILS,
        payload: response,
      });
    })
    .catch((err) => {
      console.log("error caught here");
      dispatch({
        type: ActionType.SET_USER_DETAILS,
        payload: {},
      });
    });
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem("token");
  dispatch({
    type: ActionType.SET_USER_DETAILS,
    payload: {},
  });
  console.log("logout here");
  //do something
};
