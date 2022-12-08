import React, { useEffect } from "react";
import data from "../../utils/data.js";
import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import { addLeadingZeros, randomInt } from "../../utils/helpers.js";

function App() {
  const [state, setState] = React.useState({
    data: null,
    isLoaded: false,
    status: "Loading...",
  });

  const [modalIsOpened, setModalState] = React.useState(false);
  const [ingredientChoosed, setIngredient] = React.useState(null);
  const [orderNumber, setOrderNumber] = React.useState(0);

  useEffect(() => {
    const handleRes = (res) =>
      res.ok ? Promise.resolve(res) : Promise.reject(`Ошибка: ${res.status}`);
    const handleJson = (res) => res.json();

    const getData = () => {
      return fetch(`https://norma.nomoreparties.space/api/ingredients`)
        .then(handleRes)
        .then(handleJson);
    };

    getData()
      .then((o) => {
        setState({ data: o.data, isLoaded: true });
      })
      .catch((e) => {
        setState({ data: null, isLoaded: false, status: `${e}` });
      });
  }, []);

  const openModal = (e, ingredient) => {
    setModalState(true);
    if (ingredient) {
      setIngredient(ingredient);
    } else {
      const randomOrderNumber = addLeadingZeros(randomInt(999999));
      setOrderNumber(randomInt(randomOrderNumber));
    }
  };

  const closeModal = (e) => {
    setModalState(false);
    setIngredient(null);
  };

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <AppHeader />
      </div>
      <main className={styles.container}>
        {!state.isLoaded ? (
          <div className={styles.status}>
            <p className={`text text_type_main-default text_color_inactive`}>
              {state.status}
            </p>
          </div>
        ) : (
          <>
            <BurgerIngredients
              data={data}
              handleOnIngredientChoose={openModal}
            ></BurgerIngredients>
            <BurgerConstructor
              data={data.filter((val) => val.type !== "bun")}
              bun={data[0]}
              handleMakeOrderClick={(e) => openModal(e, null)}
            ></BurgerConstructor>
            <ModalOverlay isOpened={modalIsOpened} handleOnClose={closeModal}>
              <Modal handleCloseOnClick={closeModal}>
                {ingredientChoosed ? (
                  <IngredientDetails ingredient={ingredientChoosed} />
                ) : (
                  <OrderDetails orderNumber={orderNumber} />
                )}
              </Modal>
            </ModalOverlay>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
