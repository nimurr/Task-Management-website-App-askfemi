// 'use client'
// import React, { useEffect, useState } from 'react';
// import TaskTabsAll from './TaskTabsAll';
// import TaskTabsNotStarted from './TaskTabsNotStarted';
// import TaskTabsInProgress from './TaskTabsInProgress';
// import TaskTabsComplete from './TaskTabsComplete';
// import TaskTabsPersonal from './TaskTabsPersonal';
// import { useGetTaskManagementTabsQuery } from '@/redux/fetures/taskManagementTabs/taskManagementTabs';
// import CardLoading from '@/Components/Common/CardLoading';



// const TaskManagementTabs = () => {

//     const tabs = [
//         { label: 'all', count: 0 },
//         { label: 'pending', count: 0 },
//         { label: 'inProgress', count: 0 },
//         { label: 'completed', count: 0 },
//         { label: 'personal', count: 0 },
//     ];
//     const [type, setType] = useState('children');

//     const [activeTab, setActiveTab] = useState('all');
//     const { data, isLoading } = useGetTaskManagementTabsQuery({ status: activeTab, taskType: type });
//     const allTask = data?.data?.attributes?.tasks;

//     console.log(data?.data?.attributes)

//     useEffect(() => {

//         //        data?.data?.attributes?.counts
//         // : 
//         // byStatus
//         // : 
//         // {pending: 1, inProgress: 1, completed: 1}
//         // personal
//         // : 
//         // 1
//         // total
//         // : 
//         // 4



//     }, [])

//     console.log(tabs)

//     return (
//         <div className='bg-gray-50 '>
//             {/* Header */}
//             <h1 className='text-3xl font-bold text-gray-900'>Task Management</h1>
//             <p className='text-gray-400 text-sm mt-1 mb-5'>Create and assign tasks to family members</p>

//             {/* Tabs */}
//             <div className='flex items-center flex-wrap gap-2 border-b-2 border-gray-200'>
//                 {tabs.map((tab) => (
//                     <button
//                         key={tab.label}
//                         onClick={(
//                             setActiveTab(tab.label) ;
//                 setType(tab.label !== 'personal' ? 'children' : 'personal')
//                 )}
//                 className={`px-4 py-1.5 rounded-t-lg text-sm font-medium transition-colors cursor-pointer
//                             ${activeTab === tab.label
//                         ? 'bg-[#3b82f6] text-white'
//                         : 'text-gray-500 hover:bg-gray-200'
//                     }`}
//                     >
//                 {
//                     tab.label === 'all'
//                         ? "All"
//                         : tab.label === 'pending'
//                             ? "Not Started"
//                             : tab.label === 'inProgress'
//                                 ? "In Progress"
//                                 : tab.label === 'completed'
//                                     ? "Completed"
//                                     : tab.label === 'personal'
//                                         ? "Personal Task"
//                                         : ''
//                 }
//                 ({tab.count || 0})
//             </button>
//                 ))}
//         </div>

//             {/* Tab Content */ }
//     <div className='mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-2'>
//         {
//             isLoading && [...Array(3)].map((item, index) => (
//                 <CardLoading key={index} />
//             ))
//         }
//         {activeTab === 'all' && <TaskTabsAll allTask={allTask} />}
//         {activeTab === 'pending' && <TaskTabsNotStarted allTask={allTask} />}
//         {activeTab === 'inProgress' && <TaskTabsInProgress allTask={allTask} />}
//         {activeTab === 'completed' && <TaskTabsComplete allTask={allTask} />}
//         {activeTab === 'personal' && <TaskTabsPersonal allTask={allTask} />}
//         {
//             !isLoading && !allTask?.length && <div className='text-center text-gray-500'>

//                 <img className='w-[200px] block mx-auto mb-5' src="https://www.pngexpert.com/assets/images/empty_message.png" alt="" />
//                 No tasks found
//             </div>
//         }
//     </div>
//         </div >
//     );
// };

// export default TaskManagementTabs;



'use client'
import React, { useState } from 'react';
import TaskTabsAll from './TaskTabsAll';
import TaskTabsNotStarted from './TaskTabsNotStarted';
import TaskTabsInProgress from './TaskTabsInProgress';
import TaskTabsComplete from './TaskTabsComplete';
import TaskTabsPersonal from './TaskTabsPersonal';
import { useGetTaskManagementTabsQuery } from '@/redux/fetures/taskManagementTabs/taskManagementTabs';
import CardLoading from '@/Components/Common/CardLoading';

/* ---------------- LABEL MAP ---------------- */
const labelMap = {
    all: "All",
    pending: "Not Started",
    inProgress: "In Progress",
    completed: "Completed",
    personal: "Personal Task",
};

const TaskManagementTabs = () => {

    const [type, setType] = useState('children');
    const [activeTab, setActiveTab] = useState('all');

    const { data, isLoading } = useGetTaskManagementTabsQuery({
        status: type == 'personal' ? 'all' : activeTab,
        taskType: type
    });

    const allTask = data?.data?.attributes?.tasks || [];
    const counts = data?.data?.attributes?.counts || {};

    console.log(allTask)



    /* ---------------- DYNAMIC TABS ---------------- */
    const tabs = [
        { label: 'all', count: counts?.total || 0 },
        { label: 'pending', count: counts?.byStatus?.pending || 0 },
        { label: 'inProgress', count: counts?.byStatus?.inProgress || 0 },
        { label: 'completed', count: counts?.byStatus?.completed || 0 },
        { label: 'personal', count: counts?.personal || 0 },
    ];

    return (
        <div className='bg-gray-50'>

            {/* Header */}
            <h1 className='text-3xl font-bold text-gray-900'>Task Management</h1>
            <p className='text-gray-400 text-sm mt-1 mb-5'>
                Create and assign tasks to family members
            </p>

            {/* 🔥 Tabs */}
            <div className='flex items-center flex-wrap gap-2 border-b-2 border-gray-200'>
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        onClick={() => {
                            setActiveTab(tab.label);
                            setType(tab.label === 'personal' ? 'personal' : 'children');
                        }}
                        className={`px-4 py-1.5 rounded-t-lg text-sm font-medium transition-colors cursor-pointer
                        ${activeTab === tab.label
                                ? 'bg-[#3b82f6] text-white'
                                : 'text-gray-500 hover:bg-gray-200'
                            }`}
                    >
                        {labelMap[tab.label]} ({tab.count})
                    </button>
                ))}
            </div>

            {/* 🔥 Tab Content */}
            <div className='mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-2'>

                {/* Loading */}
                {isLoading && [...Array(3)].map((_, index) => (
                    <CardLoading key={index} />
                ))}

                {/* Content */}
                {!isLoading && (
                    <>
                        {activeTab === 'all' && <TaskTabsAll allTask={allTask} />}
                        {activeTab === 'pending' && <TaskTabsNotStarted allTask={allTask} />}
                        {activeTab === 'inProgress' && <TaskTabsInProgress allTask={allTask} />}
                        {activeTab === 'completed' && <TaskTabsComplete allTask={allTask} />}
                        {activeTab === 'personal' && <TaskTabsPersonal allTask={allTask} />}
                    </>
                )}

                {/* Empty State */}
                {!isLoading && allTask.length === 0 && (
                    <div className='text-center text-gray-500'>
                        <img
                            className='w-[200px] block mx-auto mb-5'
                            src="https://www.pngexpert.com/assets/images/empty_message.png"
                            alt=""
                        />
                        No tasks found
                    </div>
                )}

            </div>
        </div>
    );
};

export default TaskManagementTabs;