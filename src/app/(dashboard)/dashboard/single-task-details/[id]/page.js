

'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';
import { IoArrowBack } from 'react-icons/io5';
import CardLoading from '@/Components/Common/CardLoading';
import url from '@/redux/api/baseUrl';
import { useGetTaskDetialsQuery } from '@/redux/fetures/taskManagementTabs/taskManagementTabs';

const memberStatusStyles = {
    inprogress: 'bg-blue-100 text-blue-700',
    notstarted: 'bg-gray-100 text-gray-700',
    completed: 'bg-green-100 text-green-700',
};

const Page = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetTaskDetialsQuery({ id });

    const fullTask = data?.data?.attributes;

    console.log(fullTask)

    // Show loading placeholder if data is not ready
    if (isLoading || !fullTask) {
        return (
            <div className="space-y-4 p-5 bg-gray-100 rounded-lg">
                {[...Array(3)].map((_, index) => (
                    <CardLoading key={index} />
                ))}
            </div>
        );
    }

    // Assigned members
    const assignedMembers = fullTask.assignedTo || [];

    // Subtasks
    const totalSubtasks = fullTask.subtasks?.length || 0;
    const completedSubtasks = fullTask.subtaskProgress?.completed || 0;
    const progressPercent = fullTask.subtaskProgress?.percentage || 0;
    const subTasks = fullTask.subtasks || [];

    // Date formatting helper
    const formatDateTime = (dateStr) => {
        if (!dateStr) return 'N/A';
        const date = new Date(dateStr);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return (
        <div className="bg-gray-100 rounded-lg p-5 space-y-5">
            {/* Back Link */}
            <Link
                href="/dashboard"
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
            >
                <IoArrowBack /> Tasks Details
            </Link>

            {/* Assigned Members */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <p className="text-base font-bold text-gray-900 mb-4">Assigned Members</p>
                <div className="flex flex-wrap gap-6">
                    {assignedMembers.map((member) => {
                        const statusKey = member.progress?.status?.toLowerCase() || 'notstarted';
                        const statusClass = memberStatusStyles[statusKey] || 'bg-gray-100 text-gray-700';

                        return (
                            <div key={member.child._id} className="flex flex-col items-center gap-1">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={
                                            member.child.profileImage.includes('cloudinary.com')
                                            ? member.child.profileImage
                                            : url + member.child.profileImage
                                        }
                                        alt={member.child.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <span className="text-sm font-semibold text-gray-800">
                                        {member.child.name}
                                    </span>
                                </div>
                                <span
                                    className={`text-[13px] capitalize font-medium px-3 py-1 rounded-full ${fullTask?.status}`}
                                >
                                    {fullTask?.status}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="grid grid-cols-4 gap-4">
                    {/* Task Created */}
                    <div>
                        <p className="text-sm font-semibold text-gray-800 mb-2">Task Created</p>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                            <FiCalendar size={14} className="text-gray-400" />
                            {formatDateTime(fullTask.createdAt)}
                        </div>
                    </div>

                    {/* Task Start Date */}
                    <div>
                        <p className="text-sm font-semibold text-gray-800 mb-2">Task Start Date & Time</p>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                            <FiCalendar size={14} className="text-gray-400" />
                            {formatDateTime(fullTask.startTime)}
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <p className="text-sm font-semibold text-gray-800 mb-2">Status</p>
                        <span
                            className={`text-xs font-semibold px-4 py-1 rounded-lg ${fullTask.status === 'inProgress'
                                ? 'bg-blue-500 text-white'
                                : fullTask.status === 'completed'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-300 text-gray-800'
                                }`}
                        >
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
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">
                {/* Task Title */}
                <div>
                    <p className="text-sm font-semibold text-gray-800">Task Title</p>
                    <p className="text-sm text-gray-500 mt-0.5">{fullTask.title}</p>
                </div>

                {/* Task Description */}
                <div>
                    <p className="text-sm font-semibold text-gray-800">Task Description</p>
                    <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{fullTask.description}</p>
                </div>

                {/* Sub Tasks */}
                <div>
                    <div className="bg-blue-50 rounded-lg px-4 py-2 mb-3">
                        <span className="text-sm font-semibold text-blue-700">
                            Sub-Tasks ({totalSubtasks})
                        </span>
                    </div>
                    <ol className="list-decimal list-inside flex flex-col gap-1.5 px-1">
                        {subTasks.map((sub, i) => {
                            const subStatusKey = sub.status?.toLowerCase() || 'notstarted';
                            const subStatusClass = memberStatusStyles[subStatusKey] || 'bg-gray-100 text-gray-700';
                            return (
                                <li
                                    key={i}
                                    className="text-sm text-gray-600 flex justify-between items-center gap-2"
                                >
                                    {sub.title}
                                    <span
                                        className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${fullTask?.status} `}
                                    >
                                        {fullTask?.status}
                                    </span>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Page;