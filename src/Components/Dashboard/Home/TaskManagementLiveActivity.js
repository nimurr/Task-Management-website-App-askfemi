'use client'
import React, { useState } from 'react';

const activities = [
    { name: 'Alax Morgn', description: 'Jamie Chen completed "Complete math homework"', time: '2 minutes ago', img: 'https://i.pravatar.cc/40?img=11' },
    { name: 'Alax Morgn', description: 'Jamie Chen completed "Complete math homework"', time: '2 minutes ago', img: 'https://i.pravatar.cc/40?img=11' },
    { name: 'Alax Morgn', description: 'Jamie Chen completed "Complete math homework"', time: '2 minutes ago', img: 'https://i.pravatar.cc/40?img=11' },
    { name: 'Alax Morgn', description: 'Jamie Chen completed "Complete math homework"', time: '2 minutes ago', img: 'https://i.pravatar.cc/40?img=11' },
];

const TaskManagementLiveActivity = () => {
    const [permissionEnabled, setPermissionEnabled] = useState(true);

    return (
        <div className='flex flex-col gap-4'>

            {/* Live Activity Card */}
            <div className='bg-white rounded-2xl p-5 shadow-sm border border-gray-100'>
                {/* Header */}
                <div className='flex items-start justify-between mb-4'>
                    <div>
                        <h2 className='text-xl font-bold text-gray-900'>Live Activity</h2>
                        <p className='text-gray-400 text-xs mt-0.5'>Real-time updates from family</p>
                    </div>
                    <span className='text-gray-400 font-medium text-sm'>(0{activities.length})</span>
                </div>

                {/* Activity List */}
                <div className='flex flex-col gap-4'>
                    {activities.map((activity, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <img
                                src={activity.img}
                                alt={activity.name}
                                className='w-10 h-10 rounded-full object-cover flex-shrink-0'
                            />
                            <div className='flex flex-col'>
                                <span className='font-semibold text-gray-900 text-sm'>{activity.name}</span>
                                <span className='text-gray-500 text-xs'>{activity.description}</span>
                                <span className='text-gray-400 text-xs mt-0.5'>{activity.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Permissions Card */}
            <div className='bg-white rounded-2xl p-5 shadow-sm border border-gray-100'>
                {/* Header */}
                <h2 className='text-xl font-bold text-gray-900 mb-4'>Permissions</h2>

                {/* Toggle Row */}
                <div className='flex items-start justify-between mb-5'>
                    <div>
                        <p className='text-sm font-semibold text-gray-800'>Allow Secondary users to create tasks</p>
                        <p className='text-xs text-gray-400 mt-0.5'>Secondary users can create and assign tasks to others</p>
                    </div>
                    {/* Toggle */}
                    <button
                        onClick={() => setPermissionEnabled(!permissionEnabled)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ml-4
                            ${permissionEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out mt-0.5
                                ${permissionEnabled ? 'translate-x-5' : 'translate-x-0.5'}`}
                        />
                    </button>
                </div>

                {/* Divider */}
                <hr className='border-gray-100 mb-4' />

                {/* User Row */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='relative'>
                            <img
                                src='https://i.pravatar.cc/40?img=11'
                                alt='Alax Morgn'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <span className='absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center'>
                                <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="4" fill="white" />
                                </svg>
                            </span>
                        </div>
                        <div className='flex flex-col leading-tight'>
                            <span className='text-[10px] text-gray-400'>Permissions</span>
                            <span className='text-sm font-semibold text-gray-900'>Alax Morgn</span>
                        </div>
                    </div>
                    <button className='text-sm text-gray-400 hover:text-red-400 transition-colors cursor-pointer'>
                        Remove User
                    </button>
                </div>
            </div>

        </div>
    );
};

export default TaskManagementLiveActivity;