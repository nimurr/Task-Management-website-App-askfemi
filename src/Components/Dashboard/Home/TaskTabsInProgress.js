'use client'
import url from '@/redux/api/baseUrl';
import React from 'react';
import { FiClock, FiMoreHorizontal } from 'react-icons/fi';

/* ---------------- STATUS STYLE ---------------- */
const memberStatusStyles = {
    'Not Started': 'bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full',
    'In Progress': 'bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-full',
    'Completed': 'bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full',
};

const Divider = () => <hr className='border-dashed border-gray-200 my-3' />;

/* ---------------- STATUS CONVERTER ---------------- */
const getStatus = (status) => {
    switch (status) {
        case "pending":
            return "Not Started";
        case "inProgress":
            return "In Progress";
        case "all-completed":
            return "Completed";
        default:
            return "Not Started";
    }
};

/* ---------------- FORMAT FUNCTION ---------------- */
const formatTask = (task) => {
    return {
        id: task._id,
        title: task.title,
        description: task.description,

        status: getStatus(task.status),

        startDate: new Date(task.startTime).toLocaleString(),

        subTasks: task.subtasks || [],

        assignedAll: task.assignedTo?.map((user, index) => ({
            name: user.name || `User ${index + 1}`,
            img: user.profileImage || "/uploads/users/user.png",
            status: getStatus(task.status),
        })) || [],

        taskType:
            task.taskType === "collaborative"
                ? "Group Tasks"
                : "Single Task",
    };
};

/* ---------------- TASK CARD ---------------- */
const TaskCard = ({ task }) => {

    const handleGotaskDetials = () => {
        if (task.taskType === 'Group Tasks') {
            window.location.href = `/dashboard/group-task-details/${task.id}`;
        } else {
            window.location.href = `/dashboard/single-task-details/${task.id}`;
        }
    };


    console.log(task)

    return (
        <div onClick={handleGotaskDetials} className='bg-white cursor-pointer rounded-2xl p-5 shadow-sm border border-gray-100'>

            {/* Title + Status */}
            <div className='flex items-center justify-between mb-1'>
                <h2 className='text-lg font-bold text-gray-900 capitalize'>{task.title}</h2>
                <span className='text-xs font-semibold px-3 py-1 rounded-lg bg-blue-100 text-blue-600'>
                    {task.status}
                </span>
            </div>

            <Divider />

            {/* Date */}
            <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-500'>Task Start Date & Time :</span>
                <div className='flex items-center gap-1.5 text-sm text-gray-700 font-medium'>
                    <FiClock size={15} className='text-gray-400' />
                    {task.startDate}
                </div>
            </div>

            <Divider />

            {/* Description */}
            <p className='text-sm text-gray-500 leading-relaxed'>{task.description}</p>

            <Divider />

            {/* Sub Tasks */}
            <div className='bg-blue-50 rounded-lg px-4 py-2 mb-3'>
                <span className='text-sm font-semibold text-blue-700'>
                    Sub-Tasks ({task?.subTasks?.length})
                </span>
            </div>

            <ol className='list-decimal list-inside flex flex-col gap-1 mb-3 px-1'>
                {task.subtasks?.map((sub, i) => (
                    <li key={i} className='text-sm text-gray-600'>
                        {sub.title || sub}
                    </li>
                ))}
            </ol>

            <Divider />

            {/* Assigned All + Task Type */}
            <div className='flex items-end justify-between'>
                <div className='flex flex-col gap-2'>
                    <span className='text-sm font-semibold text-gray-800'>Assigned all</span>

                    <div className='flex items-center gap-4'>
                        {task?.assignedTo?.map((member, i) => (
                            <div key={i} className='flex flex-col items-center gap-1'>
                                <div className='flex items-center gap-1.5'>
                                    <img
                                        src={url + member.profileImage}
                                        alt={member.name}
                                        className='w-8 h-8 rounded-full object-cover'
                                    />
                                    <span className='text-sm font-medium text-gray-800'>
                                        {member.name}
                                    </span>
                                </div>

                                <span className={memberStatusStyles[
                                    member?.progress?.status === "pending"
                                        ? "Not Started"
                                        : member?.progress?.status === "inProgress"
                                            ? "In Progress"
                                            : "Completed"
                                ]}>
                                    {
                                        member?.progress?.status === "pending" || member?.progress?.status === "notStarted"
                                            ? "Not Started"
                                            : member?.progress?.status === "inProgress"
                                                ? "In Progress"
                                                : "Completed"
                                    }
                                </span>
                                {/* Progress Bar */}
                                <span className="w-20 bg-gray-500 h-1 rounded-full block">
                                    <span
                                        className="bg-blue-500 h-1 rounded-full block transition-all duration-500"
                                        style={{ width: `${member?.progress?.progressPercentage || 0}%` }}
                                    ></span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col items-end gap-1'>
                    <span className='text-xs text-gray-400'>Task Type</span>

                    <div className='flex items-center gap-2'>
                        <span className='text-sm font-semibold text-gray-800'>
                            {task.taskType}
                        </span>

                        <button className='text-gray-400 hover:text-gray-600 transition-colors cursor-pointer'>
                            <FiMoreHorizontal size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ---------------- MAIN COMPONENT ---------------- */
const TaskTabsInProgress = ({ allTask }) => {



    return (
        <div className='flex flex-col gap-4'>
            {allTask?.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskTabsInProgress;