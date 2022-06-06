import { combineReducers } from "@reduxjs/toolkit";
import bookingReducer from "./bookingReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
  booking: bookingReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
