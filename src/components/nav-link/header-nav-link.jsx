import { Link } from "react-router-dom";
import linkStyles from "./header-nav-link.module.css"

function HeaderNavLink(props) {
  return (
    
    <li className={`${linkStyles.link} pl-5 pr-5 pt-4 pb-4`}>
      
      {props.children}
      
    </li>
  );
}

export default HeaderNavLink;