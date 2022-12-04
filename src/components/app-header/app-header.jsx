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
import headerStyles from "./app-header.module.css";

function AppHeader(props) {
  return (
  <header className={`${headerStyles.header} pt-4 pb-4`}>
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

    </header>
  );
}

export default AppHeader;
