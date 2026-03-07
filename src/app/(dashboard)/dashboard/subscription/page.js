import React from "react";
import { IoIosArrowDown } from "react-icons/io";


const Page = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className=" mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold">Choose Your Plan</h1>
                        <p className="text-sm text-gray-500">
                            Select the perfect plan for your family's needs.
                        </p>
                    </div>

                    <div className="text-sm text-gray-500">
                        Dashboard <span className="mx-2">›</span>
                        <span className="text-blue-500">Subscription</span>
                    </div>
                </div>

                {/* Subscription Table */}
                <div className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-500">
                            <tr className="text-left">
                                <th className="p-4">User Subscription ID</th>
                                <th className="p-4">Subscription Name</th>
                                <th className="p-4">Start Date</th>
                                <th className="p-4">Current Period Date</th>
                                <th className="p-4">Expire Date</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t">
                                <td className="p-4">ZZPP000</td>
                                <td className="p-4">Group Plan</td>
                                <td className="p-4">12-12-2026</td>
                                <td className="p-4">12-12-2026</td>
                                <td className="p-4">12-12-2026</td>
                                <td className="p-4">$30</td>
                                <td className="p-4 text-green-500 font-medium">Active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Plan Card */}
                <div className="flex justify-center">
                    <div className="bg-white w-[380px] border border-blue-400 rounded-lg p-6 shadow-sm">

                        {/* Plan Header */}
                        <div className="bg-green-500 text-white p-4 rounded-md mb-6">
                            <h3 className="text-lg font-semibold">Business Plan</h3>
                            <p className="text-xs mt-1">
                                Designed for teachers, parents, and business managers to
                                manage multiple users from one place.
                            </p>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-700">
                                    $29.99
                                    <span className="text-sm font-normal text-gray-500">
                                        {" "}
                                        / Month
                                    </span>
                                </h2>
                                <p className="text-xs text-gray-500 mt-1">
                                    Premium Monthly Package
                                </p>
                            </div>

                            <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md">
                                Active
                            </span>
                        </div>

                        {/* Cancel Button */}
                        <button className="w-full bg-red-100 text-red-500 py-2 rounded-md text-sm mb-5">
                            Cancel Subscription
                        </button>

                        {/* Feature Box */}
                        <div className="bg-gray-50 rounded-md p-4">
                            <h4 className="font-medium mb-3">Account Structure</h4>

                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>✔ Up to 5 users per group</li>
                                <li>✔ 1 Primary account</li>
                                <li>✔ Up to 4 Secondary accounts</li>
                            </ul>
                        </div>

                        {/* View More */}
                        <div className="text-center mt-5 text-sm text-gray-600 cursor-pointer hover:text-blue-500 flex items-center justify-center gap-2 font-semibold">
                            View More <IoIosArrowDown />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;