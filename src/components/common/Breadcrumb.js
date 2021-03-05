import React from "react";
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
    return (
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex"> 
            <Link to="/dashboard" className="breadcrumb--active">{props.pageName}</Link> 
            <Icon.ChevronRight className="breadcrumb__icon" />
        </div>
    );
};

export default Breadcrumb;