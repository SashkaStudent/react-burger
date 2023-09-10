import { CHANGE_RESET_CODE, CHANGE_RESET_PASSWORD, TOGGLE_RESET_VISIBILITY } from "../types/action-constants";

export interface IChangeCode{
  readonly type: typeof CHANGE_RESET_CODE;
  readonly code: string;
}

export interface IChangePassword {
  readonly type: typeof CHANGE_RESET_PASSWORD;
  readonly password: string;
}

export interface ITogglePasswordVisibility {
  readonly type: typeof TOGGLE_RESET_VISIBILITY;
  readonly visibility: boolean;
}


export type TResetAction = IChangeCode | IChangePassword | ITogglePasswordVisibility;