import React from "react";

import Breadcrumb from './Breadcrumb';
// import Search from './Search';
import Notifications from './Notifications';
import AccountMenu from './AccountMenu';

const TopBar = (props) => {
    return (
        <div className="top-bar">
            <Breadcrumb />
            {/* <Search /> */}
            <Notifications />
            <AccountMenu />
        </div>

    );
};

export default TopBar;