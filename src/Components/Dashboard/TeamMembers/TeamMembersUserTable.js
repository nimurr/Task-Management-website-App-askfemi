'use client';

import { useGetTeamMembersUsersInfoQuery } from '@/redux/fetures/teamMembers/teamMembers';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiInfo, FiEdit2, FiTrash2, FiAlertTriangle } from 'react-icons/fi';
import url from '@/redux/api/baseUrl'; // Your base URL for images
import CardLoading from '@/Components/Common/CardLoading';
import { useDeleteChieldProfileMutation } from '@/redux/fetures/profile/profile';
import { toast } from 'react-toastify';

const TeamMembersUserTable = () => {
    const [page, setPage] = useState(1);
    const limit = 10;
    const { data, isLoading, isFetching, refetch } = useGetTeamMembersUsersInfoQuery({ page, limit });
    const fullData = data?.data?.attributes?.docs || [];
    const totalDocs = data?.data?.attributes?.totalDocs || 0; // total items
    const totalPages = data?.data?.attributes?.totalPages || 1; // total pages

    const [deleteChildProfile] = useDeleteChieldProfileMutation();


    const [deleteTarget, setDeleteTarget] = useState(null);

    const handleDeleteClick = async (member) => {

        try {
            const res = await deleteChildProfile(member?.childUserId);
            console.log(res);
            refetch();
            if (res?.error) {
                toast.error(res?.error?.data?.message || 'Failed to delete member');
                return;
            }
            else {
                toast.success('Member deleted successfully');
            }
        } catch (error) {
            console.error("Error deleting child profile:", error);
            toast.error('Failed to delete member');
        }

    };

    const handleConfirmDelete = () => {
        // Remove member locally (optional)
        setDeleteTarget(null);
    };

    const handleCancelDelete = () => {
        setDeleteTarget(null);
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    if (isLoading) {
        return <div className='space-y-4'>
            {
                [...Array(3)].map((_, index) => (
                    <CardLoading key={index} />
                ))
            }
        </div>;
    }

    return (
        <>
            {/* Table */}
            <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-gray-100'>
                            <th className='text-left text-sm font-medium text-gray-400 px-6 py-4 w-16'>No</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>User Name</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Email</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Phone Number</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Role Type</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Tasks Progress</th>
                            <th className='text-left text-sm font-medium text-gray-400 px-4 py-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fullData.map((member, index) => (
                            <tr key={member._id} className='border-b border-gray-50 hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-5 text-sm text-gray-400'>{(page - 1) * limit + index + 1}</td>
                                <td className='px-4 py-5'>
                                    <div className='flex items-center gap-2.5'>
                                        <img
                                            src={url + member.profileImage?.imageUrl}
                                            alt={member.name}
                                            className='w-9 h-9 rounded-full object-cover flex-shrink-0'
                                        />
                                        <span className='text-sm font-semibold text-gray-800'>{member.name}</span>
                                    </div>
                                </td>
                                <td className='px-4 py-5 text-sm text-gray-500'>{member.email}</td>
                                <td className='px-4 py-5 text-sm text-gray-500'>{member.phoneNumber || 'N/A'}</td>
                                <td className='px-4 py-5 text-sm text-gray-500'>{member.roleType}</td>
                                <td className='px-4 py-5'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-24 bg-gray-100 rounded-full h-2'>
                                            <div
                                                className='bg-blue-500 h-2 rounded-full'
                                                style={{ width: `${member.taskProgress?.progressPercentage || 0}%` }}
                                            />
                                        </div>
                                        <span className='text-sm text-gray-400'>{member.taskProgress?.progressPercentage || 0}%</span>
                                    </div>
                                </td>
                                <td className='px-4 py-5'>
                                    <div className='flex items-center gap-2'>
                                        <Link
                                            href={`/dashboard/team-members/view/${member.childUserId}`}
                                            className='w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-blue-500 hover:border-blue-300 transition-colors cursor-pointer'
                                        >
                                            <FiInfo size={15} />
                                        </Link>
                                        <Link
                                            href={`/dashboard/team-members/edit/${member.childUserId}`}
                                            className='w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-green-500 hover:border-green-300 transition-colors cursor-pointer'
                                        >
                                            <FiEdit2 size={14} />
                                        </Link>
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

            {/* Pagination */}
            <div className='flex justify-end gap-2 mt-4'>
                <button
                    onClick={handlePrevPage}
                    disabled={page === 1 || isFetching}
                    className={`px-4 py-2 rounded-lg border ${page === 1 ? 'text-gray-400 border-gray-200' : 'text-blue-500 border-blue-300 hover:bg-blue-50'} transition`}
                >
                    Prev
                </button>
                <span className='px-4 py-2 text-sm text-gray-500'>
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages || isFetching}
                    className={`px-4 py-2 rounded-lg border ${page === totalPages ? 'text-gray-400 border-gray-200' : 'text-blue-500 border-blue-300 hover:bg-blue-50'} transition`}
                >
                    Next
                </button>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteTarget && (
                <div className='fixed inset-0 z-50 flex items-center justify-center'>
                    <div
                        className='absolute inset-0 bg-black/30 backdrop-blur-sm'
                        onClick={handleCancelDelete}
                    />

                    <div className='relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4 z-10'>
                        <div className='flex justify-center mb-4'>
                            <div className='w-14 h-14 bg-red-50 rounded-full flex items-center justify-center'>
                                <FiAlertTriangle size={28} className='text-red-500' />
                            </div>
                        </div>

                        <h2 className='text-lg font-bold text-gray-900 text-center mb-1'>Delete Member</h2>
                        <p className='text-sm text-gray-400 text-center mb-2'>
                            Are you sure you want to delete
                        </p>

                        <div className='flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 mb-6'>
                            <img
                                src={url + deleteTarget.profileImage?.imageUrl}
                                alt={deleteTarget.name}
                                className='w-10 h-10 rounded-full object-cover flex-shrink-0'
                            />
                            <div>
                                <p className='text-sm font-semibold text-gray-800'>{deleteTarget.name}</p>
                                <p className='text-xs text-gray-400'>{deleteTarget.email}</p>
                            </div>
                        </div>

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