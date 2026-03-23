import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {

    const links = (
        <>
        <NavLink>Home</NavLink>
        <NavLink>Apps</NavLink>
        <NavLink>Installation</NavLink>
        </>
    )

    return (
        <div className="navbar bg-white w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow text-black bg-white">
                        {links}
                    </ul>
                </div>
                <a href='/' className="bg-linear-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent font-bold text-xl flex items-center"><img src={logo} className='w-10 h-10' alt="" /> HERO.IO</a>
            </div>
            <div className="navbar-center hidden lg:flex space-x-2.5 text-black">
                {links}
            </div>
            <div className="navbar-end">
                <a className="btn bg-linear-to-r from-[#6D28D9] to-[#8B5CF6] text-white" href="https://github.com/hosenA51" target="_blank"><span className='text-lg'><IoLogoGithub /></span> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;