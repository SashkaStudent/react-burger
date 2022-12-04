import linkStyles from "./nav-link.module.css"

function NavLink(props) {
  return (
    <li className={`${linkStyles.link} pl-5 pr-5 pt-4 pb-4`}>
      {props.children}
    </li>
  );
}

export default NavLink;