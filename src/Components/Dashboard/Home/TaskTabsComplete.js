import React from 'react';
import { FiClock, FiMoreHorizontal } from 'react-icons/fi';

const tasks = [
    {
        id: 1,
        title: 'Complete Math Homework',
        status: 'Completed',
        startDate: '12/10/2026 – 08:30 AM',
        description: 'Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress, clarify open points,Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress.',
        subTasks: ['Call with design team', 'Review project milestones', 'Update client on progress'],
        assignedAll: [
            { name: 'Alax Morgn', status: 'Completed', img: 'https://i.pravatar.cc/40?img=11' },
            { name: 'Sam Rivera', status: 'Completed', img: 'https://i.pravatar.cc/40?img=47' },
            { name: 'Jamie Chen', status: 'Completed', img: 'https://i.pravatar.cc/40?img=53' },
        ],
        taskType: 'Group Tasks',
    },
    {
        id: 2,
        title: 'Complete Math Homework',
        status: 'Completed',
        startDate: '12/10/2026 – 08:30 AM',
        description: 'Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress, clarify open points,Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress.',
        subTasks: ['Call with design team', 'Review project milestones', 'Update client on progress'],
        assignedAll: [
            { name: 'Alax Morgn', status: 'Completed', img: 'https://i.pravatar.cc/40?img=11' },
            { name: 'Sam Rivera', status: 'Completed', img: 'https://i.pravatar.cc/40?img=47' },
            { name: 'Jamie Chen', status: 'Completed', img: 'https://i.pravatar.cc/40?img=53' },
        ],
        taskType: 'Group Tasks',
    },
];

const memberStatusStyles = {
    'Not Started': 'bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full',
    'In Progress': 'bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-full',
    'Completed': 'bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full',
};

const Divider = () => <hr className='border-dashed border-gray-200 my-3' />;

const TaskCard = ({ task }) => {
    const handleGotaskDetials = () => {
        if (task.taskType === 'Group Tasks') {
            window.location.href = '/dashboard/group-task-details';
        } else {
            window.location.href = '/dashboard/single-task-details';
        }
    }
    return (
        <div onClick={handleGotaskDetials} className='bg-white cursor-pointer rounded-2xl p-5 shadow-sm border border-gray-100'>
            {/* Title + Status */}
            <div className='flex items-center justify-between mb-1'>
                <h2 className='text-lg font-bold text-gray-900'>{task.title}</h2>
                <span className='text-xs font-semibold px-3 py-1 rounded-lg bg-green-100 text-green-600'>
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
            <div className='bg-green-50 rounded-lg px-4 py-2 mb-3'>
                <span className='text-sm font-semibold text-green-700'>
                    Sub-Tasks (0{task.subTasks.length})
                </span>
            </div>
            <ol className='list-decimal list-inside flex flex-col gap-1 mb-3 px-1'>
                {task.subTasks.map((sub, i) => (
                    <li key={i} className='text-sm  text-gray-600'><del>{sub}</del></li>
                ))}
            </ol>

            <Divider />

            {/* Assigned All + Task Type */}
            <div className='flex items-end justify-between'>
                <div className='flex flex-col gap-2'>
                    <span className='text-sm font-semibold text-gray-800'>Assigned all</span>
                    <div className='flex items-center gap-4'>
                        {task.assignedAll.map((member, i) => (
                            <div key={i} className='flex flex-col items-center gap-1'>
                                <div className='flex items-center gap-1.5'>
                                    <img src={member.img} alt={member.name} className='w-8 h-8 rounded-full object-cover' />
                                    <span className='text-sm font-medium text-gray-800'>{member.name}</span>
                                </div>
                                <span className={memberStatusStyles[member.status]}>{member.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col items-end gap-1'>
                    <span className='text-xs text-gray-400'>Task Type</span>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm font-semibold text-gray-800'>{task.taskType}</span>
                        <button className='text-gray-400 hover:text-gray-600 transition-colors cursor-pointer'>
                            <FiMoreHorizontal size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TaskTabsComplete = () => {
    return (
        <div className='flex flex-col gap-4'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskTabsComplete;