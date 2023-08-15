import {CHANGE_REGISTER_NAME, CHANGE_REGISTER_EMAIL, CHANGE_REGISTER_PASSWORD, TOGGLE_REGISTER_VISIBILITY_PASSWORD } from "../actions/register"

const initialState = {
  name:"",
  email:"",
  password:"",
  valid:true,
  visibility:false
}

export const registerReducer = (state = initialState, action)=>{
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