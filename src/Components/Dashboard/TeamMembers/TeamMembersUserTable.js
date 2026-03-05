'use client'
import React, { useState } from 'react';
import { FiInfo, FiEdit2, FiTrash2, FiAlertTriangle } from 'react-icons/fi';

const initialMembers = [
    { id: '01', name: 'Alax Morgn', email: 'alax@gmail.com', phone: '65656522', gender: 'Male', role: 'Primary', progress: 0, img: 'https://i.pravatar.cc/40?img=11' },
    { id: '02', name: 'Sam Rivera', email: 'Suppot@gmail.com', phone: '65656522', gender: 'Male', role: 'Secondary', progress: 0, img: 'https://i.pravatar.cc/40?img=47' },
    { id: '03', name: 'Sam Rivera', email: 'Total Task', phone: '65656522', gender: 'Male', role: 'Secondary', progress: 0, img: 'https://i.pravatar.cc/40?img=47' },
    { id: '04', name: 'Casey Lin', email: 'Total Task', phone: '65656522', gender: 'Male', role: 'Secondary', progress: 0, img: 'https://i.pravatar.cc/40?img=25' },
    { id: '05', name: 'Jamie Chen', email: 'Total Task', phone: '65656522', gender: 'Female', role: 'Secondary', progress: 0, img: 'https://i.pravatar.cc/40?img=53' },
];

const TeamMembersUserTable = () => {
    const [members, setMembers] = useState(initialMembers);
    const [deleteTarget, setDeleteTarget] = useState(null);

    const handleDeleteClick = (member) => {
        setDeleteTarget(member);
    };

    const handleConfirmDelete = () => {
        setMembers((prev) => prev.filter((m) => m.id !== deleteTarget.id));
        setDeleteTarget(null);
    };

    const handleCancelDelete = () => {
        setDeleteTarget(null);
    };

    return (
        <>
            {/* Table */}
            <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-gray-100'>
                            <th className='text-left text-sm font-medium text-gray-400 px-6 py-4 w-16'>No</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>User Name</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Email</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Phone Number</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Gender</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Role Type</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Tasks Progress</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index} className='border-b border-gray-50 hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-5 text-sm text-gray-400'>{member.id}</td>
                                <td className='px-4 py-5'>
                                    <div className='flex items-center gap-2.5'>
                                        <img src={member.img} alt={member.name} className='w-9 h-9 rounded-full object-cover flex-shrink-0' />
                                        <span className='text-sm font-semibold text-gray-800'>{member.name}</span>
                                    </div>
                                </td>
                                <td className='px-4 py-5 text-sm text-gray-500'>{member.email}</td>
                                <td className='px-4 py-5 text-sm text-gray-500'>{member.phone}</td>
                                <td className='px-4 py-5 text-sm text-gray-500'>{member.gender}</td>
                                <td className='px-4 py-5 text-sm text-gray-500'>{member.role}</td>
                                <td className='px-4 py-5'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-24 bg-gray-100 rounded-full h-2'>
                                            <div
                                                className='bg-blue-500 h-2 rounded-full'
                                                style={{ width: `${member.progress === 0 ? 8 : member.progress}%` }}
                                            />
                                        </div>
                                        <span className='text-sm text-gray-400'>{member.progress}%</span>
                                    </div>
                                </td>
                                <td className='px-4 py-5'>
                                    <div className='flex items-center gap-2'>
                                        <button className='w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-blue-500 hover:border-blue-300 transition-colors cursor-pointer'>
                                            <FiInfo size={15} />
                                        </button>
                                        <button className='w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-green-500 hover:border-green-300 transition-colors cursor-pointer'>
                                            <FiEdit2 size={14} />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(member)}
                                            className='w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-300 transition-colors cursor-pointer'
                                        >
                                            <FiTrash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteTarget && (
                <div className='fixed inset-0 z-50 flex items-center justify-center'>
                    {/* Backdrop */}
                    <div
                        className='absolute inset-0 bg-black/30 backdrop-blur-sm'
                        onClick={handleCancelDelete}
                    />

                    {/* Modal */}
                    <div className='relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4 z-10'>
                        {/* Icon */}
                        <div className='flex justify-center mb-4'>
                            <div className='w-14 h-14 bg-red-50 rounded-full flex items-center justify-center'>
                                <FiAlertTriangle size={28} className='text-red-500' />
                            </div>
                        </div>

                        {/* Text */}
                        <h2 className='text-lg font-bold text-gray-900 text-center mb-1'>Delete Member</h2>
                        <p className='text-sm text-gray-400 text-center mb-2'>
                            Are you sure you want to delete
                        </p>

                        {/* Member Preview */}
                        <div className='flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 mb-6'>
                            <img
                                src={deleteTarget.img}
                                alt={deleteTarget.name}
                                className='w-10 h-10 rounded-full object-cover flex-shrink-0'
                            />
                            <div>
                                <p className='text-sm font-semibold text-gray-800'>{deleteTarget.name}</p>
                                <p className='text-xs text-gray-400'>{deleteTarget.email}</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className='flex items-center gap-3'>
                            <button
                                onClick={handleCancelDelete}
                                className='flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer'
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmDelete}
                                className='flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors cursor-pointer'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TeamMembersUserTable;