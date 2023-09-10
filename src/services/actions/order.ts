import { postData } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store/store-types";
import { POST_ORDER_FAILED, POST_ORDER_REQUEST, POST_ORDER_SUCCESS } from "../types/action-constants";
import { IIngredient } from "../types/ingredient";
import { ICloseModal } from "./modal";

export interface IPostOrderRequest {
  readonly type: typeof POST_ORDER_REQUEST;
}

export interface IPostOrderSuccess {
  readonly type: typeof POST_ORDER_SUCCESS;
  readonly orderNumber: number;
}


export interface IPostOrderFailed {
  readonly type: typeof POST_ORDER_FAILED;
}

export type TPostOrderAction = IPostOrderRequest | IPostOrderSuccess | IPostOrderFailed | ICloseModal;

export const postOrder: AppThunk = (ingredients: string[], accessToken: string) => (dispatch: AppDispatch) => {
      dispatch({type:POST_ORDER_REQUEST});
      postData(ingredients, accessToken).then(res =>{
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
      }).catch(err=>{console.log(err)});
    }