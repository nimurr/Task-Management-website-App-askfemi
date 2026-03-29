'use client';

import CardLoading from '@/Components/Common/CardLoading';
import { useGetTeamMembersStatisticsQuery } from '@/redux/fetures/teamMembers/teamMembers';
import Link from 'next/link';
import React from 'react';
import { FiUser, FiClipboard, FiActivity, FiCheckSquare, FiPlus } from 'react-icons/fi';

const TeamMembersOverview = () => {
    const { data, isLoading } = useGetTeamMembersStatisticsQuery();
    const fullData = data?.data?.attributes || {};



    const stats = [
        { label: 'Team Size', count: fullData.teamSize || 0, icon: <FiUser size={20} className='text-blue-500' /> },
        { label: 'Total Tasks', count: fullData.totalTasks || 0, icon: <FiClipboard size={20} className='text-blue-500' /> },
        { label: 'Active Tasks', count: fullData.activeTasks || 0, icon: <FiActivity size={20} className='text-blue-500' /> },
        { label: 'Completed Tasks', count: fullData.completedTasks || 0, icon: <FiCheckSquare size={20} className='text-blue-500' /> },
    ];

    if (isLoading) {
        return <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                [...Array(4)].map((_, index) => (
                    <CardLoading key={index} />
                ))
            }
        </div>;
    }

    return (
        <div className='bg-gray-100 rounded-lg p-5'>
            {/* Header */}
            <div className='flex items-start justify-between flex-wrap mb-6 gap-5'>
                <div>
                    <h1 className='text-2xl font-bold text-gray-900'>Team Members</h1>
                    <p className='text-sm text-gray-400 mt-1'>Manage and monitor your team's progress</p>
                </div>
                <Link
                    href={`/dashboard/team-members/create`}
                    className='flex items-center gap-2 bg-primary hover:bg-blue-400 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors cursor-pointer'
                >
                    <FiPlus size={16} />
                    Create Member
                </Link>
            </div>

            {/* Stats Cards */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {stats.map((stat, index) => (
                    <div key={index} className='bg-white rounded-2xl p-5 border border-gray-100 shadow-sm'>
                        <div className='flex items-start justify-between mb-4'>
                            <p className='text-sm text-gray-500'>{stat.label}</p>
                            <div className='w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0'>
                                {stat.icon}
                            </div>
                        </div>
                        <p className='text-3xl font-bold text-gray-900'>{stat.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembersOverview;