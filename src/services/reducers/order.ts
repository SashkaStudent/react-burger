import type { TPostOrderAction } from "../actions/order";
import { CLOSE_MODAL, POST_ORDER_FAILED, POST_ORDER_REQUEST, POST_ORDER_SUCCESS } from "../types/action-constants";

type TOrderState = {
  orderNumber: number;
  postOrderRequest: boolean;
  postOrderFailed:boolean;
  postOrderSuccess: boolean;
}

const initialState: TOrderState = {
  orderNumber: 0,
  postOrderRequest: false,
  postOrderFailed:false,
  postOrderSuccess: false
}

export const orderReducer = (state: TOrderState = initialState, action: TPostOrderAction):TOrderState =>{
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