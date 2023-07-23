import { CHANGE_LOGIN_EMAIL, CHANGE_LOGIN_PASSWORD } from "../actions/login"

const initialState = {
  email:"",
  password:"",
  valid:true
}

export const loginReducer = (state = initialState, action)=>{
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