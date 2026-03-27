'use client'
import React, { useState } from 'react';
import TaskTabsAll from './TaskTabsAll';
import TaskTabsNotStarted from './TaskTabsNotStarted';
import TaskTabsInProgress from './TaskTabsInProgress';
import TaskTabsComplete from './TaskTabsComplete';
import TaskTabsPersonal from './TaskTabsPersonal';
import { useGetTaskManagementTabsQuery } from '@/redux/fetures/taskManagementTabs/taskManagementTabs';
import CardLoading from '@/Components/Common/CardLoading';

const tabs = [
    { label: 'all', count: 6 },
    { label: 'pending', count: 1 },
    { label: 'inProgress', count: 2 },
    { label: 'completed', count: 2 },
    { label: 'personal', count: 0 },
];

const TaskManagementTabs = () => {
    const [activeTab, setActiveTab] = useState('all');
    const { data, isLoading } = useGetTaskManagementTabsQuery({ status: activeTab, taskType: 'children' });
    const allTask = data?.data?.attributes?.tasks;

    console.log(allTask)

    return (
        <div className='bg-gray-50 min-h-screen'>
            {/* Header */}
            <h1 className='text-3xl font-bold text-gray-900'>Task Management</h1>
            <p className='text-gray-400 text-sm mt-1 mb-5'>Create and assign tasks to family members</p>

            {/* Tabs */}
            <div className='flex items-center flex-wrap gap-2 border-b-2 border-gray-200'>
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        className={`px-4 py-1.5 rounded-t-lg text-sm font-medium transition-colors cursor-pointer
                            ${activeTab === tab.label
                                ? 'bg-[#3b82f6] text-white'
                                : 'text-gray-500 hover:bg-gray-200'
                            }`}
                    >
                        {
                            tab.label === 'all'
                                ? "All"
                                : tab.label === 'pending'
                                    ? "Not Started"
                                    : tab.label === 'inProgress'
                                        ? "In Progress"
                                        : tab.label === 'completed'
                                            ? "Completed"
                                            : tab.label === 'personal'
                                                ? "Personal Task"
                                                : ''
                        }
                        ({activeTab === tab.label ? allTask?.length : '0'})
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className='mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-2'>
                {
                    isLoading && [...Array(3)].map((item, index) => (
                        <CardLoading key={index} />
                    ))
                }
                {activeTab === 'all' && <TaskTabsAll allTask={allTask} />}
                {activeTab === 'pending' && <TaskTabsNotStarted allTask={allTask} />}
                {activeTab === 'inProgress' && <TaskTabsInProgress allTask={allTask} />}
                {activeTab === 'completed' && <TaskTabsComplete allTask={allTask} />}
                {activeTab === 'personal' && <TaskTabsPersonal allTask={allTask} />}
            </div>
        </div>
    );
};

export default TaskManagementTabs;