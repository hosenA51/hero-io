import React from 'react';
import { Link } from 'react-router-dom';
import AppCard from './AppCard';

const TopApps = ({ apps }) => {
    console.log(apps)
    return (
        <div className='bg-[#F5F5F5] text-center space-y-6 pb-16'>
            <h1 className='text-4xl font-bold text-black pt-12'>Trending Apps</h1>
            <p className='text-gray-500'>Explore All Trending Apps On the Market developed by us</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto md:w-11/12'>
                {apps.slice(0, 8).map((app) => (
                    <AppCard key={app.id} app={app}/>
                ))}
            </div>
            <Link to="/apps" className="btn bg-linear-to-r from-[#6D28D9] to-[#8B5CF6] text-white w-28">
                Show All
            </Link>
        </div>
    );
};

export default TopApps;