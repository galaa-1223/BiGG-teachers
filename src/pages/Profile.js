import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../actions/auth";

const Profile = () => {
    const { user: currentUser } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout()); 
    };

    return (
        <div>
            <h3>
                <strong>{currentUser.data.ovog} {currentUser.data.ner}</strong> Profile
            </h3>
            Profile Page  
            <a href="/login" className="nav-link" onClick={logOut}>LogOut</a>
        </div>
    )
}

export default Profile;