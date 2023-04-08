import React, { useEffect, useContext, useState } from "react";
import styles from "./app.module.css";
import { getData, postData } from "../../utils/api";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import { randomInt } from "../../utils/helpers.js";
import {
  ConstructorContext,
  OrderContext,
} from "../../services/constructorContext";

function App() {
  const [state, setState] = React.useState({
    data: null,
    isLoaded: false,
    status: "Loading...",
  });

  const [modalIsOpened, setModalOpened] = React.useState(false);
  const [ingredientChoosed, setIngredient] = React.useState(null);
  const [orderNumber, setOrderNumber] = React.useState(0);

  useEffect(() => {
    getData()
      .then((o) => {
        setState({ data: o.data, isLoaded: true });
        console.log(o.data);
      })
      .catch((e) => {
        setState({ data: null, isLoaded: false, status: `${e}` });
      });
  }, []);

  const openModal = (e, ingredient) => {
    if (ingredient) {
      setIngredient(ingredient);
      setModalOpened(true);
    } else {

      const choosedIngredients = state.data.map((i) => i._id);

      postData(choosedIngredients)
        .then((o) => {
          console.log(o.order.number);
          setOrderNumber(o.order.number);
          setModalOpened(true)
        })
        .catch((e) => {})

    }
  };

  const closeModal = (e) => {
    setModalOpened(false);
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
          <ConstructorContext.Provider
              value={{ bun: state.data[0], ingredients: state.data.slice(5) }}
            >
            <BurgerIngredients
              data={state.data}
              handleOnIngredientChoose={openModal}
            />

            
              <BurgerConstructor
                handleMakeOrderClick={(e) => openModal(e, null)}
              />
            </ConstructorContext.Provider>

            {modalIsOpened && (
              <Modal handleCloseOnClick={closeModal}>
                {ingredientChoosed ? (
                  <IngredientDetails ingredient={ingredientChoosed} />
                ) : (
                  <OrderContext.Provider value={orderNumber}>
                    <OrderDetails/>
                  </OrderContext.Provider>
                )}
              </Modal>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
