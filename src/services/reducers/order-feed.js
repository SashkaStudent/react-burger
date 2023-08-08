import { WS_ORDER_FEED_CONNECTING, WS_ORDER_FEED_OPEN, WS_ORDER_FEED_DISCONNECT, WS_ORDER_FEED_ERROR, WS_ORDER_FEED_MESSAGE } from "../actions/order-feed";


const initialState = {
    status: "Disconnect",
    orders: [{
        success: true,
        orders: [],
        total: '',
        totalToday: '',
    }],
    connectingError: ''
};

const orderFeedReducer = (state = initialState, action) => {
  console.log(state, action);
    switch (action.type)
    {
        case WS_ORDER_FEED_CONNECTING:
            return {
                ...state,
                status: "Conneting"
            };
        case WS_ORDER_FEED_OPEN:
            return {
                ...state,
                status: "Open",
                connectingError: ''
            };
        case WS_ORDER_FEED_DISCONNECT:
            return {
                ...state,
                status: "Disconnect",
            };
        case WS_ORDER_FEED_ERROR:
            return {
                ...state,
                connectingError: action.payload
            };
        case WS_ORDER_FEED_MESSAGE:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state;
    }
}

export default orderFeedReducer;