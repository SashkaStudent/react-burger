import menuStyles from './nav-menu.module.css'

function NavMenu(props){
    return (
        <ul className={menuStyles.menu}>
            {props.children}
        </ul>
    )
}

export default NavMenu;