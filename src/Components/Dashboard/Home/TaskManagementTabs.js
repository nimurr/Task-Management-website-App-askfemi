'use client'
import React, { useState } from 'react';
import TaskTabsAll from './TaskTabsAll';
import TaskTabsNotStarted from './TaskTabsNotStarted';
import TaskTabsInProgress from './TaskTabsInProgress';
import TaskTabsComplete from './TaskTabsComplete';
import TaskTabsPersonal from './TaskTabsPersonal';

const tabs = [
    { label: 'All', count: 6 },
    { label: 'Not Started', count: 1 },
    { label: 'In Progress', count: 2 },
    { label: 'Completed', count: 2 },
    { label: 'Personal Task', count: 0 },
];

const TaskManagementTabs = () => {
    const [activeTab, setActiveTab] = useState('All');

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
                        {tab.label} ({tab.count})
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className='mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                {activeTab === 'All' && <TaskTabsAll />}
                {activeTab === 'Not Started' && <TaskTabsNotStarted />}
                {activeTab === 'In Progress' && <TaskTabsInProgress />}
                {activeTab === 'Completed' && <TaskTabsComplete />}
                {activeTab === 'Personal Task' && <TaskTabsPersonal />}
            </div>
        </div>
    );
};

export default TaskManagementTabs;