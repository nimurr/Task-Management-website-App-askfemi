'use client'
import url from '@/redux/api/baseUrl';
import { useGetNotificationsQuery, useReadAllNotificationsMutation, useReadSingleNotificationMutation } from '@/redux/fetures/notificaiton/notificaiton';
import { useGetProfileQuery } from '@/redux/fetures/profile/profile';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { FiSearch, FiBell, FiChevronDown, FiMenu, FiCheck, FiTrash2, FiClipboard, FiUsers, FiUser } from 'react-icons/fi';

// Helper: relative time from ISO date
const timeAgo = (isoDate) => {
    const diff = Math.floor((Date.now() - new Date(isoDate)) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
};

// Helper: icon & color based on notification type
const getIconConfig = (type) => {
    switch (type) {
        case 'assignment':
            return { icon: <FiUsers size={14} />, bg: 'bg-blue-100 text-blue-500' };
        case 'task':
            return { icon: <FiClipboard size={14} />, bg: 'bg-green-100 text-green-500' };
        default:
            return { icon: <FiUser size={14} />, bg: 'bg-gray-100 text-gray-500' };
    }
};

const DashboardHeader = ({ toggleSidebar }) => {

    const { data: notificationData } = useGetNotificationsQuery();
    const rawNotifications = notificationData?.data?.attributes?.results || [];
    const [readSingleNotification] = useReadSingleNotificationMutation();
    const [readAllNotifications] = useReadAllNotificationsMutation();

    // Map API fields to component shape
    const mapped = rawNotifications.map((n) => {
        const { icon, bg } = getIconConfig(n.type);
        return {
            id: n._id,
            title: n.title,
            message: n.subTitle,
            time: timeAgo(n.createdAt),
            read: n.status !== 'pending',   // pending = unread
            icon,
            iconBg: bg,
            linkId: n.linkId,
            linkFor: n.linkFor,
        };
    });

    const [notifOpen, setNotifOpen] = useState(false);
    const [notifs, setNotifs] = useState([]);
    const notifRef = useRef(null);

    // Sync when API data loads
    useEffect(() => {
        if (mapped.length > 0) setNotifs(mapped);
    }, [notificationData]);

    const unreadCount = notifs.filter((n) => !n.read).length;

    const { data, error } = useGetProfileQuery(undefined, {
        skip: typeof window === 'undefined',
        refetchOnMountOrArgChange: true,
    });

    const isSessionExpired = error?.status === 401 || error?.data?.code === 401;
    const user = isSessionExpired ? null : data?.data?.attributes;

    if (isSessionExpired) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (notifRef.current && !notifRef.current.contains(e.target)) {
                setNotifOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const markAllRead = async () => {
        // Optimistic UI update
        setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));

        try {
            await readAllNotifications().unwrap();
        } catch (err) {
            // Revert on API failure
            setNotifs((prev) => prev.map((n) => ({ ...n, read: false })));
            console.error('Failed to mark all notifications as read:', err);
        }
    };

    const markRead = async (id) => {
        const target = notifs.find((n) => n.id === id);
        if (!target || target.read) return; // skip if already read

        // Optimistic UI update
        setNotifs((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));

        try {
            await readSingleNotification(id).unwrap();
        } catch (err) {
            // Revert on API failure
            setNotifs((prev) => prev.map((n) => n.id === id ? { ...n, read: false } : n));
            console.error('Failed to mark notification as read:', err);
        }
    };

    const deleteNotif = (id, e) => {
        e.stopPropagation();
        setNotifs((prev) => prev.filter((n) => n.id !== id));
    };

    return (
        <div className='w-full relative bg-[#eef1f5] h-[60px] flex items-center justify-between px-4 border-b border-gray-200'>

            {/* Mobile Menu */}
            <button onClick={toggleSidebar} className='lg:hidden'>
                <FiMenu size={30} />
            </button>

            {/* Search Bar */}
            <div className='hidden lg:flex items-center bg-white rounded-lg px-3 py-2 w-[380px] shadow-sm border border-gray-100'>
                <FiSearch className='text-gray-400 w-4 h-4 mr-2 flex-shrink-0' />
                <input
                    type='text'
                    placeholder='Search name'
                    className='bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 w-full'
                />
            </div>

            {/* Right Section */}
            <div className='flex items-center gap-3'>

                {/* Bell Icon */}
                <div className='relative' ref={notifRef}>
                    <button
                        onClick={() => setNotifOpen(!notifOpen)}
                        className='relative w-10 h-10 flex border border-primary items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer transition-colors'
                    >
                        <FiBell className='w-5 h-5 text-primary' />
                        {unreadCount > 0 && (
                            <span className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center'>
                                {unreadCount}
                            </span>
                        )}
                    </button>

                    {/* Notification Dropdown */}
                    {notifOpen && (
                        <div className='absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden'>

                            {/* Header */}
                            <div className='flex items-center justify-between px-4 py-3 border-b border-gray-100'>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-sm font-bold text-gray-900'>Notifications</h3>
                                    {unreadCount > 0 && (
                                        <span className='bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full'>
                                            {unreadCount} new
                                        </span>
                                    )}
                                </div>
                                {unreadCount > 0 && (
                                    <button
                                        onClick={markAllRead}
                                        className='flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600 font-medium cursor-pointer transition-colors'
                                    >
                                        <FiCheck size={12} />
                                        Mark all read
                                    </button>
                                )}
                            </div>

                            {/* Notification List */}
                            <div className='max-h-[340px] overflow-y-auto'>
                                {notifs.length === 0 ? (
                                    <div className='flex flex-col items-center justify-center py-10 text-gray-300'>
                                        <FiBell size={32} />
                                        <p className='text-sm mt-2'>No notifications</p>
                                    </div>
                                ) : (
                                    notifs.map((notif) => (
                                        <div
                                            key={notif.id}
                                            onClick={() => markRead(notif.id)}
                                            className={`group flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors border-b border-gray-50 last:border-0
                                                ${notif.read ? 'bg-white hover:bg-gray-50' : 'bg-blue-50/50 hover:bg-blue-50'}`}
                                        >
                                            {/* Icon */}
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${notif.iconBg}`}>
                                                {notif.icon}
                                            </div>

                                            {/* Content */}
                                            <div className='flex-1 min-w-0'>
                                                <div className='flex items-center justify-between gap-1'>
                                                    <p className='text-xs font-bold text-gray-800'>{notif.title}</p>
                                                    {!notif.read && (
                                                        <span className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0' />
                                                    )}
                                                </div>
                                                <p className='text-xs text-gray-500 mt-0.5 leading-relaxed'>{notif.message}</p>
                                                <p className='text-[10px] text-gray-400 mt-1'>{notif.time}</p>
                                            </div>

                                            {/* Delete */}
                                            <button
                                                onClick={(e) => deleteNotif(notif.id, e)}
                                                className='opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition-all cursor-pointer flex-shrink-0 mt-0.5'
                                            >
                                                <FiTrash2 size={13} />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Footer */}
                            {notifs.length > 0 && (
                                <div className='px-4 py-2.5 border-t border-gray-100 text-center'>
                                    <button className='text-xs text-blue-500 hover:text-blue-600 font-medium cursor-pointer transition-colors'>
                                        View all notifications
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* User Profile */}
                <Link href='/dashboard/setting' className='flex items-center gap-2 cursor-pointer hover:bg-blue-200 bg-blue-100 border border-blue-200 rounded-lg px-2 py-1 transition-colors'>
                    <div className='w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-400 flex-shrink-0 flex items-center justify-center'>
                        <img className='w-full h-full' 
                        // src={url + user?.profileImage?.imageUrl} 
                          src={user?.profileImage?.imageUrl.includes('cloudinary.com') ? user?.profileImage?.imageUrl : url + user?.profileImage?.imageUrl}
                        alt="" />
                    </div>
                    <div className='flex flex-col leading-tight'>
                        <span className='text-sm font-semibold text-gray-800'>{user?.name}</span>
                        <span className='text-xs text-gray-500 capitalize'>{user?.role} account</span>
                    </div>
                    <FiChevronDown className='w-4 h-4 text-gray-500 ml-1' />
                </Link>
            </div>
        </div>
    );
};

export default DashboardHeader;