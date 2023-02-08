import React from "react";
import "./style.css"


class MobileNav extends React.Component {
    activeClassName = "bi bi-x mobile-nav-toggle d-lg-none";
    defaultClassName = "bi bi-list mobile-nav-toggle d-lg-none"

    state = {
        isActive: false
    }

    toggleNav(e) {
        e.preventDefault();
        this.setState({ isActive: !this.state.isActive }, this.toggleClass);

    }

    toggleClass() {
        if (this.state.isActive) {
            document.body.classList.add('mobile-nav-active');
        } else {
            document.body.classList.remove('mobile-nav-active');
        }
    }

    render() {
        return (
            <i
                onClick={(e) => this.toggleNav(e)}
                className={this.state.isActive ? this.activeClassName : this.defaultClassName}
            ></i>
        );
    }
}

export default MobileNav;