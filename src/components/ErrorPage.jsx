import React from 'react';
import errorImg from '../assets/error-404.png'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen py-8 bg-[#F5F5F5]'>
            <div className='space-y-5 text-center w-11/12 mx-auto'>
                <img className='mx-auto' src={errorImg} alt="" />
                <h1 className='text-4xl font-bold text-black pt-12'>OPPS!! PAGE NOT FOUND</h1>
                <p className='text-gray-500'>The page you are looking for is not available</p>
                <NavLink to="/" className="btn bg-linear-to-r from-[#6D28D9] to-[#8B5CF6] text-white w-28">Go Back</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;