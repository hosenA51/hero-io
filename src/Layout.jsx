import React from 'react';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import { Outlet, useRouteError, useNavigation } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Loader from './components/Loader';

const Layout = () => {
    const error = useRouteError();
    const navigation = useNavigation();

    return (
        <div className='bg-white'>
            <Navbar />

            {
                error ? (
                    <ErrorPage />
                ) : navigation.state === "loading" ? (
                    <Loader />
                ) : (
                    <Outlet />
                )
            }

            <Footer />
        </div>
    );
};

export default Layout;