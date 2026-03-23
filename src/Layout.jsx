import React from 'react';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='bg-white'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;