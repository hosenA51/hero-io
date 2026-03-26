import React, { useEffect, useState } from 'react';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import { Outlet, useRouteError, useNavigation } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Loader from './components/Loader';

const Layout = () => {
    const error = useRouteError();
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bg-white'>
            <Navbar />

            {
                error ? (
                    <ErrorPage />
                ) : isLoading ? (
                    <Loader />
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