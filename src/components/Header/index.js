import MobileNav from "./MobileNav";
import Nav from "./Nav";
import "./style.css"


function Header() {
    return (
        <header id="header" className="d-flex flex-column justify-content-center">
            <MobileNav />
            <Nav />
        </header>
    );
}

export default Header;