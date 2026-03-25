'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { RiDashboardFill } from 'react-icons/ri';
import { LuClipboardList } from 'react-icons/lu';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { MdCardMembership } from 'react-icons/md';

const menuItems = [
    { name: 'Dashboard', icon: <RiDashboardFill size={24} />, path: '/dashboard' },
    { name: 'Task Monitoring', icon: <LuClipboardList size={24} />, path: '/dashboard/task-monitoring' },
    { name: 'Team Members', icon: <FiUsers size={24} />, path: '/dashboard/team-members' },
    { name: 'Subscricption', icon: <MdCardMembership size={24} />, path: '/dashboard/subscription' },
    { name: 'Setting', icon: <FiSettings size={24} />, path: '/dashboard/setting' },
];

const teamMembers = [
    { name: 'Alax Morgn', tasks: '2 active tasks', img: 'https://i.pravatar.cc/32?img=1' },
    { name: 'Sam Rivera', tasks: '2 active tasks', img: 'https://i.pravatar.cc/32?img=2' },
    { name: 'Alax Morgn', tasks: '2 active tasks', img: 'https://i.pravatar.cc/32?img=3' },
    { name: 'Alax Morgn', tasks: '2 active tasks', img: 'https://i.pravatar.cc/32?img=4' },
    { name: 'Alax Morgn', tasks: '2 active tasks', img: 'https://i.pravatar.cc/32?img=5' },
];

const DashboardSidebar = () => {
    const pathname = usePathname();

    const isActive = (path) => {
        if (path === '/dashboard') {
            return pathname === '/dashboard';
        }
        return pathname.startsWith(path);
    };

    return (
        <div className='min-w-72 w-72 border-r-2 border-gray-200 bg-gray-100 min-h-screen flex flex-col'>

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
                        className={`flex items-center rounded gap-3 px-4 py-2.5 cursor-pointer transition-colors text-sm font-medium
                            ${isActive(item.path)
                                ? 'bg-primary text-white '
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
                <div className='flex flex-col gap-5'>
                    {teamMembers.map((member, index) => (
                        <div key={index} className='flex items-center cursor-pointer gap-2'>
                            <img
                                src={member.img}
                                alt={member.name}
                                className='w-8 h-8 rounded-full object-cover flex-shrink-0'
                            />
                            <div className='flex flex-col leading-tight'>
                                <span className='text-[12px] text-gray-400'>{member.tasks}</span>
                                <span className='font-semibold text-[14px] text-gray-800'>{member.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;