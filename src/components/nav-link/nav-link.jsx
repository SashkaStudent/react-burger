import "./nav-link.css"

function NavLink(props) {
  return (
    <li className="nav-link pl-5 pr-5 pt-4 pb-4">
      {props.children}
    </li>
  );
}

export default NavLink;