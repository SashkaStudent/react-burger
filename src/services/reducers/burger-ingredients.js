import {
    CLICK_INGREDIENT, 
    GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS, 
    GET_INGREDIENTS_FAILED , 
    SWITCH_TAB,
    } from "../actions/burger-ingredients.js";
import { CLOSE_MODAL } from "../actions/modal.js";



const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    constructor:[],
    bun:[],
    choosedIngredient:null,
    totalPrice:0,
    orderNumber: 0,
    currentTab: 'bun'
}

export const ingredientsReducer = (state = initialState, action)=>{
    switch (action.type){
        case CLICK_INGREDIENT:{
            return {...state, choosedIngredient: action.ingredient};
        }
        case GET_INGREDIENTS_REQUEST: {
            return {
              ...state,
              ingredientsRequest: true
            };
          }
          case GET_INGREDIENTS_SUCCESS: {

            return { ...state, 
              ingredientsFailed: false, 
              ingredients: action.ingredients, 
              ingredientsRequest: false,
              bun: action.defaultBun,
              constructor: action.constructor,
              totalPrice: action.defaultBun.price * 2,
              choosedIngredient:null,
            };
          }
          case GET_INGREDIENTS_FAILED: {
            return { ...state, ingredientsFailed: true, ingredientsRequest: false };
          }

          case CLOSE_MODAL: {
            return {...state, choosedIngredient:null}
          }

          case SWITCH_TAB:{
            return {...state, currentTab:action.tab}
          }

        default: return state;
    }
}