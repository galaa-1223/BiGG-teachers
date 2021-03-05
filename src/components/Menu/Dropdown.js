import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const Dropdown = (props) => {
    return (
        <CSSTransition in={props.open} timeout={350} classNames="side-menu__sub-open">
        <ul className="side-menu__sub-open">
            {props.children}
        </ul>
        </CSSTransition>
    )
}

export default Dropdown
