import React from 'react';
import { FiClock } from 'react-icons/fi';

const tasks = [
    {
        id: 1,
        title: 'Complete Math Homework',
        status: 'Not Started',
        startDate: '12/10/2026 – 08:30 AM',
        description: 'Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress, clarify open points,Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress.',
        assignedBy: 'Mr.Tom Alax',
        assignedByRole: 'Secondary User',
        assignedByImg: 'https://i.pravatar.cc/40?img=11',
    },
    {
        id: 2,
        title: 'Complete Math Homework',
        status: 'Not Started',
        startDate: '12/10/2026 – 08:30 AM',
        description: 'Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress, clarify open points,Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress.',
        assignedBy: 'Mr.Tom Alax',
        assignedByRole: 'Secondary User',
        assignedByImg: 'https://i.pravatar.cc/40?img=12',
    },
];

const Divider = () => <hr className='border-dashed border-gray-200 my-3' />;

const TaskCard = ({ task }) => {
    return (
        <div className='bg-white rounded-2xl p-5 shadow-sm border border-gray-100'>
            {/* Title + Status */}
            <div className='flex items-center justify-between mb-1'>
                <h2 className='text-lg font-bold text-gray-900'>{task.title}</h2>
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
                    <img src={task.assignedByImg} alt={task.assignedBy} className='w-10 h-10 rounded-full object-cover' />
                    <div className='flex flex-col leading-tight'>
                        <span className='text-[10px] text-gray-400'>Assigned By</span>
                        <div className='flex items-center gap-2'>
                            <span className='text-sm font-semibold text-gray-900'>{task.assignedBy}</span>
                            <span className='bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full'>{task.assignedByRole}</span>
                        </div>
                    </div>
                </div>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-8 py-2.5 rounded-xl transition-colors cursor-pointer'>
                    Start
                </button>
            </div>
        </div>
    );
};

const TaskTabsNotStarted = () => {
    return (
        <div className='flex flex-col gap-4'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskTabsNotStarted;