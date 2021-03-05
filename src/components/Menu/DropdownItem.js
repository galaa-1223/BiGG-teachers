import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather'

const DropdownItem = () => {
    return (
        <li>
            <Link to="#" className="side-menu">
                <div className="side-menu__icon"> <Icon.Activity /> </div>
                <div className="side-menu__title"> Simple Menu </div>
            </Link>
        </li>

    )
}

export default DropdownItem
