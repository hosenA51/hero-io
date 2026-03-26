import React, { useState, useEffect } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import AppCard from './AppCard';
import errorImg from '../assets/App-Error.png';
import { FaSearch } from 'react-icons/fa';

const Apps = () => {
    const apps = useLoaderData();

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const delay = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(delay);
    }, [search]);

    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='bg-[#F5F5F5]'>
            <div className='w-11/12 text-center space-y-6 pb-16 mx-auto'>
                <h1 className='text-4xl font-bold text-black pt-12'>Our All Applications</h1>
                <p className='text-gray-500'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>

                <div className='flex justify-between mx-auto px-2'>
                    <h1 className='text-lg md:text-2xl font-semibold text-black'>
                        ({filteredApps.length}) Apps Found
                    </h1>

                    <div className='flex items-center border border-black rounded-sm px-2'>
                        <FaSearch className='text-gray-500' />
                        <input
                            className='text-gray-600 px-2 py-1 outline-none'
                            type="text"
                            placeholder='Search Apps'
                            name="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-10 text-black">
                        <span className="loading loading-dots loading-xl"></span>
                    </div>
                ) : (
                    <>
                        {filteredApps.length === 0 ? (
                            <div className='space-y-5'>
                                <img className='mx-auto' src={errorImg} alt="" />
                                <h1 className='text-4xl font-bold text-black pt-12'>
                                    OPPS!! APP NOT FOUND
                                </h1>
                                <p className='text-gray-500'>
                                    The App you are requesting is not found on our system. please try another apps
                                </p>
                                <NavLink
                                    to="/apps"
                                    onClick={() => setSearch("")}
                                    className="btn bg-linear-to-r from-[#6D28D9] to-[#8B5CF6] text-white w-28"
                                >
                                    Go Back
                                </NavLink>
                            </div>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                {filteredApps.map((app) => (
                                    <AppCard key={app.id} app={app} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Apps;