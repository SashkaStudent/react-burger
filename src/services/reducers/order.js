import { CLOSE_MODAL } from "../actions/modal";
import { POST_ORDER_FAILED, POST_ORDER_REQUEST, POST_ORDER_SUCCESS } from "../actions/order";

const initialState = {
  orderNumber: 0,
  postOrderRequest: false,
  postOrderFailed:false,
  postOrderSuccess: false
}

export const orderReducer = (state = initialState, action)=>{
    switch (action.type)
    {
      case POST_ORDER_REQUEST: {
        return {
          ...state,
          postOrderRequest: true,
          orderNumber:0
        };
      }

      case POST_ORDER_SUCCESS:{
        return {...state, orderNumber:action.orderNumber, postOrderSuccess:true, postOrderRequest:false}
      }
      case POST_ORDER_FAILED:{
        return {...state, orderNumber:0, postOrderSuccess:false, postOrderRequest:false, postOrderFailed:true}
      }
      case CLOSE_MODAL: {
        return {...state, postOrderRequest:false, postOrderSuccess:false, orderNumber:0}
      }

      default: return state;
    }
    
}