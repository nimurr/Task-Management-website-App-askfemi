// 'use client';
// import { useGetTaskDetialsQuery } from '@/redux/fetures/taskManagementTabs/taskManagementTabs';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import React from 'react';
// import { FiCalendar } from 'react-icons/fi';
// import { IoArrowBack } from 'react-icons/io5';


// const Page = () => {

//     const { id } = useParams();


//     const { data } = useGetTaskDetialsQuery({ id });
//     const fullTask = data?.data?.attributes ; 

//     console.log(fullTask)

//     return (
//         <div className='bg-gray-100 rounded-lg p-5'>

//             {/* Title */}
//             <Link href="/dashboard" className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 '><IoArrowBack /> Tasks details</Link>


//             {/* Assigned All Card */}
//             <div className='bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-4'>
//                 <p className='text-base font-bold text-gray-900 mb-4'>Assigned all</p>
//                 <div className='flex items-center gap-6'>
//                     {assignedMembers.map((member, i) => (
//                         <div key={i} className='flex flex-col items-center gap-1'>
//                             <div className='flex items-center gap-2'>
//                                 <img
//                                     src={member.img}
//                                     alt={member.name}
//                                     className='w-10 h-10 rounded-full object-cover'
//                                 />
//                                 <span className='text-sm font-semibold text-gray-800'>{member.name}</span>
//                             </div>
//                             <span className={`text-[13px] font-medium px-3 py-1 rounded-full ${memberStatusStyles[member.status]}`}>
//                                 {member.status}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Stats Card */}
//             <div className='bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-4'>
//                 <div className='grid grid-cols-4 gap-4'>
//                     {/* Task Created */}
//                     <div>
//                         <p className='text-sm font-semibold text-gray-800 mb-2'>Task Created</p>
//                         <div className='flex items-center gap-1.5 text-sm text-gray-500'>
//                             <FiCalendar size={14} className='text-gray-400' />
//                             January 5 at 9:50 AM
//                         </div>
//                     </div>

//                     {/* Task Start Date */}
//                     <div>
//                         <p className='text-sm font-semibold text-gray-800 mb-2'>Task Start Date & Time</p>
//                         <div className='flex items-center gap-1.5 text-sm text-gray-500'>
//                             <FiCalendar size={14} className='text-gray-400' />
//                             January 5 at 9:50 AM
//                         </div>
//                     </div>

//                     {/* Status */}
//                     <div>
//                         <p className='text-sm font-semibold text-gray-800 mb-2'>Status</p>
//                         <span className='bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-lg'>
//                             In Progress
//                         </span>
//                     </div>

//                     {/* Subtask Progress */}
//                     <div>
//                         <div className='flex items-center justify-between mb-2'>
//                             <p className='text-sm font-semibold text-gray-800'>Subtask Progress</p>
//                             <span className='text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-lg'>
//                                 {completedSubtasks}/{totalSubtasks}
//                             </span>
//                         </div>
//                         <div className='w-full bg-gray-100 rounded-full h-2'>
//                             <div
//                                 className='bg-blue-500 h-2 rounded-full transition-all duration-500'
//                                 style={{ width: `${progressPercent}%` }}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Details Card */}
//             <div className='bg-white rounded-2xl p-5 border border-gray-100 shadow-sm'>
//                 {/* Task Title */}
//                 <div className='mb-4'>
//                     <p className='text-sm font-semibold text-gray-800'>Task Title</p>
//                     <p className='text-sm text-gray-500 mt-0.5'>Complete Math Homework</p>
//                 </div>

//                 {/* Task Description */}
//                 <div className='mb-4'>
//                     <p className='text-sm font-semibold text-gray-800'>Task Description</p>
//                     <p className='text-sm text-gray-500 mt-0.5 leading-relaxed'>
//                         Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress, clarify open points,Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress.
//                     </p>
//                 </div>

//                 {/* Sub Tasks */}
//                 <div className='bg-blue-50 rounded-lg px-4 py-2 mb-3'>
//                     <span className='text-sm font-semibold text-blue-700'>
//                         Sub-Tasks (0{subTasks.length})
//                     </span>
//                 </div>
//                 <ol className='list-decimal list-inside flex flex-col gap-1.5 px-1'>
//                     {subTasks.map((sub, i) => (
//                         <li key={i} className='text-sm text-gray-600'>{sub}</li>
//                     ))}
//                 </ol>
//             </div>

