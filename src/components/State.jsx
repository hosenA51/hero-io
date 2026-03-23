import React from 'react';

const State = () => {
    return (
        <div className='bg-linear-to-r from-[#6D28D9] to-[#8B5CF6]'>
            <div className="w-11/12 mx-auto text-white py-12 text-center">
                <div>
                    <h1 className='text-3xl font-bold mb-12'>Trusted by Millions, Built for You</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-7/12 mx-auto">
                    <div className='space-y-5'>
                        <p className='text-gray-300'>Total Downloads</p>
                        <h2 className="text-5xl font-bold">29.6M</h2>
                        <p className='text-gray-300'>21% More Than Last Month</p>
                    </div>
                    <div className='space-y-5'>
                        <p className='text-gray-300'>Total Reviews</p>
                        <h2 className="text-5xl font-bold">906K</h2>
                        <p className='text-gray-300'>46% More Than Last Month</p>
                    </div>
                    <div className='space-y-5'>
                        <p className='text-gray-300'>Active Apps</p>
                        <h2 className="text-5xl font-bold">132+</h2>
                        <p className='text-gray-300'>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;