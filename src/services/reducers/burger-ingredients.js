import {
    CLICK_INGREDIENT, 
    GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS, 
    GET_INGREDIENTS_FAILED , 
    SET_BUN, 
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    POST_ORDER_SUCCESS,
    CLOSE_MODAL,
    SWITCH_TAB
    } from "../actions/burger-ingredients.js";



const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    constructor:[],
    bun:[],
    choosedIngredient:[],
    totalPrice:0,
    popupOrderIsOpen: false,
    popupDetailsIsOpen: false,
    orderNumber: 0,
    currentTab: 'bun'
}

export const ingredientsReducer = (state = initialState, action)=>{
    switch (action.type){
        case CLICK_INGREDIENT:{
            return {...state, popupDetailsIsOpen:true ,choosedIngredient: action.ingredient};
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
              totalPrice: action.defaultBun.price * 2
            };
          }
          case GET_INGREDIENTS_FAILED: {
            return { ...state, ingredientsFailed: true, ingredientsRequest: false };
          }

          case POST_ORDER_SUCCESS:{
            return {...state, orderNumber:action.orderNumber, popupOrderIsOpen:true, popupDetailsIsOpen:false}
          }

          case ADD_INGREDIENT:{
            const bunsSum = state.bun.price * 2;
            const ingSum = [...state.constructor, action.ingredient].reduce((prev, curr)=>prev+curr.price, 0);

            return {...state, constructor:[...state.constructor, action.ingredient], totalPrice:bunsSum+ingSum}
          }
          case DELETE_INGREDIENT:{
            state.constructor.splice(action.id,1);
            const bunsSum = state.bun.price * 2;
            const ingSum = state.constructor.reduce((prev, curr)=>prev+curr.price, 0);
            return {...state, constructor:[...state.constructor], totalPrice:bunsSum+ingSum}
          }

          case SET_BUN: {
            const bunsSum = action.bun.price * 2;
            const ingSum = state.constructor.reduce((prev, curr)=>prev+curr.price, 0);
            return {...state, bun: action.bun, totalPrice:bunsSum+ingSum}
          }

          case CLOSE_MODAL: {
            return {...state, popupOrderIsOpen:false, popupDetailsIsOpen:false}
          }
          case SWITCH_TAB:{
            return {...state, currentTab:action.tab}
          }
        default: return state;
    }
}