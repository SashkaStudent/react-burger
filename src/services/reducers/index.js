import { combineReducers } from "redux";
import { constructorReducer } from "./burger-constructor";
import { ingredientsReducer } from "./burger-ingredients";
import { forgotReducer } from "./forgot-password";
import { loginReducer } from "./login";
import { orderReducer } from "./order";
import { registerReducer } from "./register";
import { resetReducer } from "./reset-password";
import { profileReducer } from "./profile";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructor: constructorReducer,
  order: orderReducer,
  register: registerReducer,
  login: loginReducer,
  forgot: forgotReducer,
  reset: resetReducer,
  profile: profileReducer
});
