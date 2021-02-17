import React,{ useRef } from "react";
import { Link } from "react-router-dom";
import { useDropDown } from './useDropDown';
import * as Icon from 'react-feather';

const Notifications = (props) => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDropDown(dropdownRef, false);
    const handleToggle = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="intro-x dropdown mr-auto sm:mr-6">
            <div className="dropdown-toggle notification notification--bullet cursor-pointer" onClick={handleToggle}> 
                <Icon.Bell className="notification__icon dark:text-gray-300" />
            </div>
            <div className={`notification-content pt-2 dropdown-box ${isActive ? "show" : ""}`} ref={dropdownRef} style={{transform: "translate3d(-315px, 24px, 0px)"}}>
                <div className="notification-content__box dropdown-box__content box dark:bg-dark-6">
                    <div className="notification-content__title">Мэдэгдэл</div>
                    
                    <div className="cursor-pointer relative flex items-center ">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            {/* <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-10.jpg"> */}
                            Image
                            <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <Link to="" className="font-medium truncate mr-5">Идэр зду</Link> 
                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">06:05 AM</div>
                            </div>
                            <div className="w-full truncate text-gray-600 mt-0.5">Нэг юм хийсэн</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Notifications;