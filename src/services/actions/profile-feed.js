export const WS_PROFILE_FEED_CONNECT = "WS_PROFILE_FEED_CONNECT";
export const WS_PROFILE_FEED_DISCONNECT = "WS_PROFILE_FEED_DISCONNECT";
export const WS_PROFILE_FEED_CONNECTING = "WS_PROFILE_FEED_CONNECTING";
export const WS_PROFILE_FEED_OPEN =  "WS_PROFILE_FEED_OPEN";
export const WS_PROFILE_FEED_CLOSE = "WS_PROFILE_FEED_CLOSE";
export const WS_PROFILE_FEED_ERROR = "WS_PROFILE_FEED_ERROR";
export const WS_PROFILE_FEED_MESSAGE = "WS_PROFILE_FEED_MESSAGE";

export const connect = (url) => ({
  type: WS_PROFILE_FEED_CONNECT,
  payload: url
});

export const disconnect = () => ({
  type: WS_PROFILE_FEED_DISCONNECT,
});

export const connecting = () => ({
  type: WS_PROFILE_FEED_CONNECTING,
});

export const open = () => ({
  type: WS_PROFILE_FEED_OPEN,
});

export const error = (error) => ({
  type: WS_PROFILE_FEED_ERROR,
  payload: error
});

export const message = (arr) => ({
  type: WS_PROFILE_FEED_MESSAGE,
  payload: arr
});

export const close = () => ({
  type: WS_PROFILE_FEED_CLOSE,
});