import { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

import Logo from './Logo';

const SideMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    return (
        <nav className="side-nav">
            <Logo />
            <div className="side-nav__devider my-6"></div>
            <ul>
                <li>
                    <Link to="/dashboard" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <Icon.Home /> </div>
                        <div className="side-menu__title"> Dashboard </div>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="side-menu" onClick={toggling}>
                        <div className="side-menu__icon"> <Icon.Box /> </div>
                        <div className="side-menu__title">
                            Menu Layout 
                            <div className="side-menu__sub-icon"> <Icon.ChevronDown /> </div>
                        </div>
                    </Link>
                    <ul className={`${isOpen && ("side-menu__sub-open")}`}>
                        <li>
                            <Link to="#" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity /> </div>
                                <div className="side-menu__title"> Side Menu </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity /> </div>
                                <div className="side-menu__title"> Simple Menu </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="side-menu">
                                <div className="side-menu__icon"> <Icon.Activity /> </div>
                                <div className="side-menu__title"> Top Menu </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </nav>
    );
};

export default SideMenu;