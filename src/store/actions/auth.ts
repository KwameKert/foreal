import { AuthActionType } from "../action-types";
import { LoginRequest } from "../../auth/auth.model";

interface LoginAction {
  type: AuthActionType.LOGIN;
  payload: LoginRequest;
}

interface LoginAction {
  type: AuthActionType.LOGIN;
  payload: LoginRequest;
}

interface UserIsLoggingAction {
  type: AuthActionType.USER_IS_LOGGING_IN;
}

interface UserAuthFailed {
  type: AuthActionType.USER_AUTH_FAILED;
  payload?: any;
}
export type AuthAction = LoginAction | UserIsLoggingAction | UserAuthFailed;
