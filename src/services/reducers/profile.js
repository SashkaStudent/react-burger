import {CHANGE_PROFILE_NAME, CHANGE_PROFILE_EMAIL, CHANGE_PROFILE_PASSWORD, TOGGLE_PROFILE_VISIBILITY_PASSWORD, TOGGLE_PROFILE_NAME_FOCUS } from "../actions/profile"

const initialState = {
  name:"",
  email:"",
  password:"",
  valid:true,
  visibility:false,
  focus:false
}

export const profileReducer = (state = initialState, action)=>{
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
          return {...state, password: action.focus}
        }
        default: return state;
    }
}