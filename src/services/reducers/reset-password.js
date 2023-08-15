//import { CHANGE_RESET_PASSWORD, CHANGE_RESET_CODE}

import { CHANGE_RESET_CODE, CHANGE_RESET_PASSWORD, TOGGLE_RESET_VISIBILITY } from "../actions/reset-password";

const initialState = {
  password: "",
  code: "",
  visibility: false
};

export const resetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RESET_CODE: {
      return { ...state, code: action.code };
    }
    case CHANGE_RESET_PASSWORD:{
      return { ...state, password: action.password };
    }
    case TOGGLE_RESET_VISIBILITY:{
      return { ...state, visibility: !state.visibility };
    }
    default:
      return state;
  }
};
