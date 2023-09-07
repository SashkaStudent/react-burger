// export const WS_PROFILE_FEED_CONNECT = "WS_PROFILE_FEED_CONNECT";
// export const WS_PROFILE_FEED_DISCONNECT = "WS_PROFILE_FEED_DISCONNECT";
// export const WS_PROFILE_FEED_CONNECTING = "WS_PROFILE_FEED_CONNECTING";
// export const WS_PROFILE_FEED_OPEN =  "WS_PROFILE_FEED_OPEN";
// export const WS_PROFILE_FEED_CLOSE = "WS_PROFILE_FEED_CLOSE";
// export const WS_PROFILE_FEED_ERROR = "WS_PROFILE_FEED_ERROR";
// export const WS_PROFILE_FEED_MESSAGE = "WS_PROFILE_FEED_MESSAGE";

import { WS_PROFILE_FEED_CLOSE, WS_PROFILE_FEED_CONNECT, WS_PROFILE_FEED_CONNECTING, WS_PROFILE_FEED_DISCONNECT, WS_PROFILE_FEED_ERROR, WS_PROFILE_FEED_MESSAGE, WS_PROFILE_FEED_OPEN } from "../types/action-constants";
import { IOrders } from "../types/order";

export interface IConnect {
  readonly type: typeof WS_PROFILE_FEED_CONNECT;
  readonly payload: string;
}

export interface IDisconnect {
  readonly type: typeof WS_PROFILE_FEED_DISCONNECT;
}

export interface IConnecting {
  readonly type: typeof WS_PROFILE_FEED_CONNECTING;
}

export interface IOpen {
  readonly type: typeof WS_PROFILE_FEED_OPEN;
}

export interface IError {
  readonly type: typeof WS_PROFILE_FEED_ERROR;
  readonly payload: string;
}

export interface IMessage {
  readonly type: typeof WS_PROFILE_FEED_MESSAGE;
  readonly payload: IOrders[];
}

export interface IClose {
  readonly type: typeof WS_PROFILE_FEED_CLOSE;
}

export type TProfileFeedAction = IClose | IConnect | IConnecting | IOpen | IError | IMessage | IDisconnect;

export const connect = (url:string):IConnect => ({
  type: WS_PROFILE_FEED_CONNECT,
  payload: url
});

export const disconnect = ():IDisconnect => ({
  type: WS_PROFILE_FEED_DISCONNECT,
});

export const connecting = ():IConnecting => ({
  type: WS_PROFILE_FEED_CONNECTING,
});

export const open = ():IOpen => ({
  type: WS_PROFILE_FEED_OPEN,
});

export const error = (error:string):IError => ({
  type: WS_PROFILE_FEED_ERROR,
  payload: error
});

export const message = (arr: IOrders[]):IMessage => ({
  type: WS_PROFILE_FEED_MESSAGE,
  payload: arr
});

export const close = ():IClose => ({
  type: WS_PROFILE_FEED_CLOSE,
});