'use client';

import url from "@/redux/api/baseUrl";
import { useGetTeamMembersUserDetialsInfoQuery } from "@/redux/fetures/teamMembers/teamMembers";
import { useParams } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const Page = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetTeamMembersUserDetialsInfoQuery(id);

    const userDetails = data?.data?.attributes;
    const member = userDetails?.member;
    const statistics = userDetails?.statistics;
    const tasks = userDetails?.tasks || [];

    // ✅ Dropdown State
    const [openDropdown, setOpenDropdown] = useState(false);
    const [mode, setMode] = useState(member?.supportMode || "calm");
    const dropdownRef = useRef(null);

    // ✅ Close dropdown when click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (isLoading) return <p className="p-6">Loading...</p>;

    return (
        <div className="bg-gray-100 rounded-lg min-h-screen p-6">
            <div className="mx-auto space-y-6">

                {/* Profile Header */}
                <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between flex-wrap">
                    <div className="flex items-center flex-wrap gap-4">
                        <img
                            src={url + member?.profileImage?.imageUrl || "https://i.pravatar.cc/100"}
                            alt="profile"
                            className="w-14 h-14 rounded-full"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">{member?.name}</h2>
                            <p className="text-gray-500 text-sm">{member?.roleType} User</p>
                        </div>
                    </div>

                    <div className="flex items-center flex-wrap gap-4 relative" ref={dropdownRef}>

                        {/* Support Mode */}
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Support Mode</p>
                            <p className="text-sm font-medium text-gray-700 capitalize">
                                {mode}
                            </p>
                        </div>

                        {/* Dropdown Button */}
                        <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
                        >
                            Change Mode
                        </button>

                        {/* Dropdown */}
                        {openDropdown && (
                            <div className="absolute right-20 top-14 bg-white border rounded-lg shadow-md w-40 z-50">
                                {["calm", "strict", "friendly"].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            setMode(item);
                                            setOpenDropdown(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 capitalize
                                            ${mode === item ? "bg-blue-100 font-medium" : ""}
                                        `}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}

                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Personal Info */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-6">Personal Information</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                        <div>
                            <p className="text-gray-500">User name</p>
                            <p className="font-medium">{member?.name}</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Email</p>
                            <p className="font-medium">{member?.email}</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Address</p>
                            <p className="font-medium">{member?.address || "N/A"}</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Date of Birth</p>
                            <p className="font-medium">
                                {member?.dob ? new Date(member.dob).toLocaleDateString() : "N/A"}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-500">Age</p>
                            <p className="font-medium">{member?.age || "N/A"}</p>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <p className="text-gray-500 text-sm">Total</p>
                        <p className=" font-semibold text-2xl mt-2">{statistics?.totalTasks}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Completed</p>
                        <p className="text-green-600 font-semibold text-2xl mt-2">{statistics?.completedTasks}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">In Progress</p>
                        <p className="text-blue-600 font-semibold text-2xl mt-2">{statistics?.inProgressTasks}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Pending</p>
                        <p className="text-yellow-600 font-semibold text-2xl mt-2">{statistics?.pendingTasks}</p>
                    </div>
                </div>

                {/* Tasks */}
                {tasks.map((task) => {
                    const progress =
                        task.totalSubtasks > 0
                            ? Math.round((task.completedSubtasks / task.totalSubtasks) * 100)
                            : 0;

                    return (
                        <div key={task._id} className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-semibold">{task.title}</h3>

                                <span className={`text-white text-xs px-3 py-2 rounded-full
                                    ${task.status === "completed" && "bg-green-600"}
                                    ${task.status === "inProgress" && "bg-blue-600"}
                                    ${task.status === "pending" && "bg-yellow-500"}
                                `}>
                                    {task.status}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 mb-2">
                                Due Date: {new Date(task.dueDate).toLocaleDateString()}
                            </p>

                            <p className="text-sm text-gray-600 mb-4">
                                {task.description}
                            </p>

                            {/* Subtasks */}
                            {task.subtasks?.length > 0 && (
                                <div className="bg-blue-50 p-3 rounded-md mb-4">
                                    <p className="text-sm font-medium mb-2">
                                        Sub-Tasks ({task.subtasks.length})
                                    </p>

                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {task.subtasks.map((sub) => (
                                            <li key={sub._id}>
                                                {sub.isCompleted ? "✔" : "○"} {sub.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Assigned Users */}
                            <div className="flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    {task.assignedUserIds?.map((user, i) => (
                                        <img
                                            key={i}
                                            src={url + user?.profileImage?.imageUrl || "https://i.pravatar.cc/40"}
                                            className="w-8 h-8 rounded-full border"
                                        />
                                    ))}
                                </div>

                                {/* Progress */}
                                <div className="flex items-center gap-3">
                                    <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-500"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        {progress}% Completed
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Page;