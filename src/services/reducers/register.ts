import type { TRegisterAction } from "../actions/register";
import { CHANGE_REGISTER_EMAIL, CHANGE_REGISTER_NAME, CHANGE_REGISTER_PASSWORD, TOGGLE_REGISTER_VISIBILITY_PASSWORD } from "../types/action-constants";

type TRegisterState = {
  name: string;
  email: string;
  password: string;
  valid: boolean;
  visibility: boolean;
}

const initialState: TRegisterState = {
  name:"",
  email:"",
  password:"",
  valid:true,
  visibility:false
}


export const registerReducer = (state: TRegisterState = initialState, action: TRegisterAction):TRegisterState =>{
    switch (action.type){
      case CHANGE_REGISTER_NAME:
        {
          return {...state, name: action.name}
        }
      case CHANGE_REGISTER_EMAIL:
        {
          return {...state, email: action.email, valid: action.valid}
        }
      case CHANGE_REGISTER_PASSWORD:
        {
          return {...state, password: action.password}
        }
      case TOGGLE_REGISTER_VISIBILITY_PASSWORD:
        {
          const visibility = !state.visibility;
          return {...state, visibility: visibility}
        }
        default: return state;
    }
}