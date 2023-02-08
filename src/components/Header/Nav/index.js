import NavItem from "./NavItem";
import "./style.css"


function Nav() {
    const routes = [
        {
            path: "/",
            icon: "bx-home",
            text: "Home"
        },
        {
            path: "/about",
            icon: "bx-user",
            text: "About"
        },
        {
            path: "/skills",
            icon: "bi-mortarboard",
            text: "Skills"
        },
        {
            path: "/projects",
            icon: "bx-book-content",
            text: "Projects"
        },
        {
            path: "/contact",
            icon: "bx-envelope",
            text: "Contact"
        }
    ]

    return (
        <nav id="navbar" className="navbar nav-menu">
            <ul>
                {
                    routes.map((route, index) => (
                        <NavItem route={route} key={index} />
                    ))
                }
            </ul>
        </nav>
    );


}

export default Nav;