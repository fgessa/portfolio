import NavItem from "./NavItem";
import "./style.css"


function Nav() {
    const routes = [
        {
            path: "/portfolio/",
            icon: "bx-home",
            text: "Home"
        },
        {
            path: "/portfolio/about",
            icon: "bx-user",
            text: "About"
        },
        {
            path: "/portfolio/skills",
            icon: "bi-mortarboard",
            text: "Skills"
        },
        {
            path: "/portfolio/projects",
            icon: "bx-book-content",
            text: "Projects"
        },
        {
            path: "/portfolio/contact",
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