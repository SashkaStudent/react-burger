import { getData } from "../../utils/api.js"
import { INIT_CONSTRUCTOR } from "./burger-constructor.js";
export const CLICK_INGREDIENT = "CLICK_INGREDIENT";
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const SWITCH_TAB = 'SWITCH_TAB';

export function getItems() {
    return function(dispatch) {
      dispatch({
        type: GET_INGREDIENTS_REQUEST
      });
      getData().then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data,
            defaultBun: res.data.find(i => i.type === 'bun'),
            constructor: []
          });
          dispatch({type:INIT_CONSTRUCTOR, ingredients:[], totalPrice:0, bun:res.data.find(i => i.type === 'bun')});
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED
          });
        }
      });
    };
  }


