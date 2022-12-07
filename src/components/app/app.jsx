import React from "react";
import data from "../../utils/data.js";
import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";

function App() {
  const [modalIsOpened, setState] = React.useState(false);
  const [ingredientChoosed, setIngredient] = React.useState(null);


  const openModal = (e, ingredient) => {
    setState(true);
    if(ingredient){
      setIngredient(ingredient);
    }
  };

  const closeModal = (e) => {
    setState(false);
  };

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <AppHeader />
      </div>
      <main className={styles.container}>
        <BurgerIngredients data={data} handleOnIngredientChoose={openModal}></BurgerIngredients>
        <BurgerConstructor
          data={data.filter((val) => val.type !== "bun")}
          bun={data[0]}
          handleMakeOrderClick={(e)=>openModal(e, null)}
        ></BurgerConstructor>
        <ModalOverlay
          isEnabled={modalIsOpened}
          handleOnClose={closeModal}
        >
          <Modal handleCloseOnClick={closeModal}>
            {/* <OrderDetails /> */}
            {ingredientChoosed?
            <IngredientDetails ingredient={ingredientChoosed}/>:null}
          </Modal>
        </ModalOverlay>
      </main>
    </div>
  );
}

export default App;
