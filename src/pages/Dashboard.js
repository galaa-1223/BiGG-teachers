import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import { logout } from "../actions/auth";

import SideMenu from '../components/common/SideMenu';
import TopBar from '../components/common/TopBar';

const Dashboard = () => {
    const { isLoggedIn } = useSelector(state => state.auth);

    const { user: currentUser } = useSelector((state) => state.auth);
    
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout()); 
    };

    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="flex">
            <SideMenu />
            <div className="content">
                <TopBar />
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
                        <div className="col-span-12 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    General Report
                                </h2>
                                <a href="" className="ml-auto flex text-theme-1 dark:text-theme-10"> <i data-feather="refresh-ccw" className="w-4 h-4 mr-3"></i> Reload Data </a>
                            </div>
                            <div className="grid grid-cols-12 gap-6 mt-5">
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="shopping-cart" className="report-box__icon text-theme-10"></i> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="33% Higher than last month"> 33% <i data-feather="chevron-up" className="w-4 h-4"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">4.510</div>
                                            <div className="text-base text-gray-600 mt-1">Item Sales</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="credit-card" className="report-box__icon text-theme-11"></i> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-theme-6 tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-feather="chevron-down" className="w-4 h-4"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">3.521</div>
                                            <div className="text-base text-gray-600 mt-1">New Orders</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="monitor" className="report-box__icon text-theme-12"></i> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="12% Higher than last month"> 12% <i data-feather="chevron-up" className="w-4 h-4"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">2.145</div>
                                            <div className="text-base text-gray-600 mt-1">Total Products</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="user" className="report-box__icon text-theme-9"></i> 
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="22% Higher than last month"> 22% <i data-feather="chevron-up" className="w-4 h-4"></i> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">152.000</div>
                                            <div className="text-base text-gray-600 mt-1">Unique Visitor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard;