'use client'
import PasswordTab from '@/Components/Dashboard/Setting/PasswordTab';
import PrivacyTab from '@/Components/Dashboard/Setting/PrivacyTab';
import ProfileComponent from '@/Components/Dashboard/Setting/ProfileComponent';
import React, { useState } from 'react';
import { FiUser, FiLock, FiBell, FiShield } from 'react-icons/fi';

const tabs = [
    { id: 'profile', label: 'Profile', icon: <FiUser size={16} /> },
    { id: 'password', label: 'Password', icon: <FiLock size={16} /> }, 
    { id: 'privacy', label: 'Permissions access', icon: <FiShield size={16} /> },
];



const Page = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className='bg-gray-100 rounded-lg min-h-screen p-5'>
            {/* Header */}
            <h1 className='text-2xl font-bold text-gray-900 mb-1'>Setting</h1>
            <p className='text-sm text-gray-400 mb-6'>Manage your account settings and preferences</p>

            {/* Tabs */}
            <div className='flex items-center gap-2 mb-6 border-b border-gray-200 pb-3'>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer
                            ${activeTab === tab.id
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-500 hover:bg-gray-200'
                            }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'profile' && <ProfileComponent />}
            {activeTab === 'password' && <PasswordTab />} 
            {activeTab === 'privacy' && <PrivacyTab />}
        </div>
    );
};

export default Page;