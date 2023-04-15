import { MAKE_ORDER } from "../actions/burger-constructor";

const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false
}

export const constructorReducer = (state = initialState, action)=>{
    switch (action.type){
        case MAKE_ORDER:{
            return {...state, choosedIngredient: action.ingredient};
        }

        default: return state;
    }
}