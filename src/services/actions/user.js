import { fetchWithRefresh, postAuth, postLogout } from "../../utils/api";

export const POST_AUTH = 'POST_AUTH';
export const POST_AUTH_SUCCESS = 'POST_AUTH_SUCCESS';
export const POST_AUTH_FAILED = 'POST_AUTH_FAILED';
export const POST_LOGOUT_USER = 'POST_LOGOUT_USER';
export const CHANGE_USER = 'CHANGE_USER';


// export const getLoginData = data => (dispatch) => {
//   dispatch(getUserDataInitial());
//   postLoginUser(data)
//       .then(checkResponse)
//       .then(res => {
//           localStorage.setItem("accessToken", res.accessToken);
//           localStorage.setItem("refreshToken", res.refreshToken);
//           dispatch(getUserSuccess(res))
//       })
//       .catch(err => dispatch(getUserDataFailed()))
// }

export function getLoginData(email, password) {
  return function (dispatch) {
    dispatch(getUserDataInitial());
    postAuth(email, password)
        .then(res => {
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            dispatch(getUserSuccess(res))
        })
        .catch(err => dispatch(getUserDataFailed()))
  }
}


export function checkUserAuth() {
  return function (dispatch) {
      if (localStorage.getItem("accessToken")) {
          fetchWithRefresh(localStorage.getItem("accessToken"))
              .then(res => {
                dispatch({ type: CHANGE_USER, data: { user: {name: res.user.name, email: res.user.email}} });
                dispatch(getUserSuccess(res))
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



// export const changeUserData: AppThunk = (method, endpoint) => (dispatch: AppDispatch) => {
//   if (localStorage.getItem("accessToken")) {
//       fetchWithRefresh(localStorage.getItem("accessToken"), method, endpoint )
//           .then(res => dispatch(changeUser(res)))
//           .catch(err => console.log(err))
//   }
// }

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