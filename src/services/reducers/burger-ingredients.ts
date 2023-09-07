// import {
//     CLICK_INGREDIENT,
//     GET_INGREDIENTS_REQUEST,
//     GET_INGREDIENTS_SUCCESS,
//     GET_INGREDIENTS_FAILED ,
//     SWITCH_TAB,
//     } from "../actions/burger-ingredients.js";

import type { TBurgerIngredientsAction } from "../actions/burger-ingredients.js";
//import { CLOSE_MODAL } from "../actions/modal.js";
import {
  CLICK_INGREDIENT,
  CLOSE_MODAL,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SWITCH_TAB,
} from "../types/action-constants.js";
import { IIngredient, IIngredientRequest } from "../types/ingredient.js";

type TBurgerIngredientsState = {
  ingredients: IIngredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  constructor: IIngredient[];
  bun: null | IIngredient;
  choosedIngredient: null | IIngredient;
  totalPrice: number;
  orderNumber: number;
  currentTab: string;
}

const initialState: TBurgerIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  constructor: [],
  bun: null,
  choosedIngredient: null,
  totalPrice: 0,
  orderNumber: 0,
  currentTab: "bun",
};

export const ingredientsReducer = (
  state = initialState,
  action: TBurgerIngredientsAction
):TBurgerIngredientsState => {
  switch (action.type) {
    case CLICK_INGREDIENT: {
      return { ...state, choosedIngredient: action.ingredient };
    }
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        bun: action.defaultBun,
        constructor: action.constructor,
        totalPrice: action.defaultBun ? action.defaultBun.price * 2 : 0,
        choosedIngredient: null,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, ingredientsFailed: true, ingredientsRequest: false };
    }

    case CLOSE_MODAL: {
      return { ...state, choosedIngredient: null };
    }

    case SWITCH_TAB: {
      return { ...state, currentTab: action.tab };
    }

    default:
      return state;
  }
};
