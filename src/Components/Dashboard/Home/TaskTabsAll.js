'use client'
import url from '@/redux/api/baseUrl';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiClock, FiMoreHorizontal } from 'react-icons/fi';

/* ---------------- STATUS STYLE ---------------- */
const statusStyles = {
    'Not Started': 'bg-gray-100 text-gray-600',
    'In Progress': 'bg-blue-100 text-blue-600',
    'Completed': 'bg-green-100 text-green-600',
};

const memberStatusStyles = {
    'Not Started': 'bg-gray-100 text-gray-500 text-[12px] px-5 py-1 rounded-full',
    'In Progress': 'bg-blue-100 text-blue-600 text-[12px] px-5 py-1 rounded-full',
    'Completed': 'bg-green-100 text-green-600 text-[12px] px-5 py-1 rounded-full',
};

const Divider = () => <hr className='border-dashed border-gray-200 my-3' />;

/* ---------------- TASK CARD ---------------- */
const TaskCard = ({ task }) => {

    const router = useRouter();


    const handleGotaskDetials = () => {

        if (task.taskType !== 'Single Task') {
            router.push(`/dashboard/group-task-details/${task.id}`);
        } else {
            router.push(`/dashboard/single-task-details/${task.id}`);
        }
    };

    return (
        <div onClick={handleGotaskDetials} className='bg-white cursor-pointer rounded-2xl p-5 shadow-sm border border-gray-100'>

            {/* Title + Status */}
            <div className='flex items-center justify-between mb-1'>
                <h2 className='text-lg font-bold text-gray-900 capitalize'>{task.title}</h2>
                <span className={`text-xs font-semibold px-3 py-1 rounded-lg ${statusStyles[task.status]}`}>
                    {task.status}
                </span>
            </div>

            <Divider />

            {/* Date */}
            <div className='flex items-center justify-between mb-1'>
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
            {task.subTasks?.length > 0 && (
                <>
                    <div className='bg-blue-50 rounded-lg px-4 py-2 mb-3'>
                        <span className='text-sm font-semibold text-blue-700'>
                            Sub-Tasks ({task.subTasks.length})
                        </span>
                    </div>

                    <ol className='list-decimal list-inside flex flex-col gap-1 mb-3 px-1'>
                        {task.subTasks.map((sub, i) => (
                            <li key={i} className='text-sm text-gray-600'>
                                {sub.title || sub}
                            </li>
                        ))}
                    </ol>

                    <Divider />
                </>
            )}

            {/* Assigned By */}
            {task.assignedBy && (
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={url + task.assignedByImg} className='w-10 h-10 rounded-full object-cover' />
                        <div className='flex flex-col leading-tight'>
                            <span className='text-[10px] text-gray-400'>Assigned By</span>
                            <div className='flex items-center gap-2'>
                                <span className='text-sm font-semibold text-gray-900'>{task.assignedBy}</span>
                                <span className='bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full'>
                                    {task.assignedByRole}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-xl'>
                        Start
                    </button>
                </div>
            )}

            {/* Assigned All */}
            {task.assignedAll?.length > 0 && (
                <div className='flex items-end justify-between mt-3'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-sm font-semibold text-gray-800'>Assigned All</span>

                        <div className='flex items-center gap-4'>
                            {task.assignedAll.map((member, i) => (
                                <div key={i} className='flex flex-col items-center gap-1'>
                                    <div className='flex items-center gap-1.5'>
                                        <img src={url + member.img} className='w-8 h-8 rounded-full object-cover' />
                                        <span className='text-sm font-medium text-gray-800'>{member.name}</span>
                                    </div>
                                    <span className={memberStatusStyles[member.status]}>
                                        {member.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col items-end gap-1'>
                        <span className='text-xs text-gray-400'>Task Type</span>
                        <div className='flex items-center gap-2'>
                            <span className='text-sm font-semibold text-gray-800'>{task.taskType}</span>
                            <FiMoreHorizontal size={18} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

/* ---------------- FORMAT FUNCTION ---------------- */
const formatTask = (task) => {
    return {
        id: task._id,
        title: task.title,
        description: task.description,

        // status convert
        status:
            task.status === "pending"
                ? "Not Started"
                : task.status === "in-progress"
                    ? "In Progress"
                    : "Completed",

        // date format
        startDate: new Date(task.startTime).toLocaleString(),

        // subtasks
        subTasks: task.subtasks || [],

        // assigned by
        assignedBy: "Parent",
        assignedByImg: task.createdBy?.profileImage || "/uploads/users/user.png",
        assignedByRole: "Parent",

        // assigned multiple users
        assignedAll: task.assignedTo?.map((user, index) => ({
            name: `User ${index + 1}`,
            img: user.profileImage,
            status: "Not Started",
        })),

        // task type
        taskType:
            task.taskType === "collaborative"
                ? "Group Tasks"
                : "Single Task",
    };
};

/* ---------------- MAIN COMPONENT ---------------- */
const TaskTabsAll = ({ allTask }) => {

    const formattedTasks = allTask?.map(formatTask);

    return (
        <div className='flex flex-col gap-4'>
            {formattedTasks?.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskTabsAll;