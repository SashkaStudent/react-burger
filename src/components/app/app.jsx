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
import Login from "../../pages/login";
import Register from "../../pages/register";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import Profile from "../../pages/profile";
import { getItems } from "../../services/actions/burger-ingredients";
import IngredientDetailsPage from "../../pages/ingredient-details-page";
import { checkUserAuth } from "../../services/actions/user";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import NotFound from "../../pages/not-found";
//import OrderFeed from "../order-feed/order-feed";
import Feed from "../../pages/feed";

function App() {
  const getIngredientsStore = store => store.ingredients;
  const getOrderStore = store => store.order;
  const getUser = store => store.user;
  const { ingredients } = useSelector(getIngredientsStore);
//  const { choosedIngredient } = useSelector(getIngredientsStore);
  const { postOrderSuccess } = useSelector(getOrderStore);
  const user = useSelector(getUser);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
    dispatch(checkUserAuth(localStorage.getItem('accessToken')));
}, [])

  const background = location.state && location.state.background;
  //
  const closeModal = () => {
    navigate(-1);
   // dispatch({ type: CLOSE_MODAL })
  };
  const closeOrderModal = () => {
    dispatch({ type: CLOSE_MODAL })
  }

  const modalContent = useMemo(() => {
    if (postOrderSuccess) {
      return (
        <OrderDetails />
      );
    }
  }, [postOrderSuccess, closeOrderModal])


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
              { 
                (postOrderSuccess) && (
                  <Modal handleCloseOnClick={closeOrderModal}>
                    <OrderDetails />
                  </Modal>
                )
              } 
            </DndProvider>

          </main>} />
          <Route path='/ingredients/:ingredientId'
               element={(ingredients&&ingredients.length)&&(<IngredientDetailsPage/>)} />
          <Route path="/login" element={<OnlyUnAuth component={<Login/>}/>}/>
          <Route path="/register" element={<OnlyUnAuth component={<Register/>}/>}/>
          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword/>}/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/profile" element={<OnlyAuth component={<Profile/>}/>}/>
          <Route path="/feed" element={(ingredients&&ingredients.length)&&<Feed/>} />
          <Route path="*" element={<NotFound/>} />
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
