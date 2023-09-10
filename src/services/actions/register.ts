import { CHANGE_REGISTER_EMAIL, CHANGE_REGISTER_NAME, CHANGE_REGISTER_PASSWORD, TOGGLE_REGISTER_VISIBILITY_PASSWORD } from "../types/action-constants";

export interface IChangeName {
  readonly type: typeof CHANGE_REGISTER_NAME;
  readonly name: string;
}

export interface IChangeEmail{
  readonly type: typeof CHANGE_REGISTER_EMAIL;
  readonly email: string;
  readonly valid: boolean;
}

export interface IChangeLoginPassword {
  readonly type: typeof CHANGE_REGISTER_PASSWORD;
  readonly password: string;
}

export interface ITogglePasswordVisibility {
  readonly type: typeof TOGGLE_REGISTER_VISIBILITY_PASSWORD;
  readonly visibility: boolean;
}


export type TRegisterAction = IChangeName | IChangeEmail | IChangeLoginPassword | ITogglePasswordVisibility;