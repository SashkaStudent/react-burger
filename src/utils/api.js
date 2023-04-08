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
        "ingredients": ingredients,
      }),
    })
      .then(handleRes)
      .then(handleJson);
  };