//import { getData } from "../../utils/api.js";
import { getData } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store/store-types.js";
import {
  CLICK_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  INIT_CONSTRUCTOR,
  SWITCH_TAB,
} from "../types/action-constants";
import { IIngredient, IIngredientRequest } from "../types/ingredient.js";
import { ICloseModal } from "./modal.js";

// export const CLICK_INGREDIENT = "CLICK_INGREDIENT";
// export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
// export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
// export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
// export const SWITCH_TAB = 'SWITCH_TAB';

export interface IClickIngredient {
  readonly type: typeof CLICK_INGREDIENT;
  readonly ingredient: IIngredient;
}

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: IIngredient[];
  readonly defaultBun: null | IIngredient;
  readonly constructor: IIngredient[];
  readonly totalPrice?: number;
}

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface ISwitchTab {
  readonly type: typeof SWITCH_TAB;
  readonly tab: string;
}

export type TBurgerIngredientsAction =
  | IClickIngredient
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed
  | ISwitchTab
  | ICloseModal;

export const getItems: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getData()
      .then((res) => {
        if (res && res.success) {
          
          dispatch(getIngredientsSuccess(res));
          dispatch({
            type: INIT_CONSTRUCTOR
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getIngredientsSuccess = (ingredients: IIngredientRequest): IGetIngredientsSuccess => {
  return {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: ingredients.data,
      defaultBun: ingredients.data.find((i) => i.type === "bun")??null,
      constructor: [],
  }
}

