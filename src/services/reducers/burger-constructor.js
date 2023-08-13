import { ADD_INGREDIENT, DELETE_INGREDIENT, INIT_CONSTRUCTOR, MOVE, SET_BUN } from "../actions/burger-constructor";
import { POST_ORDER_SUCCESS } from "../actions/order";

const initialState = {
    ingredients: [],
    bun:[],
    totalPrice:0,
}

export const constructorReducer = (state = initialState, action)=>{
  switch(action.type) {
    case INIT_CONSTRUCTOR:{
      return {...state, bun: [], ingredients:[], totalPrice:0}

    }
    case SET_BUN: {
      const bunsSum = action.bun.price * 2;
      const ingSum = state.ingredients.reduce((prev, curr)=>prev+curr.price, 0);
      return {...state,  bun: action.bun, totalPrice:bunsSum+ingSum}
  }

  case ADD_INGREDIENT:{
    const bunsSum = state.bun.price * 2;
    const ingSum = [...state.ingredients, action.ingredient].reduce((prev, curr)=>prev+curr.price, 0);
    const ingredient = action.ingredient;
    ingredient.key = action.uuid;
    return {...state, ingredients:[...state.ingredients, ingredient], totalPrice:bunsSum+ingSum}
  }
  case DELETE_INGREDIENT:{
    state.ingredients.splice(action.id,1);
    const bunsSum = state.bun.price * 2;
    const ingSum = state.ingredients.reduce((prev, curr)=>prev+curr.price, 0);
    return {...state, ingredients:[...state.ingredients], totalPrice:bunsSum+ingSum}
  }
  case MOVE:{
    const movingIng = state.ingredients[action.drag];
    state.ingredients.splice(action.drag,1);
    state.ingredients.splice(action.drop,0,movingIng);
    return {...state, ingredients:[...state.ingredients]}
  }

  case POST_ORDER_SUCCESS:{
    return {...state, ingredients:[]}
  }

    default: return state;
}
}