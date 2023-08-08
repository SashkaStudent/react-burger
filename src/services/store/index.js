import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { constructorReducer } from "../reducers/burger-constructor";
import { ingredientsReducer } from "../reducers/burger-ingredients";
import { forgotReducer } from "../reducers/forgot-password";
import { loginReducer } from "../reducers/login";
import { orderReducer } from "../reducers/order";
import { registerReducer } from "../reducers/register";
import { resetReducer } from "../reducers/reset-password";
import { profileReducer } from "../reducers/profile";
import ReduxThunk from 'redux-thunk';
import userReducer from "../reducers/user";
import socketFeedMiddleware from "../middleware/socketMiddleware";
import { WS_ORDER_FEED_CLOSE, WS_ORDER_FEED_CONNECT, WS_ORDER_FEED_CONNECTING, WS_ORDER_FEED_DISCONNECT, WS_ORDER_FEED_ERROR, WS_ORDER_FEED_MESSAGE, WS_ORDER_FEED_OPEN } from "../actions/order-feed";
import orderFeedReducer from "../reducers/order-feed";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructor: constructorReducer,
  order: orderReducer,
  register: registerReducer,
  login: loginReducer,
  forgot: forgotReducer,
  reset: resetReducer,
  profile: profileReducer,
  user: userReducer,
  orderFeed: orderFeedReducer
});

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const thunkEnhancer = applyMiddleware(ReduxThunk);
 const enhancer = composeEnhancers(thunkEnhancer);

const orderFeedStates = {
  wsConnect: WS_ORDER_FEED_CONNECT,
  wsDisconnect: WS_ORDER_FEED_DISCONNECT,
  wsConnecting: WS_ORDER_FEED_CONNECTING,
  onOpen: WS_ORDER_FEED_OPEN,
  onClose: WS_ORDER_FEED_CLOSE,
  onError: WS_ORDER_FEED_ERROR,
  onMessage: WS_ORDER_FEED_MESSAGE
}

const profileFeedStates = {
  wsConnect: "WS_PROFILE_FEED_CONNECT",
  wsDisconnect: "WS_PROFILE_FEED_DISCONNECT",
  wsConnecting: "WS_PROFILE_FEED_CONNECTING",
  onOpen: "WS_PROFILE_FEED_OPEN",
  onClose: "WS_PROFILE_FEED_CLOSE",
  onError: "WS_PROFILE_FEED_ERROR",
  onMessage: "WS_PROFILE_FEED_MESSAGE"
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk), 
  applyMiddleware(socketFeedMiddleware(orderFeedStates)),
  //applyMiddleware(socketFeedMiddleware(profileFeedStates))
      ));



export default store;