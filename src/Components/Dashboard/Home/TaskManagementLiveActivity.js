'use client'
import url from '@/redux/api/baseUrl';
import { useGetAllLiveActivityQuery } from '@/redux/fetures/taskManagementTabs/taskManagementTabs';
import React, { useState } from 'react';

const TaskManagementLiveActivity = () => {
    const [permissionEnabled, setPermissionEnabled] = useState(true);
    const { data } = useGetAllLiveActivityQuery();
    const activityData = data?.data?.attributes; // assuming this contains the array of activities

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
                    <span className='text-gray-400 font-medium text-sm'>
                        ({activityData?.length || 0})
                    </span>
                </div>

                {/* Activity List */}
                <div className='flex flex-col gap-4'>
                    {activityData?.map((activity) => (
                        <div key={activity._id} className='flex items-start gap-3'>
                            {/* Actor Image */}
                            {activity.actor?.profileImage && (
                                <img
                                    src={url + activity.actor.profileImage}
                                    alt={activity.actor.name}
                                    className='w-10 h-10 rounded-full object-cover flex-shrink-0'
                                />
                            )}

                            {/* Activity Info */}
                            <div className='flex flex-col'>
                                {activity.actor?.name && (
                                    <span className='font-semibold text-gray-900 text-sm'>
                                        {activity.actor.name}
                                    </span>
                                )}
                                {activity.task?.title && (
                                    <span className='text-gray-700 text-sm'>
                                        {activity.task.title}
                                    </span>
                                )}
                                {activity.message && (
                                    <span className='text-gray-500 text-xs'>{activity.message}</span>
                                )}
                                {activity.timeAgo && (
                                    <span className='text-gray-400 text-xs mt-0.5'>
                                        {activity.timeAgo}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}

                    {!activityData?.length && (
                        <p className='text-center text-gray-400 py-5'>No live activity yet.</p>
                    )}
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
                        <p className='text-xs text-gray-400 mt-0.5'>
                            Secondary users can create and assign tasks to others
                        </p>
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

                <hr className='border-gray-100 mb-4' />

                {/* Example User */}
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