//         </div>
//     );
// };

// export default Page;


'use client';
import CardLoading from '@/Components/Common/CardLoading';
import url from '@/redux/api/baseUrl';
import { useGetTaskDetialsQuery } from '@/redux/fetures/taskManagementTabs/taskManagementTabs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { IoArrowBack } from 'react-icons/io5';

const memberStatusStyles = {
    inProgress: 'bg-blue-100 text-blue-700',
    notStarted: 'bg-gray-100 text-gray-700',
    completed: 'bg-green-100 text-green-700',
};

const Page = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetTaskDetialsQuery({ id });
    const fullTask = data?.data?.attributes;

    if (isLoading || !fullTask) {
        return (
            <div className="space-y-4 p-5 bg-gray-100 rounded-lg">
                {[...Array(3)].map((_, index) => (
                    <CardLoading key={index} />
                ))}
            </div>
        );
    }

    const assignedMembers = fullTask.assignedTo || [];
    const totalSubtasks = fullTask.subtasks?.length || 0;
    const completedSubtasks = fullTask.subtaskProgress?.completed || 0;
    const progressPercent = fullTask.subtaskProgress?.percentage || 0;
    const subTasks = fullTask.subtasks?.map((sub) => sub.title) || [];

    return (
        <div className="bg-gray-100 rounded-lg p-5">

            {/* Back Link */}
            <Link href="/dashboard" className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <IoArrowBack /> Tasks Details
            </Link>

            {/* Assigned Members */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-4">
                <p className="text-base font-bold text-gray-900 mb-4">Assigned all</p>
                <div className="flex items-center gap-6">
                    {assignedMembers.map((member) => (
                        <div key={member.child._id} className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-2">
                                <img
                                    src={url + member.child.profileImage}
                                    alt={member.child.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="text-sm font-semibold text-gray-800">{member.child.name}</span>
                            </div>
                            <span
                                className={`text-[13px] capitalize font-medium px-3 py-1 rounded-full ${memberStatusStyles[member.progress?.status] || 'bg-gray-100 text-gray-700'
                                    }`}
                            >
                                {member.progress?.status || 'Not Started'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-4">
                <div className="grid grid-cols-4 gap-4">
                    {/* Task Created */}
                    <div>
                        <p className="text-sm font-semibold text-gray-800 mb-2">Task Created</p>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                            <FiCalendar size={14} className="text-gray-400" />
                            {new Date(fullTask.createdAt).toLocaleString()}
                        </div>
                    </div>

                    {/* Task Start Date */}
                    <div>
                        <p className="text-sm font-semibold text-gray-800 mb-2">Task Start Date & Time</p>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                            <FiCalendar size={14} className="text-gray-400" />
                            {new Date(fullTask.startTime).toLocaleString()}
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <p className="text-sm font-semibold text-gray-800 mb-2">Status</p>
                        <span className={`text-xs font-semibold px-4 py-1 rounded-lg ${fullTask.status === 'inProgress'
                            ? 'bg-blue-500 text-white'
                            : fullTask.status === 'completed'
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-300 text-gray-800'
                            }`}>
                            {fullTask.status}
                        </span>
                    </div>

                    {/* Subtask Progress */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-gray-800">Subtask Progress</p>
                            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-lg">
                                {completedSubtasks}/{totalSubtasks}
                            </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Card */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                {/* Task Title */}
                <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800">Task Title</p>
                    <p className="text-sm text-gray-500 mt-0.5">{fullTask.title}</p>
                </div>

                {/* Task Description */}
                <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800">Task Description</p>
                    <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{fullTask.description}</p>
                </div>

                {/* Sub Tasks */}
                <div className="bg-blue-50 rounded-lg px-4 py-2 mb-3">
                    <span className="text-sm font-semibold text-blue-700">
                        Sub-Tasks ({totalSubtasks})
                    </span>
                </div>
                <ol className="list-decimal list-inside flex flex-col gap-1.5 px-1">
                    {subTasks.map((sub, i) => (
                        <li key={i} className="text-sm text-gray-600">{sub}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Page;