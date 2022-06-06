import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { bookingActionCreators } from "../store";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(bookingActionCreators, dispatch);
};
