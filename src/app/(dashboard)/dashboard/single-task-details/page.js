'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaCrown } from 'react-icons/fa';
import { FiCalendar, FiChevronDown } from 'react-icons/fi';

const modes = [
    { label: 'Calm', emoji: '😌' },
    { label: 'Encouraging', emoji: '🏅' },
    { label: 'Logical', emoji: '🧠' },
];

const subTasks = [
    'Call with design team',
    'Review project milestones',
    'Update client on progress',
];

const Page = () => {
    const [activeMode, setActiveMode] = useState('Calm');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const completedSubtasks = 1;
    const totalSubtasks = subTasks.length;
    const progressPercent = (completedSubtasks / totalSubtasks) * 100;

    return (
        <div className='bg-gray-100 rounded-lg p-5'>

            {/* Title */}
            <h1 className='text-2xl font-bold text-gray-900 mb-6'>Tasks details</h1>

            {/* Top Card — User + Support Mode */}
            <div className='bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-4'>
                <div className='flex items-center justify-between flex-wrap gap-3'>
                    {/* User */}
                    <div className='flex items-center gap-3'>
                        <div className='relative'>
                            <img
                                src='https://i.pravatar.cc/56?img=11'
                                alt='Alax Morgn'
                                className='w-20 h-20 rounded-full object-cover'
                            />
                            <span className='absolute -bottom-0.5 -right-0.5 w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center'>
                                <FaCrown className='text-white' size={20} />
                            </span>
                        </div>
                        <div>
                            <p className='font-bold text-gray-900 text-base underline'>Alax Morgn</p>
                            <p className='text-sm text-gray-400'>Secondary User</p>
                        </div>
                    </div>

                    {/* Support Mode + Change Mode Dropdown */}
                    <div className='flex items-center gap-4'>
                        <div className='text-right'>
                            <p className='text-sm font-semibold text-gray-800'>Support Mode</p>
                            <p className='text-sm text-gray-400'>{activeMode}</p>
                        </div>

                        {/* Dropdown */}
                        <div className='relative' ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className='flex items-center gap-1.5 border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer'
                            >
                                Change Mode
                                <FiChevronDown
                                    size={15}
                                    className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {dropdownOpen && (
                                <div className='absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-2xl shadow-lg z-50 overflow-hidden'>
                                    {modes.map((mode) => (
                                        <button
                                            key={mode.label}
                                            onClick={() => {
                                                setActiveMode(mode.label);
                                                setDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors cursor-pointer
                                                ${activeMode === mode.label
                                                    ? 'bg-blue-50 text-blue-600 font-semibold'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span>{mode.emoji}</span>
                                            {mode.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Card */}
            <div className='bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-4'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {/* Task Created */}
                    <div>
                        <p className='text-sm font-semibold text-gray-800 mb-2'>Task Created</p>
                        <div className='flex items-center gap-1.5 text-sm text-gray-500'>
                            <FiCalendar size={14} className='text-gray-400' />
                            January 5 at 9:50 AM
                        </div>
                    </div>

                    {/* Task Start Date */}
                    <div>
                        <p className='text-sm font-semibold text-gray-800 mb-2'>Task Start Date & Time</p>
                        <div className='flex items-center gap-1.5 text-sm text-gray-500'>
                            <FiCalendar size={14} className='text-gray-400' />
                            January 5 at 9:50 AM
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <p className='text-sm font-semibold text-gray-800 mb-2'>Status</p>
                        <span className='bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-lg'>
                            In Progress
                        </span>
                    </div>

                    {/* Subtask Progress */}
                    <div>
                        <div className='flex items-center justify-between mb-2'>
                            <p className='text-sm font-semibold text-gray-800'>Subtask Progress</p>
                            <span className='text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-lg'>
                                {completedSubtasks}/{totalSubtasks}
                            </span>
                        </div>
                        <div className='w-full bg-gray-100 rounded-full h-2'>
                            <div
                                className='bg-blue-500 h-2 rounded-full transition-all duration-500'
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Card */}
            <div className='bg-white rounded-2xl p-5 border border-gray-100 shadow-sm'>
                {/* Task Type */}
                <div className='mb-4'>
                    <p className='text-sm font-semibold text-gray-800'>Task Type</p>
                    <p className='text-sm text-gray-500 mt-0.5'>General</p>
                </div>

                {/* Task Title */}
                <div className='mb-4'>
                    <p className='text-sm font-semibold text-gray-800'>Task Title</p>
                    <p className='text-sm text-gray-500 mt-0.5'>Complete Math Homework</p>
                </div>

                {/* Task Description */}
                <div className='mb-4'>
                    <p className='text-sm font-semibold text-gray-800'>Task Description</p>
                    <p className='text-sm text-gray-500 mt-0.5 leading-relaxed'>
                        Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress, clarify open points,Finish exercises 1–10 from chapter 5 This call is scheduled to align the design team on current progress.
                    </p>
                </div>

                {/* Sub Tasks */}
                <div className='bg-blue-50 rounded-lg px-4 py-2 mb-3'>
                    <span className='text-sm font-semibold text-blue-700'>
                        Sub-Tasks (0{subTasks.length})
                    </span>
                </div>
                <ol className='list-decimal list-inside flex flex-col gap-1.5 px-1'>
                    {subTasks.map((sub, i) => (
                        <li key={i} className='text-sm text-gray-600'>{sub}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Page;