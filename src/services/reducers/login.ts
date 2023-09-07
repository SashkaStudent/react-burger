import type { TChangeLoginAction } from "../actions/login";
import { CHANGE_LOGIN_EMAIL, CHANGE_LOGIN_PASSWORD } from "../types/action-constants";

type TChangeLoginState = {
  email: string;
  password: string;
  valid: boolean;
}

const initialState:TChangeLoginState = {
  email:"",
  password:"",
  valid:true
}

export const loginReducer = (state:TChangeLoginState = initialState, action: TChangeLoginAction):TChangeLoginState =>{
    switch (action.type){
      case CHANGE_LOGIN_EMAIL:
        {
          return {...state, email: action.email, valid:action.valid}
        }
      case CHANGE_LOGIN_PASSWORD:
        {
          return {...state, password: action.password}
        }
        default: return state;
    }
}