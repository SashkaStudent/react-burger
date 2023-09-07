import { CHANGE_FORGOT_EMAIL } from "../types/action-constants";


export interface IChangeEmailAction {
  readonly type: typeof CHANGE_FORGOT_EMAIL;
  readonly email: string;
}

export type TForgotPasswordAction = IChangeEmailAction;