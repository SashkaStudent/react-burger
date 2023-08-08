export const WS_ORDER_FEED_CONNECT = "WS_ORDER_FEED_CONNECT";
export const WS_ORDER_FEED_DISCONNECT = "WS_ORDER_FEED_DISCONNECT";
export const WS_ORDER_FEED_CONNECTING = "WS_ORDER_FEED_CONNECTING";
export const WS_ORDER_FEED_OPEN =  "WS_ORDER_FEED_OPEN";
export const WS_ORDER_FEED_CLOSE = "WS_ORDER_FEED_CLOSE";
export const WS_ORDER_FEED_ERROR = "WS_ORDER_FEED_ERROR";
export const WS_ORDER_FEED_MESSAGE = "WS_ORDER_FEED_MESSAGE";

export const connect = (url) => ({
  type: WS_ORDER_FEED_CONNECT,
  payload: url
});

export const disconnect = () => ({
  type: WS_ORDER_FEED_DISCONNECT,
});

export const connecting = () => ({
  type: WS_ORDER_FEED_CONNECTING,
});

export const open = () => ({
  type: WS_ORDER_FEED_OPEN,
});

export const error = (error) => ({
  type: WS_ORDER_FEED_ERROR,
  payload: error
});

export const message = (arr) => ({
  type: WS_ORDER_FEED_MESSAGE,
  payload: arr
});

export const close = () => ({
  type: WS_ORDER_FEED_CLOSE,
});