import './nav-menu.css'

function NavMenu(props){
    return (
        <ul className="nav-menu">
            {props.children}
        </ul>
    )
}

export default NavMenu;