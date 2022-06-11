import { Dispatch } from "react";
import { LoginRequest } from "../../auth/auth.model";
import { ActionType, AuthActionType } from "../action-types";
import { Action } from "../actions/user";
import { AuthAction } from "../actions/auth";
import axios from "../../service/httpclient";

export const login =
  (request: LoginRequest) => (dispatch: Dispatch<Action | AuthAction>) => {
    //do something
    dispatch({
      type: AuthActionType.USER_IS_LOGGING_IN,
    });
    setTimeout(() => {
      dispatch({
        type: ActionType.SET_USER_DETAILS,
        payload: {},
      });
      window.location.replace("/app/dashboard");
    }, 5000);
    // axios
    //   .post("/auth/login", request)
    //   .then((response: any) => {
    //     dispatch({
    //       type: ActionType.SET_USER_DETAILS,
    //       payload: response,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: AuthActionType.USER_AUTH_FAILED,
    //       payload: err.message,
    //     });
    //   });
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
