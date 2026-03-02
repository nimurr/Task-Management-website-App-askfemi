import React from 'react';
import { FiSearch, FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';

const DashboardHeader = ({ toggleSidebar }) => {
    return (
        <div className='w-full bg-[#eef1f5] h-[60px] flex items-center justify-between px-4 border-b border-gray-200'>
            {/* Search Bar */}

            <button
                onClick={toggleSidebar}
                className="lg:hidden"
            >
                <FiMenu size={24} />
            </button>

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
                <div className='w-9 h-9 flex border border-gray-300 items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer transition-colors'>
                    <FiBell className='w-5 h-5 text-[#4da6d6]' />
                </div>

                {/* User Profile */}
                <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-lg px-2 py-1 transition-colors'>
                    {/* Avatar */}
                    <div className='w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-400 flex-shrink-0 flex items-center justify-center'>
                        <span className='text-white font-semibold text-sm'>B</span>
                    </div>

                    {/* Name & Role */}
                    <div className='flex flex-col leading-tight'>
                        <span className='text-sm font-semibold text-gray-800'>Bashar islam</span>
                        <span className='text-xs text-gray-500'>Primary account</span>
                    </div>

                    {/* Chevron */}
                    <FiChevronDown className='w-4 h-4 text-gray-500 ml-1' />
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;