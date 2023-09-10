import { NavLink, Outlet } from "react-router-dom";
import pagesStyle from "./pages.module.css";
import { postLogoutUser } from "../services/actions/user";
import { FC } from 'react';
import { useDispatch } from "../services/types/hooks";


const Profile: FC = () => {
  const dispatch = useDispatch();
  const navButtonClassName = 'text text_type_main-medium pt-4 pb-4'
  const navButtonClassNameInactive = 'text text_type_main-medium text_color_inactive pt-4 pb-4'

  const onLogout = () => {
    dispatch(postLogoutUser(localStorage.getItem("refreshToken")));
  }

  return (
    <div className={pagesStyle.wrapper}>
      <div className={pagesStyle.profileContent}>
        <div className={pagesStyle.profileNav}>
          <NavLink to="/profile/" className={pagesStyle.linkText}>
            {({ isActive }) => { return (
                <p className={isActive ? navButtonClassName : navButtonClassNameInactive}>Профиль</p>
              )
            }}
          </NavLink>

          <NavLink to="orders" className={pagesStyle.linkText}>
            {({ isActive }) => { return (
                <p className={isActive ? navButtonClassName : navButtonClassNameInactive}>
                  История заказов</p>
              )
            }}
          </NavLink>


          <p onClick={onLogout} className={`${pagesStyle.buttonText} ${navButtonClassNameInactive}`}>
            Выход</p>

          <p className="text text_type_main-default text_color_inactive pt-20">
            В этом разделе вы можете изменить&nbsp;свои персональные данные
          </p>

        </div>
        <div className={pagesStyle.outlet}>
          <Outlet />
        </div>
      </div>
    </div>

  );
}

export default Profile;