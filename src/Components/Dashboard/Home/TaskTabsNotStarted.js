// import React from 'react';
// import { FiClock } from 'react-icons/fi';


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
//                 <span className='text-xs font-semibold px-3 py-1 rounded-lg bg-gray-100 text-gray-600'>
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

//             {/* Assigned By */}
//             <div className='flex items-center justify-between'>
//                 <div className='flex items-center gap-2'>
//                     <img src={task.assignedByImg} alt={task.assignedBy} className='w-10 h-10 rounded-full object-cover' />
//                     <div className='flex flex-col leading-tight'>
//                         <span className='text-[10px] text-gray-400'>Assigned By</span>
//                         <div className='flex items-center gap-2'>
//                             <span className='text-sm font-semibold text-gray-900'>{task.assignedBy}</span>
//                             <span className='bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full'>{task.assignedByRole}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <button className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-8 py-2.5 rounded-xl transition-colors cursor-pointer'>
//                     Start
//                 </button>
//             </div>
//         </div>
//     );
// };

// const TaskTabsNotStarted = ({allTask}) => {
//     return (
//         <div className='flex flex-col gap-4'>
//             {allTask?.map((task) => (
//                 <TaskCard key={task.id} task={task} />
//             ))}
//         </div>
//     );
// };

// export default TaskTabsNotStarted;


'use client'
import url from '@/redux/api/baseUrl';
import React from 'react';
import { FiClock } from 'react-icons/fi';

/* ---------------- DIVIDER ---------------- */
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

        assignedBy: "Parent",
        assignedByImg: task.createdBy?.profileImage || "/uploads/users/user.png",
        assignedByRole: "Parent",

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

    return (
        <div onClick={handleGotaskDetials} className='bg-white cursor-pointer rounded-2xl p-5 shadow-sm border border-gray-100'>

            {/* Title + Status */}
            <div className='flex items-center justify-between mb-1'>
                <h2 className='text-lg font-bold text-gray-900 capitalize'>{task.title}</h2>
                <span className='text-xs font-semibold px-3 py-1 rounded-lg bg-gray-100 text-gray-600'>
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

            {/* Assigned By */}
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
        </div>
    );
};

/* ---------------- MAIN COMPONENT ---------------- */
const TaskTabsNotStarted = ({ allTask }) => {

    // ✅ Filter only NOT STARTED tasks
    const filteredTasks = allTask
        ?.filter(task => task.status === "pending")
        ?.map(formatTask);

    return (
        <div className='flex flex-col gap-4'>
            {filteredTasks?.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskTabsNotStarted;