import {
    CLICK_INGREDIENT, 
    GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS, 
    GET_INGREDIENTS_FAILED 
    } from "../actions/burger-ingredients.js";



const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false
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
            return { ...state, ingredientsFailed: false, ingredients: action.ingredients, ingredientsRequest: false };
          }
          case GET_INGREDIENTS_FAILED: {
            return { ...state, ingredientsFailed: true, ingredientsRequest: false };
          }
        default: return state;
    }
}