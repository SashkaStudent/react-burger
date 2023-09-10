import { FC } from 'react';
import menuStyles from './nav-menu.module.css'

type TNavMenu = {
  children?: JSX.Element;
}

const NavMenu: FC<TNavMenu> = ({children})=>{
    return (
        <ul className={menuStyles.menu}>
            {children}
        </ul>
    )
}

export default NavMenu;