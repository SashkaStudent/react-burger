import { createStore, combineReducers, compose, applyMiddleware } from "redux";

const orderFeedStates = {
  wsConnect: "WS_ORDER_FEED_CONNECT",
  wsDisconnect: "WS_ORDER_FEED_DISCONNECT",
  wsConnecting: "WS_ORDER_FEED_CONNECTING",
  onOpen: "WS_ORDER_FEED_OPEN",
  onClose: "WS_ORDER_FEED_CLOSE",
  onError: "WS_ORDER_FEED_ERROR",
  onMessage: "WS_ORDER_FEED_MESSAGE"
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

const rootReducer = createStore(
  combineReducers({ ingredients, constructorBurger, ingredient, order, userReducer, orderFeedReducer, userFeedReducer }),
  compose(applyMiddleware(ReduxThunk),
      applyMiddleware(socketFeedMiddleware(userFeedStatus)),
      applyMiddleware(socketFeedMiddleware(orderFeedStatus)),
      ));



export default rootReducer;