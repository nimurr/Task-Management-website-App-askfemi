import React from 'react';
import { FiUser } from 'react-icons/fi';
import { FaCrown, FaRegUserCircle } from 'react-icons/fa';

const members = [
    {
        name: 'Alex Morgan',
        role: 'Primary account',
        isPrimary: true,
        totalTask: 12,
        pendingTask: 10,
        completedTask: '02',
        img: 'https://i.pinimg.com/736x/56/03/bc/5603bc412d148a6fb5d03f830b819627.jpg',
    },
    {
        name: 'Jamie Chen',
        role: 'Secondary',
        isPrimary: false,
        totalTask: 12,
        pendingTask: 0,
        completedTask: 12,
        img: 'https://www.shutterstock.com/image-photo/studio-portrait-girl-looking-standing-600nw-2281354333.jpg',
    },
    {
        name: 'Sam Rivera',
        role: 'Secondary',
        isPrimary: false,
        totalTask: '05',
        pendingTask: '04',
        completedTask: '01',
        img: 'https://www.shutterstock.com/image-photo/portrait-wink-black-child-on-600nw-2256248353.jpg',
    },
    {
        name: 'Riley Park',
        role: 'Secondary',
        isPrimary: false,
        totalTask: 10,
        pendingTask: '08',
        completedTask: '02',
        img: 'https://www.shutterstock.com/image-photo/studio-portrait-girl-looking-standing-600nw-2281354333.jpg',
    },
    {
        name: 'Casey Lin',
        role: 'Secondary',
        isPrimary: false,
        totalTask: 10,
        pendingTask: '08',
        completedTask: '02',
        img: 'https://www.shutterstock.com/image-photo/studio-portrait-girl-looking-standing-600nw-2281354333.jpg',
    },
];

const MemberCard = ({ member }) => {
    return (
        <div className='bg-white rounded-2xl overflow-hidden flex shadow-sm border border-gray-100'>
            {/* Left: Image */}
            <img
                src={member.img}
                alt={member.name}
                className='w-32 h-full object-cover flex-shrink-0'
                style={{ minHeight: '160px', maxHeight: '180px' }}
            />

            {/* Right: Info */}
            <div className='flex flex-col flex-1 px-4 py-3'>
                {/* Name + Badge */}
                <div className='flex items-center justify-between mb-3'>
                    <h3 className='font-bold text-gray-900 text-lg'>{member.name}</h3>
                    {member.isPrimary ? (
                        <span className='flex items-center gap-1 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-2 rounded-full'>
                            <FaCrown size={15} className='text-yellow-400' />
                            Primary account
                        </span>
                    ) : (
                        <span className='flex items-center gap-1 bg-blue-100 text-gray-500 text-xs font-semibold px-3 py-2 rounded-full'>
                            <FaRegUserCircle size={15} />
                            Secondary
                        </span>
                    )}
                </div>

                {/* Divider */}
                <hr className='border-dashed border-gray-200 mb-3' />

                {/* Stats */}
                <div className='flex flex-col gap-1.5'>
                    <div className='flex justify-between text-sm text-gray-500'>
                        <span>Total Task :</span>
                        <span className='font-bold text-gray-800'>{member.totalTask}</span>
                    </div>
                    <div className='flex justify-between text-sm text-gray-500'>
                        <span>Pending Task :</span>
                        <span className='font-bold text-gray-800'>{member.pendingTask}</span>
                    </div>
                    <div className='flex justify-between text-sm text-gray-500'>
                        <span>Completed Task :</span>
                        <span className='font-bold text-gray-800'>{member.completedTask}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TeamOverview = () => {
    return (
        <div className='bg-gray-100 rounded-lg p-8'>
            {/* Header */}
            <div className='flex items-start justify-between mb-6'>
                <div>
                    <h1 className='text-3xl font-bold text-gray-900'>Team Overview</h1>
                    <p className='text-gray-400 text-sm mt-1'>Manage tasks and activities for your family</p>
                </div>
                <span className='text-sm font-bold text-gray-800 mt-2'>
                    Total 0{members.length} Member
                </span>
            </div>

            {/* Grid */}
            <div className='grid grid-cols-3 gap-4'>
                {members.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
};

export default TeamOverview;