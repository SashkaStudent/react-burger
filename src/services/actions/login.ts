// export const CHANGE_LOGIN_EMAIL = "CHANGE_LOGIN_EMAIL";
// export const CHANGE_LOGIN_PASSWORD = "CHANGE_LOGIN_PASSWORD";
// export const TOGGLE_LOGIN_VISIBILITY_PASSWORD = "TOGGLE_LOGIN_VISIBILITY_PASSWORD"

import { CHANGE_LOGIN_EMAIL, CHANGE_LOGIN_PASSWORD } from "../types/action-constants";

export interface IChangeLoginEmail {
  readonly type: typeof CHANGE_LOGIN_EMAIL;
  readonly email: string;
  readonly valid: boolean;
}

export interface IChangeLoginPassword {
  readonly type: typeof CHANGE_LOGIN_PASSWORD
  readonly password: string;
}


export type TChangeLoginAction = IChangeLoginEmail | IChangeLoginPassword;