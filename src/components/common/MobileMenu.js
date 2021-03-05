import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

const MobileMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(true);
    
    const toggling = () => setIsOpen(!isOpen);
    const togglingMenu = () => setIsOpenMenu(!isOpenMenu);

    return (
        <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <Link to="#" className="flex mr-auto">
                    <img alt="BiGG systems" className="w-6" src="/images/logo.svg" />
                </Link>
                <Link to="#" onClick={togglingMenu}> <Icon.BarChart2 className="w-8 h-8 text-white transform -rotate-90" /> </Link>
            </div>
            <ul className={`border-t border-theme-24 py-5 ${isOpenMenu && ("hidden")}`}>
                <li>
                    <Link to="#" className="menu menu--active">
                        <div className="menu__icon"> <Icon.Home /> </div>
                        <div className="menu__title"> Dashboard </div>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="menu" onClick={toggling}>
                        <div className="menu__icon"> <Icon.Box /> </div>
                        <div className="menu__title"> Menu Layout <Icon.ChevronDown className="menu__sub-icon" /> </div>
                    </Link>
                    <ul className={`${isOpen && ("menu__sub-open")}`}>
                        <li>
                            <Link to="#" className="menu">
                                <div className="menu__icon"> <Icon.Activity /> </div>
                                <div className="menu__title"> Side Menu </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="menu">
                                <div className="menu__icon"> <Icon.Activity /> </div>
                                <div className="menu__title"> Simple Menu </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="menu">
                                <div className="menu__icon"> <Icon.Activity /> </div>
                                <div className="menu__title"> Top Menu </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </div>
    );
};

export default MobileMenu;