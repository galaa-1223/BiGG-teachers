import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../actions/auth";

const Profile = () => {

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <div>
            Profile Page  
            <a href="/login" className="nav-link" onClick={logOut}>LogOut</a>
        </div>
    )
}

export default Profile;