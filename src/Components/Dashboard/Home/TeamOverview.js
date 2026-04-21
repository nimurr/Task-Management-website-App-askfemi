'use client';
import React from 'react';
import { FaCrown, FaRegUserCircle } from 'react-icons/fa';
import { useGetTeamOverviewQuery } from '@/redux/fetures/teamoverview/teamoverview';
import url from '@/redux/api/baseUrl';
import CardLoading from '@/Components/Common/CardLoading';

/* ---------------- MEMBER CARD ---------------- */
const MemberCard = ({ member }) => {
    return (
        <div className='bg-white rounded-2xl overflow-hidden flex shadow-sm border border-gray-100'>

            {/* Image */}
            <img
                src={
                    member.profileImage?.imageUrl?.includes('cloudinary.com') ? 
                    member.profileImage.imageUrl :
                    url + member.profileImage?.imageUrl
                }

                alt={member?.childName || 'User'}
                className='w-32 h-full object-cover flex-shrink-0'
                style={{ minHeight: '160px', maxHeight: '180px' }}
            />

            {/* Info */}
            <div className='flex flex-col flex-1 px-4 py-3'>

                {/* Name + Badge */}
                <div className='flex items-center justify-between mb-3'>
                    <h3 className='font-bold text-gray-900 text-lg'>
                        {member?.childName || member?.name || 'Unknown'}
                    </h3>

                    {member?.isPrimaryUser ? (
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
                        <span className='font-bold text-gray-800'>{member?.totalTasks || 0}</span>
                    </div>
                    <div className='flex justify-between text-sm text-gray-500'>
                        <span>In Progress Task :</span>
                        <span className='font-bold text-gray-800'>{member?.inProgressTasks || 0}</span>
                    </div>
                    <div className='flex justify-between text-sm text-gray-500'>
                        <span>Pending Task :</span>
                        <span className='font-bold text-gray-800'>{member?.pendingTasks || 0}</span>
                    </div>
                    <div className='flex justify-between text-sm text-gray-500'>
                        <span>Completed Task :</span>
                        <span className='font-bold text-gray-800'>{member?.completedTasks || 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ---------------- MAIN COMPONENT ---------------- */
const TeamOverview = () => {

    const { data, isLoading } = useGetTeamOverviewQuery();

    const members = data?.data?.attributes?.children || [];

    console.log(members)

    // ✅ FIX: remove undefined/null
    const withMyInfo = [
        data?.data?.attributes?.parentInfo,
        ...members
    ].filter(Boolean);

    const totalMembers = withMyInfo.length;

    return (
        <div className='bg-gray-100 rounded-lg p-8'>

            {/* Header */}
            <div className='flex items-start justify-between mb-6'>
                <div>
                    <h1 className='text-3xl font-bold text-gray-900'>Team Overview</h1>
                    <p className='text-gray-400 text-sm mt-1'>
                        Manage tasks and activities for your family
                    </p>
                </div>

                <span className='text-sm font-bold text-gray-800 mt-2'>
                    Total {totalMembers > 9 ? '9+' : totalMembers} Member
                </span>
            </div>

            {/* Grid */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

                {isLoading
                    ? [...Array(3)].map((_, index) => (
                        <CardLoading key={index} />
                    ))
                    : withMyInfo.length > 0
                        ? withMyInfo.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))
                        : (
                            <p className='text-center col-span-3 text-gray-400'>

                                <img className='w-[200px] block mx-auto mb-5' src="https://www.pngexpert.com/assets/images/empty_message.png" alt="" />
                                No members found
                            </p>
                        )
                }

            </div>
        </div>
    );
};

export default TeamOverview;