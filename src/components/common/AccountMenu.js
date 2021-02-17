import React,{ useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDropDown } from './useDropDown';
import * as Icon from 'react-feather';

import { logout } from "../../actions/auth";

const AccountMenu = (props) => {

    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useDropDown(dropdownRef, false);

    const { user: currentUser } = useSelector((state) => state.auth);
    
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout()); 
    };

    const handleToggle = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="intro-x dropdown w-8 h-8">
            <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" onClick={handleToggle}>
                <img alt={`${currentUser.data.ovog} ${currentUser.data.ner}`} src={`http://localhost:8000/uploads/teachers/thumbs/${currentUser.data.image}`} />
                Image
            </div>
            <div className={`dropdown-box w-56 ${isActive ? "show" : ""}`} ref={dropdownRef} style={{transform: "translate3d(-190px, 40px, 0px)"}}>
                <div className="dropdown-box__content box bg-theme-38 dark:bg-dark-6 text-white">
                    <div className="p-4 border-b border-theme-40 dark:border-dark-3">
                        <div className="font-medium">{currentUser.data.ner}</div>
                        <div className="text-xs text-theme-41 mt-0.5 dark:text-gray-600">Мэргэжил</div>
                    </div>
                    <div className="p-2">
                        <Link to="#" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> 
                            <Icon.User className="w-4 h-4 mr-2" /> Профайл 
                        </Link>
                        <Link to="#" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> 
                            <Icon.Lock className="w-4 h-4 mr-2" /> Нууц үг солих 
                        </Link>
                        <Link to="#" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> 
                            <Icon.HelpCircle className="w-4 h-4 mr-2" /> Тусламж 
                        </Link>
                    </div>
                    <div className="p-2 border-t border-theme-40 dark:border-dark-3">
                        <Link to="#" onClick={logOut} className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> 
                            <Icon.ToggleRight className="w-4 h-4 mr-2" /> Гарах 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountMenu;