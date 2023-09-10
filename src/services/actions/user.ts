import {
  fetchWithRefresh,
  patchUser,
  postAuth,
  postLogout,
} from "../../utils/api";
import { AppDispatch, AppThunk } from "../store/store-types";
import { CHANGE_PROFILE_EMAIL, CHANGE_PROFILE_NAME, CHANGE_USER, POST_AUTH, POST_AUTH_FAILED, POST_AUTH_SUCCESS, POST_LOGOUT_USER } from "../types/action-constants";

interface IPayload {
  user: IUser;
}

interface IUser {
  name: string;
  email: string;
}

export interface IPostAuth {
  readonly type: typeof POST_AUTH;
}

export interface IPostAuthSuccess {
  readonly type: typeof POST_AUTH_SUCCESS;
  readonly payload: IPayload;
}


export interface IPostAuthFailed {
  readonly type: typeof POST_AUTH_FAILED;
}


export interface IPostLogout {
  readonly type: typeof POST_LOGOUT_USER;
}

export interface IChangeUser {
  readonly type: typeof CHANGE_USER;
  readonly data: IPayload;
}



export type TUserAction = IPostAuth | IPostAuthSuccess | IPostAuthFailed | IPostLogout | IChangeUser;

export const getLoginData: AppThunk = (email: string, password: string) => (dispatch: AppDispatch) => {
    dispatch(getUserDataInitial());
    postAuth(email, password)
      .then((res) => {
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch(getUserSuccess(res));
        dispatch({ type: CHANGE_PROFILE_NAME, name: res.user.name });
        dispatch({
          type: CHANGE_PROFILE_EMAIL,
          email: res.user.email,
          valid: true,
        });
      })
      .catch((err) => dispatch(getUserDataFailed()));
  };

export const checkUserAuth:AppThunk = () => (dispatch: AppDispatch) => {
    if (localStorage.getItem("accessToken")) {
      fetchWithRefresh(localStorage.getItem("accessToken"))
        .then((res) => {
          dispatch(getUserSuccess(res));
          dispatch({ type: CHANGE_PROFILE_NAME, name: res.user.name });
          dispatch({
            type: CHANGE_PROFILE_EMAIL,
            email: res.user.email,
            valid: true,
          });
        })
        .catch((err) => {
          console.log(err);
          dispatch(getUserDataFailed());
        });
    }
  };

export const postLogoutUser: AppThunk = (data: object) => (dispatch: AppDispatch) => {
  postLogout(data)
    .then((res) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(logoutUser());
    })
    .catch((err) => console.log(err));
};

export const changeUserData: AppThunk = (token: string, endpoint: object) => (dispatch: AppDispatch) => {
    patchUser(token, endpoint);
  };

export const getUserDataInitial = () => {
  return {
    type: POST_AUTH,
  };
};

export const getUserSuccess = (user: IPayload) => {
  return {
    type: POST_AUTH_SUCCESS,
    payload: user,
  };
};

export const getUserDataFailed = () => {
  return {
    type: POST_AUTH_FAILED,
  };
};

export const logoutUser = () => {
  return {
    type: POST_LOGOUT_USER,
  };
};

export const changeUser = (data: IPayload) => {
  return {
    type: CHANGE_USER,
    payload: data,
  };
};
