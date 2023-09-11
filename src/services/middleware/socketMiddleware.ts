import { TOrderFeedAction } from "../actions/order-feed";
import { TProfileFeedAction } from "../actions/profile-feed";
import { TWsActions } from "./socket-types";

const socketMiddleware = (wsActions: TWsActions) => {
  return (store: {
    dispatch: (type: TProfileFeedAction | TOrderFeedAction) => void;
  }) => {
    let socket: WebSocket | null = null;
    return (next: (arg0: TProfileFeedAction | TOrderFeedAction) => void) =>
      (action: TProfileFeedAction | TOrderFeedAction) => {
        const { dispatch } = store;

        const { type } = action;

        const {
          wsConnect,
          onOpen,
          onClose,
          onError,
          onMessage,
          wsConnecting,
          wsDisconnect,
        } = wsActions;

        if (type === wsConnect) {
          socket = new WebSocket(action.payload);
          dispatch({ type: wsConnecting });
        }

        if (socket) {
          socket.onopen = () => {
            dispatch({ type: onOpen });
          };
          socket.onerror = () => {
            dispatch({ type: onError, payload: onError });
          };
          socket.onmessage = (event) => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            dispatch({ type: onMessage, payload: parsedData });
          };
          socket.onclose = () => {
            dispatch({ type: onClose });
          };
          if (type === wsDisconnect) {
            socket.close();
            socket = null;
          }
        }
        next(action);
      };
  };
};

export default socketMiddleware;
