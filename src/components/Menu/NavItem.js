import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather'

const NavItem = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <li>
            <Link to="#" className="side-menu" onClick={() => setOpen(!open)}>
                <div className="side-menu__icon"> <Icon.Home /> </div>
                <div className="side-menu__title"> 
                    Хянах самбар 
                    <Icon.ChevronDown className={`side-menu__sub-icon ${open && "transform rotate-180"}`} />
                </div>
            </Link>

            {open && props.children}
        </li>
    )
}

export default NavItem
