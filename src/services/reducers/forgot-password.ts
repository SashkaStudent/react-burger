import type {  TForgotPasswordAction } from "../actions/forgot-password";
import { CHANGE_FORGOT_EMAIL } from "../types/action-constants";

type TForgotPasswordState = {
  email: string;
}

const initialState: TForgotPasswordState = {
  email:"",
}

export const forgotReducer = (state:TForgotPasswordState = initialState, action: TForgotPasswordAction): TForgotPasswordState =>{
    switch (action.type){
      case CHANGE_FORGOT_EMAIL:
        {
          return {...state, email: action.email}
        }
        default: return state;
    }
}