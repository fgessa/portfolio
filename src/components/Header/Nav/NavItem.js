import { NavLink } from 'react-router-dom';


function NavItem(props) {

    function closeMobileNavPanel() {
        const mobileNavClass = document.body.classList.value;
        if (mobileNavClass) {
            document.body.classList.remove(mobileNavClass);
        }
    }

    return (
        <li onClick={() => closeMobileNavPanel()}>
            <NavLink
                to={props.route.path}
                end
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                <i className={"bx " + props.route.icon}></i>
                <span>{props.route.text}</span>
            </NavLink>
        </li>

    );

}

export default NavItem;