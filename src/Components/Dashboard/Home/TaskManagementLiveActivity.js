'use client'
import CardLoading from '@/Components/Common/CardLoading';
import url from '@/redux/api/baseUrl';
import { useGetAllLiveActivityQuery } from '@/redux/fetures/taskManagementTabs/taskManagementTabs';
import React, { useState } from 'react';

const TaskManagementLiveActivity = () => {
    const [permissionEnabled, setPermissionEnabled] = useState(true);
    const { data, isLoading } = useGetAllLiveActivityQuery();
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
                <div className='space-y-3'>

                    {
                        isLoading && [...Array(3)].map((item, index) => (
                            <CardLoading key={index} />
                        ))
                    }
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
 
         
        </div>
    );
};

export default TaskManagementLiveActivity;