'use client';

import React from 'react';
import { FiCalendar, FiClock, FiPlus } from 'react-icons/fi';

const members = [
    { id: 1, name: 'Alax Morgn', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Jamie Chen', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'Sam Rivera', img: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { id: 4, name: 'Casey Lin', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
];

const Page = () => {
    return (
        <div className="bg-gray-100 rounded-lg p-5">

            {/* Header */}
            <div className="flex items-start justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Single Assignment
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

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Form */}
                <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h2 className="text-base font-semibold text-gray-800 mb-6">
                        Create Task
                    </h2>

                    {/* Task Title */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Task Title
                        </label>
                        <input
                            type="text"
                            placeholder="Type now"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Task Description */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Task Description
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Type Now..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Task Date
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {/* <FiCalendar className="absolute right-3 top-3 text-gray-400" /> */}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Time
                            </label>
                            <div className="relative">
                                <input
                                    type="time"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {/* <FiClock className="absolute right-3 top-3 text-gray-400" /> */}
                            </div>
                        </div>

                    </div>

                    {/* Add Sub Task */}
                    <button className="w-full border border-blue-500 text-blue-600 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition mb-4">
                        <FiPlus />
                        Add Sub Task
                    </button>

                    {/* Submit */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium transition">
                        Create Task
                    </button>
                </div>

                {/* Right Assign To */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h2 className="text-base font-semibold text-gray-800 mb-6">
                        Assign To
                    </h2>

                    <div className="space-y-4">
                        {members.map((member) => (
                            <label
                                key={member.id}
                                className="flex items-center gap-4 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                <span className="text-sm text-gray-700">
                                    {member.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;