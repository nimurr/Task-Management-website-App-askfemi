import React from 'react';
import {  LuCrown } from 'react-icons/lu';
import { CiBookmark } from "react-icons/ci";
import { BsListCheck } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { FaRegUserCircle } from 'react-icons/fa';
import Link from 'next/link';


const stats = [
    { label: 'Not Started Tasks', count: '04', icon: <CiBookmark size={25} className='text-blue-500' /> },
    { label: 'In Progress', count: '04', icon: <BsListCheck  size={25} className='text-blue-500' /> },
    { label: 'My Tasks', count: '04', icon: <TiDocumentText  size={27} className='text-blue-500' /> },
    { label: 'Completed Tasks', count: '04', icon: <FaRegUserCircle  size={25} className='text-blue-500' /> },
];

const TaskMonitoringOverview = () => {
    return (
        <div className='bg-gray-100 rounded-lg p-5'>
            {/* Header */}
            <div className='flex items-start justify-between flex-wrap mb-6'>
                <div>
                    <h1 className='text-2xl font-bold text-gray-900'>Task Monitoring</h1>
                    <p className='text-sm text-gray-400 mt-1'>Track and analyze task performance across your team</p>
                </div>
                <Link href="/dashboard/task-monitoring/create-task" className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-10 py-4 rounded-lg transition-colors cursor-pointer'>
                    Task Create
                </Link>
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-4 gap-4'>
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

export default TaskMonitoringOverview;