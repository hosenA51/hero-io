import React from 'react';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import { Outlet, useRouteError } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

const Layout = () => {
    const error = useRouteError();
    return (
        <div className='bg-white'>
            <Navbar/>
            {error ? <ErrorPage/> : <Outlet/>}
            <Footer/>
        </div>
    );
};

export default Layout;