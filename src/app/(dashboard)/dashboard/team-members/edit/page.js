import React from "react";

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-100 rounded-lg p-8">
            <div className="">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold">Edit Member</h1>
                        <p className="text-sm text-gray-500">
                            Create and manage team members
                        </p>
                    </div>

                    <div className="text-sm text-gray-500">
                        Dashboard <span className="mx-2">›</span>
                        <span className="text-blue-500">Edit Member</span>
                    </div>
                </div>

                <div className="flex gap-8 max-w-xl">

                    {/* Form Card */}
                    <div className="bg-white  p-6 rounded-xl shadow-sm space-y-4">

                        <input
                            type="text"
                            placeholder="User name"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="text"
                            placeholder="Phone number"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <select className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other gender</option>
                        </select>

                        <input
                            type="date"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="number"
                            placeholder="Age"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <select className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option>Support Mode</option>
                            <option>Calm</option>
                            <option>Encouraging</option>
                            <option>Logical</option>
                        </select>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600">
                            Create an account
                        </button>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Page;