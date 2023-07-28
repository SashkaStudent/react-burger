const handleRes = (res) =>
  res.ok ? Promise.resolve(res) : res.json().then((err) => Promise.reject(err));

const handleJson = (res) => res.json();

export const getData = () => {
  return fetch(`https://norma.nomoreparties.space/api/ingredients`)
    .then(handleRes)
    .then(handleJson);
};

export const postData = (ingredients) => {
  return fetch(`https://norma.nomoreparties.space/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  })
    .then(handleRes)
    .then(handleJson);
};

export const postPasswordReset = (email) => {
  return fetch(`https://norma.nomoreparties.space/api/password-reset`, {
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
  return fetch(`https://norma.nomoreparties.space/api/password-reset/reset`, {
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
  return fetch(`https://norma.nomoreparties.space/api/auth/register`, {
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

  return fetch(`https://norma.nomoreparties.space/api/auth/login`,{
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

// const handleRes = (res) => {
//   return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
// };

export const refreshToken = () => {
  return fetch(`https://norma.nomoreparties.space/api/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(handleRes);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await handleRes(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await handleRes(res);
    } else {
      return Promise.reject(err);
    }
  }
};