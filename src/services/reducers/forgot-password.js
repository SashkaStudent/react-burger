import { CHANGE_FORGOT_EMAIL } from "../actions/forgot-password";


const initialState = {
  email:"",
}

export const forgotReducer = (state = initialState, action)=>{
    switch (action.type){
      case CHANGE_FORGOT_EMAIL:
        {
          return {...state, email: action.email}
        }
        default: return state;
    }
}