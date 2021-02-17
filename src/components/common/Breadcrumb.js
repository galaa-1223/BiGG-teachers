import React from "react";
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
    return (
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex"> 
            <Link to="#" className="">Application</Link> 
            <Icon.ChevronRight className="breadcrumb__icon" />
            <Link to="/dashboard" className="breadcrumb--active">Dashboard</Link> 
        </div>
    );
};

export default Breadcrumb;