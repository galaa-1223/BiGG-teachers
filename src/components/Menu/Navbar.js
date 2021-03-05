import React from 'react';
import Logo from '../common/Logo'

const Navbar = (props) => {
    return (
        <nav className="side-nav">
            <Logo />
            <div className="side-nav__devider my-6"></div>
            <ul>{props.children}</ul>
        </nav>
    )
}

export default Navbar;


