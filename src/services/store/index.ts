import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { constructorReducer } from "../reducers/burger-constructor";
import { ingredientsReducer } from "../reducers/burger-ingredients";
import { forgotReducer } from "../reducers/forgot-password";
import { loginReducer } from "../reducers/login";
import { orderReducer } from "../reducers/order";
import { registerReducer } from "../reducers/register";
import { resetReducer } from "../reducers/reset-password";
import { profileReducer } from "../reducers/profile";
import ReduxThunk from "redux-thunk";
import userReducer from "../reducers/user";
import socketMiddleware from "../middleware/socketMiddleware";

import {
  WS_ORDER_FEED_CLOSE,
  WS_ORDER_FEED_CONNECT,
  WS_ORDER_FEED_CONNECTING,
  WS_ORDER_FEED_DISCONNECT,
  WS_ORDER_FEED_ERROR,
  WS_ORDER_FEED_MESSAGE,
  WS_ORDER_FEED_OPEN,
} from "../types/action-constants";
import {
  WS_PROFILE_FEED_CLOSE,
  WS_PROFILE_FEED_CONNECT,
  WS_PROFILE_FEED_CONNECTING,
  WS_PROFILE_FEED_DISCONNECT,
  WS_PROFILE_FEED_ERROR,
  WS_PROFILE_FEED_MESSAGE,
  WS_PROFILE_FEED_OPEN,
} from "../types/action-constants";

import orderFeedReducer from "../reducers/order-feed";
import profileFeedReducer from "../reducers/profile-feed";

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
  orderFeed: orderFeedReducer,
  profileFeed: profileFeedReducer
});

const orderFeedStates = {
  wsConnect: WS_ORDER_FEED_CONNECT,
  wsDisconnect: WS_ORDER_FEED_DISCONNECT,
  wsConnecting: WS_ORDER_FEED_CONNECTING,
  onOpen: WS_ORDER_FEED_OPEN,
  onClose: WS_ORDER_FEED_CLOSE,
  onError: WS_ORDER_FEED_ERROR,
  onMessage: WS_ORDER_FEED_MESSAGE,
};

const profileFeedStates = {
  wsConnect: WS_PROFILE_FEED_CONNECT,
  wsDisconnect: WS_PROFILE_FEED_DISCONNECT,
  wsConnecting: WS_PROFILE_FEED_CONNECTING,
  onOpen: WS_PROFILE_FEED_OPEN,
  onClose: WS_PROFILE_FEED_CLOSE,
  onError: WS_PROFILE_FEED_ERROR,
  onMessage: WS_PROFILE_FEED_MESSAGE,
};
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    applyMiddleware(socketMiddleware(orderFeedStates)),
    applyMiddleware(socketMiddleware(profileFeedStates))
  )
);

export default store;
