import { useEffect, useMemo } from "react";
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
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "../pages/reset-password";
import Profile from "../pages/profile";
import { getItems } from "../../services/actions/burger-ingredients";
import IngredientDetailsPage from "../pages/ingredient-details-page";

function App() {
  const getIngredientsStore = store => store.ingredients;
  const getOrderStore = store => store.order;
  const { ingredients, ingredientsRequest, ingredientsFailed, choosedIngredient } = useSelector(getIngredientsStore);
//  const { choosedIngredient } = useSelector(getIngredientsStore);
  const { postOrderSuccess } = useSelector(getOrderStore);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(ingredients.length);
  useEffect(() => {
    dispatch(getItems())
    
}, [])

  const background = location.state && location.state.background;
  //
  const closeModal = () => {
    navigate(-1);
   // dispatch({ type: CLOSE_MODAL })
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
        <Routes location={background || location}>
          <Route path="/" element={
          <main className={styles.container}>
            
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
              {/* {
                (choosedIngredient || postOrderSuccess) && (
                  <Modal handleCloseOnClick={closeModal}>
                    {modalContent}
                  </Modal>
                )
              } */}
            </DndProvider>

          </main>} />
          <Route path='/ingredients/:ingredientId'
               element={(ingredients&&ingredients.length)&&(<IngredientDetailsPage/>)} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        {background && ( <Routes>
          <Route
	          path='/ingredients/:ingredientId'
	          element={
	            <Modal handleCloseOnClick={closeModal}>
                <>
	              {(ingredients&&ingredients.length)&&(<IngredientDetails/>)}
                </>
	            </Modal>
	          }
	        />
        </Routes>)}

    </div>
  );
}

export default App;
