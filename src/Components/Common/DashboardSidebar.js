'use client'
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { RiDashboardFill } from 'react-icons/ri';
import { LuClipboardList } from 'react-icons/lu';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { MdCardMembership } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
import { useGetTeamMembersUsersInfoQuery } from '@/redux/fetures/teamMembers/teamMembers';
import url from '@/redux/api/baseUrl';
import CardLoading from './CardLoading';

const menuItems = [
    { name: 'Dashboard', icon: <RiDashboardFill size={24} />, path: '/dashboard' },
    { name: 'Task Monitoring', icon: <LuClipboardList size={24} />, path: '/dashboard/task-monitoring' },
    { name: 'Team Members', icon: <FiUsers size={24} />, path: '/dashboard/team-members' },
    { name: 'Subscricption', icon: <MdCardMembership size={24} />, path: '/dashboard/subscription' },
    { name: 'Setting', icon: <FiSettings size={24} />, path: '/dashboard/setting' },
];

const DashboardSidebar = () => {

    const { data, isLoading } = useGetTeamMembersUsersInfoQuery({ page: 1, limit: 5 });

    const teamMembersRaw = data?.data?.attributes?.docs || [];

    // ✅ MAP API DATA → UI
    const teamMembers = teamMembersRaw.map((item, index) => ({
        id: item._id,
        name: item.name,
        img: item.profileImage?.imageUrl.includes('cloudinary.com') ? item.profileImage.imageUrl : url + item.profileImage?.imageUrl,
            
        tasks: item.taskProgress?.totalTasks || 0
    }));

    const pathname = usePathname();
    const [showModal, setShowModal] = useState(false);
    const navigate = useRouter();

    const isActive = (path) => {
        if (path === '/dashboard') return pathname === '/dashboard';
        return pathname.startsWith(path);
    };

    const handleLogout = () => {
        setShowModal(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate.push('/');
    };

    return (
        <>
            <div className='min-w-72 w-72 h-screen border-r-2 border-gray-200 bg-gray-100 flex flex-col py-3'>

                {/* Logo */}
                <Link href="/" className='flex flex-col items-center py-6 gap-1'>
                    <img className='w-28' src="/Images/Auth/logo.png" alt="" />
                </Link>

                {/* Nav Menu */}
                <nav className='flex flex-col gap-1 px-3'>
                    {menuItems.map((item) => (
                        <Link
                            href={item.path}
                            key={item.name}
                            className={`flex items-center rounded gap-3 px-4 py-2.5 text-sm font-medium
                                ${isActive(item.path)
                                    ? 'bg-primary text-white'
                                    : 'text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <span className={isActive(item.path) ? 'text-white' : 'text-gray-500'}>
                                {item.icon}
                            </span>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Team Member Section */}
                <div className='mt-6 mx-3 bg-white rounded-xl p-3 shadow-sm'>
                    <p className='font-semibold text-gray-500 mb-3 px-1'>Team Member</p>
                    {
                        isLoading && (
                            <div>
                                {[...Array(1)].map((_, index) => (
                                    <CardLoading key={index} />
                                ))}
                            </div>
                        )
                    }

                    <div className='flex flex-col gap-4'>
                        {teamMembers.map((member) => (
                            <div key={member.id} className='flex items-center gap-3'>
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className='w-8 h-8 rounded-full object-cover'
                                />

                                <div className='flex flex-col leading-tight'>
                                    <span className='text-[11px] text-gray-400'>
                                        Tasks: {member.tasks}
                                    </span>
                                    <span className='font-semibold text-[14px] text-gray-800'>
                                        {member.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logout */}
                <div>
                    <button
                        onClick={() => setShowModal(true)}
                        className='flex items-center justify-center w-[90%] mx-auto mt-5 bg-red-500 text-white gap-2 px-3 py-2 rounded text-sm hover:bg-red-600'
                    >
                        Logout <IoIosLogOut />
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
                    <div className='bg-white rounded-xl p-8 w-[350px] text-center'>
                        <h2 className='text-lg font-semibold mb-2'>Confirm Logout</h2>
                        <p className='text-sm text-gray-500 mb-5'>
                            Are you sure you want to logout?
                        </p>

                        <div className='flex justify-center gap-3'>
                            <button
                                onClick={() => setShowModal(false)}
                                className='px-4 py-2 bg-gray-200 rounded'
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleLogout}
                                className='px-4 py-2 bg-red-500 text-white rounded'
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DashboardSidebar;