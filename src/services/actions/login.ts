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