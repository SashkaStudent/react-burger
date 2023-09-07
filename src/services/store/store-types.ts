import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import store from "./index";
import { TBurgerConstructorAction } from "../actions/burger-constructor";
import { TBurgerIngredientsAction } from "../actions/burger-ingredients";
import { TForgotPasswordAction } from "../actions/forgot-password";
import { TChangeLoginAction } from "../actions/login";
import { TModalAction } from "../actions/modal";
import { TOrderFeedAction } from "../actions/order-feed";
import { TPostOrderAction } from "../actions/order";
import { TProfileFeedAction } from "../actions/profile-feed";
import { TProfileAction } from "../actions/profile";
import { TRegisterAction } from "../actions/register";
import { TResetAction } from "../actions/reset-password";
import { TUserAction } from "../actions/user";

export type TRootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
    TBurgerConstructorAction
  | TBurgerIngredientsAction
  | TForgotPasswordAction
  | TChangeLoginAction
  | TModalAction
  | TOrderFeedAction
  | TPostOrderAction
  | TProfileFeedAction
  | TProfileAction
  | TRegisterAction
  | TResetAction
  | TUserAction;

  export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, TRootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;