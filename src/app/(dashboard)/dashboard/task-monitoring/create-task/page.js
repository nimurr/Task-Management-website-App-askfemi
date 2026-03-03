'use client';
import Link from 'next/link';
import React from 'react';
import { FiUser, FiUserCheck, FiUsers } from 'react-icons/fi';

const Page = () => {
    return (
        <div className="bg-gray-100 rounded-lg p-5">

            {/* Header Section */}
            <div className="flex items-start justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Create Task
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Track and analyze task performance across your team
                    </p>
                </div>

                <div className="text-sm text-gray-500">
                    <span className="hover:text-blue-600 cursor-pointer">
                        Dashboard
                    </span>
                    <span className="mx-2">›</span>
                    <span className="text-blue-600 font-medium">
                        Create Task
                    </span>
                </div>
            </div>

            {/* Quick Assign Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-gray-700 mb-6">
                    Quick assign
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Single Assignment */}
                    <div className="bg-gray-100 rounded-xl p-6 hover:shadow-md transition">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                            <FiUser size={20} />
                        </div>

                        <h3 className="text-base font-semibold text-gray-800">
                            Single Assignment
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 mb-6">
                            Assign task to one family member
                        </p>

                        <Link href={'/dashboard/task-monitoring/create-task/single-assignment'} className="w-full inline-block text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md text-sm font-medium transition">
                            Create Now
                        </Link>
                    </div>

                    {/* Collaborative Task */}
                    <div className="bg-gray-100 rounded-xl p-6 hover:shadow-md transition">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                            <FiUsers size={20} />
                        </div>

                        <h3 className="text-base font-semibold text-gray-800">
                            Collaborative Task
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 mb-6">
                            Assign to multiple members
                        </p>

                        <Link href={'/dashboard/task-monitoring/create-task/collaborat-task'} className="w-full inline-block text-center border border-blue-500 text-blue-600 hover:bg-blue-50 py-3 rounded-md text-sm font-medium transition">
                            Create Now
                        </Link>
                    </div>

                    {/* Personal Task */}
                    <div className="bg-gray-100 rounded-xl p-6 hover:shadow-md transition">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                            <FiUserCheck size={20} />
                        </div>

                        <h3 className="text-base font-semibold text-gray-800">
                            Personal Task
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 mb-6">
                            Create task for yourself
                        </p>

                        <Link href={'/dashboard/task-monitoring/create-task/personal-task'} className="w-full inline-block text-center border border-blue-500 text-blue-600 hover:bg-blue-50 py-3 rounded-md text-sm font-medium transition">
                            Create Now
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;