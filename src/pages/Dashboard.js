import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import { getStatistics } from '../actions/statistics';

import SideMenu from '../components/common/SideMenu';
import TopBar from '../components/common/TopBar';
import MobileMenu from '../components/common/MobileMenu';
import ReportBox from '../components/ReportBox/ReportBox';

const Dashboard = () => {

    const pageName = "Хянах самбар";

    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.auth);

    // const { user: currentUser } = useSelector((state) => state.auth);
    const { loading, error, data } = useSelector((state) => state.statistics);
  
    
    useEffect(() => {
        dispatch(getStatistics()) 
    }, [dispatch])

    // const logOut = () => {
    //     dispatch(logout()); 
    // };

    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    
    // console.log(data.data);

    return (
        <>
            <MobileMenu />
            <div className="flex">
                <SideMenu/>
                <div className="content">
                    <TopBar pageName={pageName}/>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
                            <div className="col-span-12 mt-8">
                                <div className="intro-y flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        General Reportdd
                                    </h2>
                                    <a href="" className="ml-auto flex text-theme-1 dark:text-theme-10"> <i data-feather="refresh-ccw" className="w-4 h-4 mr-3"></i> Reload Data </a>
                                </div>
                                <div className="grid grid-cols-12 gap-6 mt-5">
                                    {/* {loading ? "Loading..." : error ? error.message : data.map(u => <h3>{console.log(u)}</h3>)} */}
                                    {console.log(data)}
                                    <ReportBox title="Оюутан" icon="credit-card" count="12" rclass="text-theme-9" />
                                    <ReportBox title="Багш" icon="credit-card" count="0" rclass="text-theme-11" />
                                </div>
                            </div>
                            
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Dashboard;