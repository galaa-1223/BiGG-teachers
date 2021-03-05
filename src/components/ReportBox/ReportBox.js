import React from "react";
import * as Icon from 'react-feather';

const ReportBox = ({ title, icon, count, rclass }) => {
    return (
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div className="report-box zoom-in">
                <div className="box p-5">
                    <div className="flex">
                        <Icon.ShoppingCart className={`report-box__icon ${rclass}`} />
                    </div>
                    <div className="text-3xl font-bold leading-8 mt-6">{count}</div>
                    <div className="text-base text-gray-600 mt-1">{title}</div>
                </div>
            </div>
        </div>
    );
};

export default ReportBox;