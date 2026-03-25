import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
    const app = useLoaderData();
    const [installed, setInstalled] = useState(false);

    const chartData = [...app.ratings].reverse();

    const handleInstall = () => {
        setInstalled(true);
        toast.success("App Installed Successfully");
    };

    return (
        <div className="bg-[#F5F5F5]">
            <div className="w-11/12 mx-auto py-10">
                <Toaster />

                <div className="flex flex-col md:flex-row gap-10 border-b pb-8">

                    <div className="w-64 h-64 bg-gray-100 rounded-lg mx-auto">
                        <img
                            src={app.image}
                            alt={app.title}
                            className="w-full h-full object-cover rounded-lg bg-white"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-black">{app.title}</h1>

                        <p className="text-gray-500 mt-2.5">
                            Developed by{" "}
                            <span className="text-purple-600 font-semibold">
                                {app.companyName}
                            </span>
                        </p>
                        <hr className="bg-gray-300 w-full h-0.5 mt-4" />
                        <div className="flex gap-10 mt-4">

                            <div className="flex flex-col gap-2 items-start">
                                <FiDownload className="text-green-500 text-2xl" />
                                <p className="text-sm text-gray-500">Downloads</p>
                                <h2 className="text-2xl font-bold text-black">
                                    {new Intl.NumberFormat("en-US", {
                                        notation: "compact",
                                    }).format(app.downloads)}
                                </h2>
                            </div>

                            <div className="flex flex-col gap-2 items-start">
                                <FaStar className="text-orange-500 text-2xl" />
                                <p className="text-sm text-gray-500">Average Ratings</p>
                                <h2 className="text-2xl font-bold text-black">{app.ratingAvg}</h2>
                            </div>

                            <div className="flex flex-col gap-2 items-start">
                                <svg viewBox="0 0 38.854 38.8702" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34.854004" height="23.870239" fill="none" customframe="#000000">
                                    <defs>
                                        <linearGradient id="paint_linear_0" x1="2.20760441" x2="38.8640289" y1="2.20853424" y2="27.9013519" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="rgb(99,46,227)" offset="0" stopOpacity="1" />
                                            <stop stopColor="rgb(159,98,242)" offset="1" stopOpacity="1" />
                                        </linearGradient>
                                    </defs>
                                    <path id="Vector" d="M26.6392 14.5097C25.9737 14.0262 25.6506 13.2092 25.8052 12.4013L26.4402 9.08344L23.9995 6.7943L3.45852 6.7943C1.55633 6.7943 0 8.35063 0 10.2528L0 28.9145C0 30.8167 1.55641 32.373 3.45852 32.373L6.98906 32.373L6.98906 38.8702L12.3438 32.373L26.932 32.373C28.8337 32.373 30.3905 30.8165 30.3905 28.9145L30.3905 13.832L28.9023 14.6513C28.1838 15.0469 27.3027 14.9918 26.6392 14.5097ZM9.56149 26.9994C9.56149 27.4087 9.22664 27.7437 8.81727 27.7437L6.62703 27.7437C6.21766 27.7437 5.88281 27.4087 5.88281 26.9994L5.88281 17.9463C5.88281 17.537 6.21766 17.202 6.62703 17.202L8.81727 17.202C9.22664 17.202 9.56149 17.537 9.56149 17.9463L9.56149 26.9994ZM22.764 26.8016C21.4454 28.1203 16.26 28.0287 14.4237 27.6944C13.1958 27.4708 12.5785 27.0856 11.1553 26.9994L11.14 17.7964C15.383 17.1592 16.2308 14.8339 15.8662 10.5059C15.8412 10.209 16.0575 9.94539 16.3537 9.91211C19.9573 9.50711 19.2112 15.3114 18.9886 17.0398L20.5596 17.0398C24.1349 16.9495 24.2684 17.718 24.4818 19.15C24.6769 20.4591 23.7459 25.7784 22.7641 26.8016L22.764 26.8016ZM38.678 5.63289L35.5866 8.53227L36.3834 12.695C36.4245 12.9102 36.3428 13.1169 36.1655 13.2457C35.9883 13.3745 35.7665 13.3884 35.5745 13.2827L31.8616 11.2387L28.1488 13.2827C27.9568 13.3884 27.735 13.3745 27.5577 13.2457C27.3805 13.1169 27.2987 12.9102 27.3399 12.695L28.1366 8.53234L25.0452 5.63289C24.8854 5.48297 24.8301 5.26781 24.8978 5.05937C24.9655 4.85094 25.1368 4.70938 25.3543 4.68203L29.5595 4.15344L31.3617 0.317422C31.4549 0.119063 31.6425 0 31.8616 0C32.0808 0 32.2684 0.119063 32.3616 0.317422L34.1638 4.15344L38.3691 4.68203C38.5865 4.70938 38.7577 4.85094 38.8255 5.05937C38.8932 5.26781 38.8379 5.48297 38.678 5.63289L38.678 5.63289Z" fill="url(#paint_linear_0)" fillRule="evenodd" />
                                </svg>
                                <p className="text-sm text-gray-500">Total Reviews</p>
                                <h2 className="text-2xl font-bold text-black">
                                    {new Intl.NumberFormat("en-US", {
                                        notation: "compact",
                                    }).format(app.reviews)}
                                </h2>
                            </div>
                        </div>

                        <button
                            onClick={handleInstall}
                            disabled={installed}
                            className={`mt-5 px-6 py-2 cursor-pointer rounded-md font-semibold text-white ${installed
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#00D390] hover:bg-[#00b57c]"
                                }`}
                        >
                            {installed ? "Installed" : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>
                <hr className="bg-gray-300 w-full h-0.5 mt-4" />

                <div className="mt-10">
                    <h2 className="text-xl text-black font-bold mb-4">Ratings</h2>

                    <div className="w-full h-64">
                        <ResponsiveContainer>
                            <BarChart data={chartData} layout="vertical">
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Bar dataKey="count" fill="#FF8811" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <hr className="bg-gray-300 w-full h-0.5 mt-4" />

                <div className="mt-10 border-t pt-6">
                    <h2 className="text-xl text-black font-bold mb-4">Description</h2>

                    <p className="text-gray-600 leading-7">
                        {app.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;