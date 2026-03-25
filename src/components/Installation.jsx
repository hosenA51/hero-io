import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getStoredApps, removeApp } from "../utils/localStorage";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Installation = () => {
    const [apps, setApps] = useState(() => getStoredApps());

    const [sortType, setSortType] = useState("");

    const handleSort = (type) => {
        setSortType(type);

        const sortedApps = [...apps];

        if (type === "high-low") {
            sortedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (type === "low-high") {
            sortedApps.sort((a, b) => a.downloads - b.downloads);
        }

        setApps(sortedApps);
    };

    const handleUninstall = (id) => {
        removeApp(id);

        let updatedApps = getStoredApps();

        if (sortType === "high-low") {
            updatedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (sortType === "low-high") {
            updatedApps.sort((a, b) => a.downloads - b.downloads);
        }

        setApps(updatedApps);

        toast.success("App Uninstalled Successfully");
    };

    return (
        <div className="bg-[#F5F5F5] min-h-screen">
            <Toaster />
            <div className="w-11/12 mx-auto py-10">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-[#0B1C2E]">
                        Your Installed Apps
                    </h1>
                    <p className="text-gray-500 mt-3">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                        {apps.length} Apps Found
                    </h2>

                    <select
                        onChange={(e) => handleSort(e.target.value)}
                        className="px-4 py-2 border rounded-md text-sm text-gray-600 bg-white cursor-pointer"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Sort By Downloads
                        </option>
                        <option value="high-low">High - Low</option>
                        <option value="low-high">Low - High</option>
                    </select>
                </div>

                {apps.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">
                            No apps installed yet.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">

                        {apps.map((app) => (
                            <div
                                key={app.id}
                                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                            >

                                <div className="flex items-center gap-4">

                                    <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                                        <img
                                            src={app.image}
                                            alt={app.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold text-[#0B1C2E]">
                                            {app.title}
                                        </h2>

                                        <div className="flex items-center gap-4 mt-2 text-sm font-semibold text-gray-500">

                                            <div className="flex items-center gap-1 text-[#00C48C]">
                                                <FiDownload />
                                                <span>
                                                    {new Intl.NumberFormat("en-US", {
                                                        notation: "compact",
                                                    }).format(app.downloads)}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1 text-orange-500">
                                                <FaStar />
                                                <span>{app.ratingAvg}</span>
                                            </div>

                                            <span>{app.size} MB</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="bg-[#00C48C] hover:bg-[#00a877] text-white px-4 py-2 rounded-md font-medium"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
};

export default Installation;