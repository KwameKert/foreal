import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
