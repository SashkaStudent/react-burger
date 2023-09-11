import { FC } from "react";
import { Link } from "react-router-dom";
import linkStyles from "./header-nav-link.module.css"

type THeaderNavLink = {
  children: JSX.Element[];
}

const HeaderNavLink: FC<THeaderNavLink> = ({children}) => {
  return (
    
    <li className={`${linkStyles.link} pl-5 pr-5 pt-4 pb-4`}>
      
      {children}
      
    </li>
  );
}

export default HeaderNavLink;