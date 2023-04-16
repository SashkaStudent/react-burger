// import { ADD_BUN, ADD_INGREDIENT, MAKE_ORDER } from "../actions/burger-constructor";

// const initialState = {
//     bun: null,
//     ingredients: [],
//     ingredientsRequest: false,
//     ingredientsFailed: false
// }

// export const constructorReducer = (state = initialState, action)=>{


//     switch (action.type){
//         case MAKE_ORDER:{
//             return {...state, choosedIngredient: action.ingredient};
//         }
//         case ADD_BUN:{
//             return {...state, bun:action.bun}
//         }
//         case ADD_INGREDIENT:{
          
//           if(state.ingredients===undefined) state.ingredients = [action.ingredient];


//             return {...state, ingredients:[...state.ingredients, action.ingredient]};
            

//         }

//         default: return {...state};
//     }
// }