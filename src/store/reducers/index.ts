import { combineReducers } from "@reduxjs/toolkit";
import bookingReducer from "./bookingReducer";
import userReducer from "./userReducer";
import restaurantReducer from "./restaurantReducer";

const reducers = combineReducers({
  user: userReducer,
  booking: bookingReducer,
  restaurant: restaurantReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
