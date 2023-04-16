import { getData, postData } from "../../utils/api.js"
//import { ADD_INGREDIENT, ADD_BUN } from "./burger-constructor.js";

export const CLICK_INGREDIENT = "CLICK_INGREDIENT";
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const SET_BUN = "SET_BUN";
export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SWITCH_TAB = 'SWITCH_TAB';
//export const CLOSE_INGREDIENT_DETAILS = "CLOSE_INGREDIENT_DETAILS";


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
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED
          });
        }
      });
    };
  }

  export function postOrder(ingredients){
    return function (dispatch) {
      dispatch({type:POST_ORDER_REQUEST});
      postData(ingredients).then(res =>{
        if (res && res.success) {
          dispatch({
            type:POST_ORDER_SUCCESS,
            orderNumber: res.order.number
          });
        } else {
          dispatch({
            type: POST_ORDER_FAILED,
            error: res.error
          });
        }
      })
    }
  }
