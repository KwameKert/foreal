import { AuthActionType } from "../action-types";
import { LoginRequest } from "../../auth/auth.model";

interface LoginAction {
  type: AuthActionType.LOGIN;
  payload: LoginRequest;
}

export type AuthAction = LoginAction;
