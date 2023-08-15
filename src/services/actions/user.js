import { fetchWithRefresh, patchUser, postAuth, postLogout } from "../../utils/api";
import { CHANGE_PROFILE_EMAIL, CHANGE_PROFILE_NAME } from "./profile";

export const POST_AUTH = 'POST_AUTH';
export const POST_AUTH_SUCCESS = 'POST_AUTH_SUCCESS';
export const POST_AUTH_FAILED = 'POST_AUTH_FAILED';
export const POST_LOGOUT_USER = 'POST_LOGOUT_USER';
export const CHANGE_USER = 'CHANGE_USER';


export function getLoginData(email, password) {
  return function (dispatch) {
    dispatch(getUserDataInitial());
    postAuth(email, password)
        .then(res => {
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            dispatch(getUserSuccess(res))
            dispatch({ type: CHANGE_PROFILE_NAME, name: res.user.name });
            dispatch({ type: CHANGE_PROFILE_EMAIL, email: res.user.email, valid: true })
        })
        .catch(err => dispatch(getUserDataFailed()))
  }
}


export function checkUserAuth() {
  return function (dispatch) {
      if (localStorage.getItem("accessToken")) {
          fetchWithRefresh(localStorage.getItem("accessToken"))
              .then(res => {
                dispatch(getUserSuccess(res));
                dispatch({ type: CHANGE_PROFILE_NAME, name: res.user.name });
                dispatch({ type: CHANGE_PROFILE_EMAIL, email: res.user.email, valid: true })

              }).catch(err => {console.log(err);dispatch(getUserDataFailed())})
      }
  };
};
export const postLogoutUser = data => (dispatch) => {
  postLogout(data)
      .then(res => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(logoutUser())
      })
      .catch(err => console.log(err))
}

export function changeUserData(token, endpoint) {
  return function (dispatch) {
    patchUser(token,endpoint);
  };
};

export const getUserDataInitial = () => {
  return {
      type: POST_AUTH
  }
}

export const getUserSuccess = (user) => {
  return {
      type: POST_AUTH_SUCCESS,
      payload: user
  }
}

export const getUserDataFailed = () => {
  return {
      type: POST_AUTH_FAILED
  }
}

export const logoutUser = () => {
  return {
      type: POST_LOGOUT_USER
  }
}

export const changeUser = (data) => {
  return {
      type: CHANGE_USER,
      payload: data
  }
}