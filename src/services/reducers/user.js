import { POST_AUTH, POST_AUTH_SUCCESS, POST_AUTH_FAILED, POST_LOGOUT_USER, CHANGE_USER } from "../actions/user"



const initialState = {
  feedRequest: false,
  feedFailed: false,
  isAuthenticated: false,
  name: '',
  email: '',
}

const userReducer = (state = initialState, action) => {
  switch ( action.type ) {
      case POST_AUTH:
          return {
              ...state,
              feedRequest: true,
              feedFailed: false
          }
      case POST_AUTH_SUCCESS:
          return {
              ...state,
              feedRequest: false,
              feedFailed: false,
              isAuthenticated: true,
              name: action.payload.user.name,
              email: action.payload.user.email
          }
      case POST_AUTH_FAILED:
          return {
              ...state,
              feedRequest: false,
              feedFailed: true,
              isAuthenticated: false,
              name: '',
              email: ''
          }
      case CHANGE_USER:
          return {
              ...state,
              name: action.data.user.name,
              email: action.data.user.email,
          }
      case POST_LOGOUT_USER:
          return {
              ...state,
              feedRequest: false,
              feedFailed: false,
              isAuthenticated: false,
              name: '',
              email: ''
          }
      default: {
          return state
      }
  }
}

export default userReducer;