import React from "react";
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

const Search = (props) => {
    return (
        <div className="intro-x relative mr-3 sm:mr-6">
            <div className="search hidden sm:block">
                <input type="text" className="search__input input placeholder-theme-13" placeholder="Хайлт..." />
                <Icon.Search className="search__icon dark:text-gray-300" />
            </div>
            <Link className="notification sm:hidden" to=""> <i data-feather="search" className="notification__icon dark:text-gray-300"></i> </Link>
            <div className="search-result">
                <div className="search-result__content">
                    <div className="search-result__content__title">Pages</div>
                    <div className="mb-5">
                        <Link to="" className="flex items-center">
                            <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="inbox"></i> </div>
                            <div className="ml-3">Mail Settings</div>
                        </Link>
                        <Link to="" className="flex items-center mt-2">
                            <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="users"></i> </div>
                            <div className="ml-3">Users & Permissions</div>
                        </Link>
                        <Link to="" className="flex items-center mt-2">
                            <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="credit-card"></i> </div>
                            <div className="ml-3">Transactions Report</div>
                        </Link>
                    </div>
                    <div className="search-result__content__title">Users</div>
                    <div className="mb-5">
                        <Link to="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                {/* <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-10.jpg"> */}
                                Image
                            </div>
                            <div className="ml-3">Bruce Willis</div>
                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">brucewillis@left4code.com</div>
                        </Link>
                        <Link to="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                {/* <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg"> */}
                                Image
                            </div>
                            <div className="ml-3">Kevin Spacey</div>
                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">kevinspacey@left4code.com</div>
                        </Link>
                        <Link to="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                {/* <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-4.jpg"> */}
                                Image
                            </div>
                            <div className="ml-3">Russell Crowe</div>
                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">russellcrowe@left4code.com</div>
                        </Link>
                        <Link to="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                {/* <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-10.jpg"> */}
                                Image
                            </div>
                            <div className="ml-3">Russell Crowe</div>
                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">russellcrowe@left4code.com</div>
                        </Link>
                    </div>
                    <div className="search-result__content__title">Products</div>
                    <Link to="" className="flex items-center mt-2">
                        <div className="w-8 h-8 image-fit">
                            {/* <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-15.jpg"> */}
                            Image
                        </div>
                        <div className="ml-3">Oppo Find X2 Pro</div>
                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet</div>
                    </Link>
                    <Link to="" className="flex items-center mt-2">
                        <div className="w-8 h-8 image-fit">
                            {/* <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-12.jpg"> */}
                            Image
                        </div>
                        <div className="ml-3">Dell XPS 13</div>
                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">PC &amp; Laptop</div>
                    </Link>
                    <Link to="" className="flex items-center mt-2">
                        <div className="w-8 h-8 image-fit">
                            {/* <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-2.jpg"> */}
                            Image
                        </div>
                        <div className="ml-3">Nike Air Max 270</div>
                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Sport &amp; Outdoor</div>
                    </Link>
                    <Link to="" className="flex items-center mt-2">
                        <div className="w-8 h-8 image-fit">
                            {/* <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-3.jpg"> */}
                            Image
                        </div>
                        <div className="ml-3">Nike Air Max 270</div>
                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Sport &amp; Outdoor</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Search;