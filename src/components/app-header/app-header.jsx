import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import HeaderNavLink from "../nav-link/header-nav-link";

import NavMenu from "../nav-menu/nav-menu";
import headerStyles from "./app-header.module.css";



function AppHeader() {

  const isAuthChecked = useSelector(state => state.user.isAuthenticated);
  const switchNavLink = () => {
    if (isAuthChecked) {
        return '/profile/';
    }
    return '/login';
}

  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <NavMenu>
        <NavLink to="/" className={headerStyles.linkText}>
          {({ isActive, isPending }) => (
            <HeaderNavLink>
              <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
              <p className={isActive ? "text text_type_main-default" : "text text_type_main-default text_color_inactive"}>Конструктор</p>
            </HeaderNavLink>
          )}
        </NavLink>
        
        <NavLink to="/feed" className={headerStyles.linkText}>
        {({ isActive, isPending }) => (
          <HeaderNavLink>
            <ListIcon type={isActive ? 'primary' : 'secondary'} />
            <p className={isActive ? "text text_type_main-default" : "text text_type_main-default text_color_inactive"}>Лента заказов</p>
          </HeaderNavLink>
        )}
        </NavLink>
      </NavMenu>
      <Logo />

      <NavLink to={switchNavLink()} className={headerStyles.linkText}>
      {({ isActive, isPending }) => (
        <HeaderNavLink>
          <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
          <p className={isActive ? "text text_type_main-default" : "text text_type_main-default text_color_inactive"}>Личный кабинет</p>
        </HeaderNavLink>
      )}
      </NavLink>
    </header>
  );
}

export default AppHeader;
