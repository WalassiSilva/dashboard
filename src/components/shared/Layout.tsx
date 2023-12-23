import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className='bg-sky-200 text-red-800 font-bold'>SideBar </div>
            <div className='bg-teal-200'>Header</div>
            <div>{<Outlet />}</div>
        </>
    )
}

export { Layout }