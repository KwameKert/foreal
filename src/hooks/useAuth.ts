import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { authActionCreators } from "../store";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(authActionCreators, dispatch);
};
