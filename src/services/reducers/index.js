import {combineReducers} from 'redux';
import { constructorReducer } from './burger-constructor';
import { ingredientsReducer } from './burger-ingredients';
import { orderReducer } from './order';




export const rootReducer = combineReducers({ingredients:ingredientsReducer, constructor:constructorReducer, order:orderReducer});