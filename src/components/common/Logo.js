import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
    return (
        <>
            <Link to="" className="intro-x flex items-center pl-5 pt-4">
                <img alt="BiGG systems" className="w-6" src="/images/logo.svg" />
                <span className="hidden xl:block text-white text-lg ml-3"><span className="font-medium">BiGG</span> systems</span>
            </Link>
        </>
    );
};

export default Logo;