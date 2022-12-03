import {
  Tab,
  Button,
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavLink from "../nav-link/nav-link";

import NavMenu from "../nav-menu/nav-menu";
import "./app-header.css";

function AppHeader(props) {
  return (
    <div className="app-header pt-4 pb-4">
      <NavMenu>
        <NavLink>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default">Конструктор</p>
        </NavLink>
        <NavLink>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
        </NavLink>
      </NavMenu>
      <Logo />
      <NavLink>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
      </NavLink>

    </div>
  );
}

export default AppHeader;
