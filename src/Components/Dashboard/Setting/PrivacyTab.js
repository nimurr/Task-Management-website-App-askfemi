'use client'
import url from '@/redux/api/baseUrl';
import { useAddCliedrenPermisstionMutation, useGetPermisstionUsersQuery } from '@/redux/fetures/setting/setting';
import React, { useState, useEffect } from 'react';
import { FiUserCheck } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';

const PrivacyTab = () => {

    const { data } = useGetPermisstionUsersQuery();
    const [addCliedrenPermisstion] = useAddCliedrenPermisstionMutation();

    const fullCliedren = data?.data?.attributes?.children || [];

    // ✅ Map API → UI
    const members = fullCliedren.map((item, index) => ({
        id: item.childUserId, // 👈 IMPORTANT
        name: item.name,
        role: 'Secondary User',
        img: item.profileImage?.imageUrl
            ? `${item.profileImage.imageUrl}`
            : `https://i.pravatar.cc/40?img=${index + 1}`,
    }));

    const [toggleEnabled, setToggleEnabled] = useState(true);
    const [activeUser, setActiveUser] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [tempSelectedId, setTempSelectedId] = useState(null);

    // ✅ Default select
    useEffect(() => {
        if (members.length > 0) {
            setActiveUser(members[0]);
            setSelectedId(members[0].id);
            setTempSelectedId(members[0].id);
        }
    }, [data]);

    const handleOpenModal = () => {
        setTempSelectedId(selectedId);
        setModalOpen(true);
    };

    const handleSave = async () => {
        try {
            await addCliedrenPermisstion({
                id: tempSelectedId,
                data: {
                    isSecondaryUser: true
                },
            }).unwrap();

            toast.success('Permission updated successfully!');

            setSelectedId(tempSelectedId);
            setActiveUser(members.find((m) => m.id === tempSelectedId));
            setModalOpen(false);

        } catch (error) {
            toast.error('Failed to update permission.');
        }
    };

    const handleCancel = () => {
        setTempSelectedId(selectedId);
        setModalOpen(false);
    };

    return (
        <>
            <ToastContainer />

            <div className='flex flex-col gap-4'>

                {/* Card */}
                <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>
                    <div className='px-6 py-4 border-b border-gray-100'>
                        <h2 className='text-sm font-semibold text-gray-800'>Permissions access</h2>
                    </div>

                    <div className='px-6 py-5'>
                        <h3 className='text-lg font-bold text-gray-900 mb-4'>Permissions</h3>

                        {/* Toggle */}
                        <div className='flex items-start justify-between mb-5'>
                            <div>
                                <p className='text-sm font-semibold text-gray-800'>
                                    Allow Secondary users to create tasks
                                </p>
                                <p className='text-xs text-gray-400 mt-0.5'>
                                    Secondary users can create and assign tasks
                                </p>
                            </div>

                            {/* <button
                                onClick={() => setToggleEnabled(!toggleEnabled)}
                                className={`relative inline-flex h-6 w-11 rounded-full
                                ${toggleEnabled ? 'bg-blue-500' : 'bg-gray-200'}`}
                            >
                                <span className={`inline-block h-5 w-5 bg-white rounded-full mt-0.5 transition
                                ${toggleEnabled ? 'translate-x-5' : 'translate-x-0.5'}`} />
                            </button> */}
                        </div>

                        {/* Active User */}
                        {activeUser && (
                            <div className='bg-gray-50 rounded-xl px-4 py-3 flex justify-between'>
                                <div className='flex items-center gap-3'>
                                    <img
                                        src={url + activeUser.img}
                                        className='w-10 h-10 rounded-full'
                                    />
                                    <div>
                                        <p className='text-sm font-bold'>{activeUser.name}</p>
                                        <span className='text-xs text-green-500'>Active</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Button */}
                <div className='flex justify-end'>
                    <button
                        onClick={handleOpenModal}
                        className='flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-xl'
                    >
                        <FiUserCheck size={16} />
                        Manage Permission
                    </button>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className='fixed inset-0 flex justify-center items-center z-50'>
                    <div className='absolute inset-0 bg-black/30' onClick={handleCancel} />

                    <div className='bg-white p-6 rounded-2xl z-10 w-full max-w-sm'>
                        <h2 className='font-bold mb-4'>Select User</h2>

                        <div className='flex flex-col gap-2 mb-5'>
                            {members.map((member) => {
                                const isSelected = tempSelectedId === member.id; // ✅ FIXED

                                return (
                                    <div
                                        key={member.id}
                                        onClick={() => setTempSelectedId(member.id)}
                                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer
                                        ${isSelected ? 'bg-blue-50 border-blue-300' : ''}`}
                                    >
                                        <div className={`w-5 h-5 border rounded-full flex justify-center items-center
                                        ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}>
                                            {isSelected && <div className='w-2.5 h-2.5 bg-blue-500 rounded-full' />}
                                        </div>

                                        <img
                                            src={url + member.img}
                                            className='w-8 h-8 rounded-full'
                                        />

                                        <span>{member.name}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className='flex justify-end gap-3'>
                            <button onClick={handleCancel}>Cancel</button>
                            <button onClick={handleSave} className='bg-blue-500 text-white px-4 py-2 rounded'>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PrivacyTab;