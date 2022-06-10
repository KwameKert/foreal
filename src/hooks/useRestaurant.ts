import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { restaurantActionCreators } from "../store";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(restaurantActionCreators, dispatch);
};
