// 'use client'
// import React, { useState } from 'react';
// import { FiClock, FiMoreHorizontal } from 'react-icons/fi';

// const statusBadgeStyles = {
//     'Not Started': 'bg-gray-100 text-gray-600',
//     'In Progress': 'bg-blue-100 text-blue-600',
//     'Completed': 'bg-green-100 text-green-600',
// };

// const subTaskHeaderStyles = {
//     'Not Started': 'bg-gray-50 text-gray-600',
//     'In Progress': 'bg-blue-50 text-blue-700',
//     'Completed': 'bg-green-50 text-green-700',
// };

// const memberStatusStyles = {
//     'Not Started': 'bg-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded-full',
//     'In Progress': 'bg-blue-100 text-blue-600 text-[10px] px-2 py-1 rounded-full',
//     'Completed': 'bg-green-100 text-green-600 text-[10px] px-2 py-1 rounded-full',
// };

// const Divider = () => <hr className='border-dashed border-gray-200 my-3' />;

// const TaskCard = ({ task }) => {

//     const handleGotaskDetials = () => {
//         if (task.taskType === 'Group Tasks') {
//             window.location.href = '/dashboard/group-task-details';
//         }
//         else {
//             window.location.href = '/dashboard/single-task-details';
//         }
//     };

//     return (
//         <div onClick={handleGotaskDetials} className='bg-white cursor-pointer rounded-2xl p-5 shadow-sm border border-gray-100'>
//             {/* Title + Status */}
//             <div className='flex items-center justify-between mb-1'>
//                 <h2 className='text-lg font-bold text-gray-900'>{task.title}</h2>
//                 <span className={`text-xs font-semibold px-3 py-1 rounded-lg ${statusBadgeStyles[task.status]}`}>
//                     {task.status}
//                 </span>
//             </div>

//             <Divider />

//             {/* Date */}
//             <div className='flex items-center justify-between'>
//                 <span className='text-sm text-gray-500'>Task Start Date & Time :</span>
//                 <div className='flex items-center gap-1.5 text-sm text-gray-700 font-medium'>
//                     <FiClock size={15} className='text-gray-400' />
//                     {task.startDate}
//                 </div>
//             </div>

//             <Divider />

//             {/* Description */}
//             <p className='text-sm text-gray-500 leading-relaxed'>{task.description}</p>

//             <Divider />

//             {/* Sub Tasks */}
//             {task.subTasks && (
//                 <>
//                     <div className={`rounded-lg px-4 py-2 mb-3 ${subTaskHeaderStyles[task.status]}`}>
//                         <span className='text-sm font-semibold'>
//                             Sub-Tasks (0{task.subTasks.length})
//                         </span>
//                     </div>
//                     <ol className='list-decimal list-inside flex flex-col gap-1 mb-3 px-1'>
//                         {task.subTasks.map((sub, i) => (
//                             <li key={i} className='text-sm text-gray-600'>{sub}</li>
//                         ))}
//                     </ol>
//                     <Divider />
//                 </>
//             )}

//             {/* Assigned By */}
//             {task.assignedBy && (
//                 <div className='flex items-center justify-between'>
//                     <div className='flex items-center gap-2'>
//                         <img src={task.assignedByImg} alt={task.assignedBy} className='w-10 h-10 rounded-full object-cover' />
//                         <div className='flex flex-col leading-tight'>
//                             <span className='text-[10px] text-gray-400'>Assigned By</span>
//                             <div className='flex items-center gap-2'>
//                                 <span className='text-sm font-semibold text-gray-900'>{task.assignedBy}</span>
//                                 <span className='bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full'>{task.assignedByRole}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <button className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-8 py-2.5 rounded-xl transition-colors cursor-pointer'>
//                         Start
//                     </button>
//                 </div>
//             )}

//             {/* Assigned All */}
//             {task.assignedAll && (
//                 <div className='flex items-end justify-between'>
//                     <div className='flex flex-col gap-2'>
//                         <span className='text-sm font-semibold text-gray-800'>Assigned all</span>
//                         <div className='flex items-center gap-4'>
//                             {task.assignedAll.map((member, i) => (
//                                 <div key={i} className='flex flex-col items-center gap-1'>
//                                     <div className='flex items-center gap-1.5'>
//                                         <img src={member.img} alt={member.name} className='w-8 h-8 rounded-full object-cover' />
//                                         <span className='text-sm font-medium text-gray-800'>{member.name}</span>
//                                     </div>
//                                     <span className={memberStatusStyles[member.status]}>{member.status}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className='flex flex-col items-end gap-1'>
//                         <span className='text-xs text-gray-400'>Task Type</span>
//                         <div className='flex items-center gap-2'>
//                             <span className='text-sm font-semibold text-gray-800'>{task.taskType}</span>
//                             <button className='text-gray-400 hover:text-gray-600 transition-colors cursor-pointer'>
//                                 <FiMoreHorizontal size={18} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// const TaskTabsPersonal = ({ allTask }) => {
//     const [activeTab, setActiveTab] = useState('my-created');

//     console.log(allTask)

//     const tabs = [
//         { id: 'my-created', label: 'My Create Tasks' },
//         { id: 'assigned-to-me', label: 'Assigned to Me' },
//     ];

//     const currentTasks = activeTab === 'my-created' ? myCreatedTasks : assignedToMeTasks;

