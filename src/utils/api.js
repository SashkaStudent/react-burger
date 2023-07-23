const handleRes = (res) =>
  res.ok ? Promise.resolve(res) : Promise.reject(`Ошибка: ${res.status}`);

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
