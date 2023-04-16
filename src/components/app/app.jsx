import { useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import { CLOSE_MODAL } from "../../services/actions/burger-ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {

  const { popupOrderIsOpen, popupDetailsIsOpen } = useSelector(store => store.ingredients);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL })
  };

  const modalContent = useMemo(() => {
    if (popupOrderIsOpen) {
      return (
        <Modal handleCloseOnClick={closeModal}>
          <OrderDetails />
        </Modal>
      );
    }
    else if (popupDetailsIsOpen) {

      return (
        <Modal handleCloseOnClick={closeModal}>
          <IngredientDetails />
        </Modal>
      );

    }
  }, [popupOrderIsOpen, popupDetailsIsOpen, closeModal])


  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <AppHeader />
      </div>
      <main className={styles.container}>
      
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
              {modalContent}
            </DndProvider>
         
      </main>
    </div>
  );
}

export default App;