//     return (
//         <div className='flex flex-col gap-4'>
//             {/* Sub Tabs */}
//             <div className='flex items-center justify-end flex-wrap gap-2 border-b border-gray-200 pb-3'>
//                 {tabs.map((tab) => (
//                     <button
//                         key={tab.id}
//                         onClick={() => setActiveTab(tab.id)}
//                         className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer
//                             ${activeTab === tab.id
//                                 ? 'bg-[#3b82f6] text-white'
//                                 : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
//                             }`}
//                     >
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>

//             {/* Task Cards */}
//             {currentTasks.map((task) => (
//                 <TaskCard key={task.id} task={task} />
//             ))}
//         </div>
//     );
// };

// export default TaskTabsPersonal;



'use client'
import url from '@/redux/api/baseUrl';
import React, { useState } from 'react';
import { FiClock, FiMoreHorizontal } from 'react-icons/fi';

const statusBadgeStyles = {
    pending: 'bg-gray-100 text-gray-600',
    inProgress: 'bg-blue-100 text-blue-600',
    completed: 'bg-green-100 text-green-600',
};

const subTaskHeaderStyles = {
    pending: 'bg-gray-50 text-gray-600',
    inProgress: 'bg-blue-50 text-blue-700',
    completed: 'bg-green-50 text-green-700',
};

const Divider = () => <hr className='border-dashed border-gray-200 my-3' />;

const TaskCard = ({ task }) => {

    const handleGoTaskDetails = () => {
        if (task.taskType === 'Group Tasks') {
            window.location.href = '/dashboard/group-task-details';
        } else {
            window.location.href = '/dashboard/single-task-details';
        }
    };

    return (
        <div
            onClick={handleGoTaskDetails}
            className='bg-white cursor-pointer rounded-2xl p-5 shadow-sm border border-gray-100'
        >
            {/* Owner + Title */}
            <div className='flex items-center gap-3 mb-3'>
                {task.owner?.profileImage && (
                    <img
                        src={url + task.owner.profileImage}
                        alt='Owner'
                        className='w-12 h-12 rounded-full object-cover'
                    />
                )}
                <h2 className='text-lg font-bold text-gray-900'>
                    {task.title || 'No Title'}
                </h2>
            </div>

            {/* Status */}
            {task.status && (
                <div className='mb-3'>
                    <span
                        className={`text-xs font-semibold px-3 py-1 rounded-lg ${statusBadgeStyles[task.status.toLowerCase()] || 'bg-gray-100 text-gray-600'
                            }`}
                    >
                        {task.status}
                    </span>
                </div>
            )}

            {/* Start Time */}
            {task.startTime && (
                <>
                    <div className='flex items-center gap-1.5 text-sm text-gray-700 font-medium mb-3'>
                        <FiClock size={15} className='text-gray-400' />
                        <span>{new Date(task.startTime).toLocaleString()}</span>
                    </div>
                    <Divider />
                </>
            )}

            {/* Scheduled Time */}
            {task.scheduledTime && (
                <div className='text-sm text-gray-500 mb-3'>
                    Scheduled Time: {task.scheduledTime}
                </div>
            )}

            {/* Due Date */}
            {task.dueDate && (
                <div className='text-sm text-gray-500 mb-3'>
                    Due Date: {new Date(task.dueDate).toLocaleDateString()}
                </div>
            )}

            {/* Description */}
            {task.description && (
                <>
                    <p className='text-sm text-gray-500 leading-relaxed mb-3'>{task.description}</p>
                    <Divider />
                </>
            )}

            {/* Subtasks */}
            {task.subtasks && task.subtasks.length > 0 && (
                <>
                    <div className={`rounded-lg px-4 py-2 mb-3 ${subTaskHeaderStyles[task.status?.toLowerCase()]}`}>
                        <span className='text-sm font-semibold'>
                            Sub-Tasks ({task.subtasks.length})
                        </span>
                    </div>
                    <ol className='list-decimal list-inside flex flex-col gap-1 mb-3 px-1'>
                        {task.subtasks.map((sub, i) => (
                            <li key={i} className='text-sm text-gray-600'>{sub}</li>
                        ))}
                    </ol>
                    <Divider />
                </>
            )}

            {/* Priority */}
            {task.priority && (
                <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm text-gray-500'>Priority:</span>
                    <span className='text-sm font-semibold text-gray-800 capitalize'>{task.priority}</span>
                </div>
            )}

            {/* Completed Subtasks */}
            {task.completedSubtasks !== undefined && task.totalSubtasks !== undefined && (
                <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-500'>Completed Subtasks:</span>
                    <span className='text-sm font-semibold text-gray-800'>
                        {task.completedSubtasks} / {task.totalSubtasks}
                    </span>
                </div>
            )}
        </div>
    );
};

const TaskTabsPersonal = ({ allTask }) => {
    const [activeTab, setActiveTab] = useState('my-created');

    const tabs = [
        { id: 'my-created', label: 'My Created Tasks' },
        { id: 'assigned-to-me', label: 'Assigned to Me' },
    ];

    const currentTasks = allTask?.filter(task =>
        activeTab === 'my-created' ? task.owner : task.assignedTo
    );

    return (
        <div className='flex flex-col gap-4'>
            {/* Sub Tabs */}
            <div className='flex items-center justify-end flex-wrap gap-2 border-b border-gray-200 pb-3'>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer
              ${activeTab === tab.id ? 'bg-[#3b82f6] text-white' : 'text-gray-500 bg-gray-100 hover:bg-gray-200'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Task Cards */}
            {currentTasks?.length > 0 ? (
                currentTasks.map(task => (
                    <TaskCard key={task._id} task={task} />
                ))
            ) : (
                <p className='text-center text-gray-500 py-10'>No tasks found.</p>
            )}
        </div>
    );
};

export default TaskTabsPersonal;