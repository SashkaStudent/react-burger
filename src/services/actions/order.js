import { postData } from "../../utils/api";


export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';

export function postOrder(ingredients, accessToken){
    return function (dispatch) {
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
  }