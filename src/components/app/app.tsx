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
import Feed from "../../pages/feed";
import OrderFeedDetails from "../../pages/order-feed-details";
import ProfileFeed from "../profile-feed/profile-feed";
import ProfileEdit from "../profile-edit/profile-edit";
import { CLOSE_MODAL } from "../../services/types/action-constants";

function App() {
  const getIngredientsStore = store => store.ingredients;
  const getOrderStore = store => store.order;
  const getUser = store => store.user;
  const { ingredients } = useSelector(getIngredientsStore);
  const { postOrderSuccess, postOrderRequest } = useSelector(getOrderStore);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
    dispatch(checkUserAuth(localStorage.getItem('accessToken')));
  }, [])

  const background = location.state && location.state.background;

  const closeModal = () => {
    navigate(-1);
  };
  const closeOrderModal = () => {
    dispatch({ type: CLOSE_MODAL })
  }


  return (
    <div className={styles.app}>

      <DndProvider backend={HTML5Backend}>

        <div className={styles.wrapper}>
          <AppHeader />
        </div>
        <Routes location={background || location}>
          <Route path="/" element={

            <main className={styles.container}>

              <BurgerIngredients />
              <BurgerConstructor />
              {
                (postOrderSuccess) ? (
                  <Modal handleCloseOnClick={closeOrderModal}>
                    <OrderDetails />
                  </Modal>
                ):(postOrderRequest)&&(
                  <Modal handleCloseOnClick={closeOrderModal}>
                  <p className="text text_type_main-medium p-15">Загрузка...</p>
                </Modal>
                )
              }

            </main>
          } />
          <Route path='/ingredients/:ingredientId'
            element={(ingredients && ingredients.length) && (<IngredientDetailsPage />)} />
          <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
          <Route path="/register" element={<OnlyUnAuth component={<Register />} />} />
          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword />} />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
            <Route path="/profile" element={<ProfileEdit />} />
            <Route path="/profile/orders" element={<ProfileFeed />} />
          </Route>
          <Route path="/profile/orders/:id" element={<OnlyAuth component={<OrderFeedDetails />} />} />
          <Route path="/feed">
            <Route index element={(ingredients && ingredients.length) && <Feed />} />
            <Route path=':id' element={<OrderFeedDetails />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        {background && (<Routes>
          <Route
            path='/ingredients/:ingredientId'
            element={
              <Modal handleCloseOnClick={closeModal}>
                <>
                  {(ingredients && ingredients.length) && (<IngredientDetails />)}
                </>
              </Modal>
            }
          />
          <Route path='/profile/orders/:id' element={
            <Modal handleCloseOnClick={closeModal}>
              <>
                {(<OrderFeedDetails />)}
              </>
            </Modal>
          } />
          <Route path='/feed/:id' element={
            <Modal handleCloseOnClick={closeModal}>
              <>
                {(<OrderFeedDetails />)}
              </>
            </Modal>
          } />
        </Routes>)
        }
      </DndProvider>

    </div>
  );
}

export default App;
