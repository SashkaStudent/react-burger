import type { TResetAction } from "../actions/reset-password";
import { CHANGE_RESET_CODE, CHANGE_RESET_PASSWORD, TOGGLE_RESET_VISIBILITY } from "../types/action-constants";

type TResetPasswordState = {
  password: string;
  code: string;
  visibility: boolean;
}

const initialState: TResetPasswordState = {
  password: "",
  code: "",
  visibility: false
};

export const resetReducer = (state: TResetPasswordState = initialState, action: TResetAction): TResetPasswordState => {
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
