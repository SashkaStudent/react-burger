import type { TProfileFeedAction } from "../actions/profile-feed";
import { WS_PROFILE_FEED_CONNECTING, WS_PROFILE_FEED_DISCONNECT, WS_PROFILE_FEED_ERROR, WS_PROFILE_FEED_MESSAGE, WS_PROFILE_FEED_OPEN } from "../types/action-constants";
import { IOrders } from "../types/order";

type TProfileFeedState = {
  readonly status: string;
  readonly orders: IOrders;
  readonly connectingError: string;
}

const initialState: TProfileFeedState = {
  status: "Disconnect",
  orders:
    {
      success: true,
      orders: [],
      total: "",
      totalToday: "",
    },
  connectingError: "",
};

const profileFeedReducer = (state = initialState, action: TProfileFeedAction): TProfileFeedState => {
  switch (action.type) {
    case WS_PROFILE_FEED_CONNECTING:
      return {
        ...state,
        status: "Conneting",
      };
    case WS_PROFILE_FEED_OPEN:
      return {
        ...state,
        status: "Open",
        connectingError: "",
      };
    case WS_PROFILE_FEED_DISCONNECT:
      return {
        ...state,
        status: "Disconnect",
      };
    case WS_PROFILE_FEED_ERROR:
      return {
        ...state,
        connectingError: action.payload,
      };
    case WS_PROFILE_FEED_MESSAGE:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default profileFeedReducer;
