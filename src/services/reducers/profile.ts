import type { TProfileAction } from "../actions/profile"
import { CHANGE_PROFILE_EMAIL, CHANGE_PROFILE_NAME, CHANGE_PROFILE_PASSWORD, TOGGLE_PROFILE_NAME_FOCUS, TOGGLE_PROFILE_VISIBILITY_PASSWORD } from "../types/action-constants"

type TProfileState = {
  name: string;
  email: string;
  password: string;
  valid: boolean;
  visibility: boolean;
  focus: boolean;
}

const initialState: TProfileState = {
  name:"",
  email:"",
  password:"",
  valid:true,
  visibility:false,
  focus:false
}

export const profileReducer = (state: TProfileState = initialState, action: TProfileAction): TProfileState=>{
    switch (action.type){
      case CHANGE_PROFILE_NAME:
        {
          return {...state, name: action.name}
        }
      case CHANGE_PROFILE_EMAIL:
        {
          return {...state, email: action.email, valid: action.valid}
        }
      case CHANGE_PROFILE_PASSWORD:
        {
          return {...state, password: action.password}
        }
      case TOGGLE_PROFILE_VISIBILITY_PASSWORD:
        {
          const visibility = !state.visibility;
          return {...state, visibility: visibility}
        }
        case TOGGLE_PROFILE_NAME_FOCUS:
        {
          return {...state, focus: action.focus}
        }
        default: return state;
    }
}