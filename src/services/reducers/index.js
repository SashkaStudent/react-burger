import {combineReducers} from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './burger-constructor';
import { GET_INGREDIENTS } from '../actions';
// const mainReducer = (state, action)=>{
//     switch(action.type){
//         case OPEN_INGREDIENT_DETAILS:{
//             return;
//         }
//     }

// }

const initialState = {};


export const rootReducer = combineReducers({ingredients:ingredientsReducer, constructor:constructorReducer});