import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import store from "./index";
import { TBurgerConstructorAction } from "../actions/burger-constructor";
import { TBurgerIngredientsAction } from "../actions/burger-ingredients";
import { TChangeLoginAction } from "../actions/login";
import { TModalAction } from "../actions/modal";
import { TOrderFeedAction } from "../actions/order-feed";
import { TPostOrderAction } from "../actions/order";
import { TProfileFeedAction } from "../actions/profile-feed";
import { TUserAction } from "../actions/user";

export type TRootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
    TBurgerConstructorAction
  | TBurgerIngredientsAction
  | TChangeLoginAction
  | TModalAction
  | TOrderFeedAction
  | TPostOrderAction
  | TProfileFeedAction
  | TUserAction;

  export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn,TRootState, Action, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;