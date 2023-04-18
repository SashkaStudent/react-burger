import { useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CLOSE_MODAL } from "../../services/actions/modal";

function App() {
  const getIngredientsStore = store => store.ingredients;
  const getOrderStore = store => store.order;
  const { choosedIngredient } = useSelector(getIngredientsStore);
  const { postOrderSuccess } = useSelector(getOrderStore);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL })
  };

  const modalContent = useMemo(() => {
    if (postOrderSuccess) {
      return (
        <OrderDetails />
      );
    }
    else if (choosedIngredient) {
      return (
        <IngredientDetails />
      );

    }
  }, [postOrderSuccess, choosedIngredient, closeModal])


  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <AppHeader />
      </div>
      <main className={styles.container}>

        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
          {
            (choosedIngredient || postOrderSuccess) && (
              <Modal handleCloseOnClick={closeModal}>
                {modalContent}
              </Modal>
            )
          }
        </DndProvider>

      </main>
    </div>
  );
}

export default App;
