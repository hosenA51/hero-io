import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const AppCard = ({app}) => {
    return (
        <div className='mx-auto'>
            <div className="card w-80 shadow-sm h-96 bg-white">
                <figure className='px-6 pt-6'>
                    <img
                        src={app.image}
                        className='w-full h-60 bg-gray-200 rounded-md border'
                        alt="Shoes"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{app.title}</h2>
                    <div className="card-actions justify-between">
                        <button className="badge badge-soft text-green-500 bg-[#F5F5F5] border-none font-semibold"><FiDownload />{new Intl.NumberFormat("en-US", {
                            notation: "compact",
                            }).format(app.downloads)}</button>
                        <button className="badge badge-soft text-yellow-500 bg-[#F5F5F5] border-none font-semibold"><FaStar />{app.ratingAvg}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;