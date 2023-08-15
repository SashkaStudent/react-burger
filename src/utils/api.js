import { BASE_URL_API } from "./data";

const handleRes = (res) =>
  { 
    return res.ok ? Promise.resolve(res) : res.json().then((err) => Promise.reject(err));
}
const handleJson = (res) =>
  res.json();

export const getData = () => {
  return fetch(`${BASE_URL_API}/ingredients`)
    .then(handleRes)
    .then(handleJson);
};

export const postData = (ingredients, accessToken) => {
  return fetch(`${BASE_URL_API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": accessToken
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  })
    .then(handleRes)
    .then(handleJson);
};

export const postPasswordReset = (email) => {
  return fetch(`${BASE_URL_API}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then(handleRes)
    .then(handleJson);
};

export const postNewPassword = (password, token) => {
  return fetch(`${BASE_URL_API}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  })
    .then(handleRes)
    .then(handleJson);
};

export const postRegister = (name, email, password) => {
  return fetch(`${BASE_URL_API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  })
    .then(handleRes)
    .then(handleJson);
};

export const postAuth = (email, password) =>{

  return fetch(`${BASE_URL_API}/auth/login`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": email, 
      "password": password 
  } )
  })
  .then(handleRes)
  .then(handleJson);

};

export const postLogout = (data) =>{
  return fetch(`${BASE_URL_API}/auth/logout`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          token: data
      })
  })
  .then(handleRes)
  .then(handleJson);
}

export const refreshToken = () => {
  return fetch(`${BASE_URL_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(handleRes);
};

export const patchUser = async (token, endpoint) => {
  const res = await fetchWithRefresh(token, 'PATCH', endpoint);
  return await res;
}

export const fetchWithRefresh = async (token, method, endpoint) => {
 
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: token
    },
    body: JSON.stringify(endpoint)
  }
  
  
  try {

    const res = await fetch(`${BASE_URL_API}/auth/user`, options).then(handleRes).then(handleJson);   
    return await res;
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      };
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(`${BASE_URL_API}/auth/user`, options); //повторяем запрос
      return await handleRes(res);
    } else {
      return Promise.reject(err);
    }
  }
};