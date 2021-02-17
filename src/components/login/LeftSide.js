import React from 'react';

const LeftSide = () => {

    return (
        <div className="hidden xl:flex flex-col min-h-screen">
            <a href="" className="-intro-x flex items-center pt-5">
                <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="/images/logo.svg" />
                <span className="text-white text-lg ml-3"><span className="font-medium">BiGG</span> systems</span>
            </a>
            <div className="my-auto">
                <img alt="Midone Tailwind HTML Admin Template" className="-intro-x w-1/2 -mt-16" src="/images/illustration.svg" />
                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                    Bla bla bla...
                    <br />
                    bla bla bla...
                </div>
                <div className="-intro-x mt-5 text-lg text-white dark:text-gray-500">Bla bla blaa...</div>
            </div>
        </div>
    )
}

export default LeftSide;