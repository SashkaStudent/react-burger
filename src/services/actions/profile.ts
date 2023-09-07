// export const CHANGE_PROFILE_NAME = "CHANGE_PROFILE_NAME";
// export const CHANGE_PROFILE_EMAIL = "CHANGE_PROFILE_EMAIL";
// export const CHANGE_PROFILE_PASSWORD = "CHANGE_PROFILE_PASSWORD";
// export const TOGGLE_PROFILE_VISIBILITY_PASSWORD = 'TOGGLE_PROFILE_VISIBILITY_PASSWORD'
// export const TOGGLE_PROFILE_NAME_FOCUS = 'TOGGLE_PROFILE_NAME_FOCUS'

import { CHANGE_PROFILE_EMAIL, CHANGE_PROFILE_NAME, CHANGE_PROFILE_PASSWORD, TOGGLE_PROFILE_NAME_FOCUS, TOGGLE_PROFILE_VISIBILITY_PASSWORD } from "../types/action-constants";



export interface IChangeName {
  readonly type: typeof CHANGE_PROFILE_NAME;
  readonly name: string;
}

export interface IChangeEmail{
  readonly type: typeof CHANGE_PROFILE_EMAIL;
  readonly email: string;
  readonly valid: boolean;
}

export interface IChangeLoginPassword {
  readonly type: typeof CHANGE_PROFILE_PASSWORD;
  readonly password: string;
}

export interface ITogglePasswordVisibility {
  readonly type: typeof TOGGLE_PROFILE_VISIBILITY_PASSWORD;
  readonly visibility: boolean;
}

export interface IToggleNameFocus {
  readonly type: typeof TOGGLE_PROFILE_NAME_FOCUS;
  readonly focus: boolean;
}

export type TProfileAction = IChangeName | IChangeEmail | IChangeLoginPassword | ITogglePasswordVisibility | IToggleNameFocus;