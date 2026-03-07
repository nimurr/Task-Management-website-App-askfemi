'use client'
import React, { useState } from 'react';
import { FiUserCheck } from 'react-icons/fi';

const allMembers = [
    { id: 1, name: 'Alax Morgn', role: 'Secondary User', img: 'https://i.pravatar.cc/40?img=11' },
    { id: 2, name: 'Sam Rivera', role: 'Secondary User', img: 'https://i.pravatar.cc/40?img=47' },
    { id: 3, name: 'Jamie Chen', role: 'Secondary User', img: 'https://i.pravatar.cc/40?img=53' },
    { id: 4, name: 'Casey Lin', role: 'Secondary User', img: 'https://i.pravatar.cc/40?img=25' },
];

const PrivacyTab = () => {
    const [toggleEnabled, setToggleEnabled] = useState(true);
    const [activeUser, setActiveUser] = useState(allMembers[0]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(allMembers[0].id);
    const [tempSelectedId, setTempSelectedId] = useState(allMembers[0].id);

    const handleOpenModal = () => {
        setTempSelectedId(selectedId);
        setModalOpen(true);
    };

    const handleSave = () => {
        setSelectedId(tempSelectedId);
        setActiveUser(allMembers.find((m) => m.id === tempSelectedId));
        setModalOpen(false);
    };

    const handleCancel = () => {
        setTempSelectedId(selectedId);
        setModalOpen(false);
    };

    return (
        <>
            <div className='flex flex-col gap-4'>

                {/* Permissions access header card */}
                <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>
                    <div className='px-6 py-4 border-b border-gray-100'>
                        <h2 className='text-sm font-semibold text-gray-800'>Permissions access</h2>
                    </div>

                    {/* Permissions body */}
                    <div className='px-6 py-5'>
                        <h3 className='text-lg font-bold text-gray-900 mb-4'>Permissions</h3>

                        {/* Toggle Row */}
                        <div className='flex items-start justify-between mb-5'>
                            <div>
                                <p className='text-sm font-semibold text-gray-800'>Allow Secondary users to create tasks</p>
                                <p className='text-xs text-gray-400 mt-0.5'>Secondary users can create and assign tasks to others</p>
                            </div>
                            <button
                                onClick={() => setToggleEnabled(!toggleEnabled)}
                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200
                                    ${toggleEnabled ? 'bg-blue-500' : 'bg-gray-200'}`}
                            >
                                <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow mt-0.5 transition duration-200
                                    ${toggleEnabled ? 'translate-x-5' : 'translate-x-0.5'}`}
                                />
                            </button>
                        </div>

                        {/* Active Permission User */}
                        <div className='bg-gray-50 rounded-xl px-4 py-3 flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <img
                                    src={activeUser.img}
                                    alt={activeUser.name}
                                    className='w-10 h-10 rounded-full object-cover'
                                />
                                <div className='flex flex-col leading-tight'>
                                    <span className='text-[10px] text-gray-400'>Permissions</span>
                                    <span className='bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit mb-0.5'>
                                        Active
                                    </span>
                                    <span className='text-sm font-bold text-gray-900'>{activeUser.name}</span>
                                </div>
                            </div>
                            <button className='text-sm text-gray-400 hover:text-red-400 transition-colors cursor-pointer'>
                                Remove User
                            </button>
                        </div>
                    </div>
                </div>

                {/* Manage Permission Button */}
                <div className='flex justify-end'>
                    <button
                        onClick={handleOpenModal}
                        className='flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors cursor-pointer'
                    >
                        <FiUserCheck size={16} />
                        Manage Permission
                    </button>
                </div>

                {/* How it works card */}
                <div className='bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-8 text-center'>
                    <p className='text-4xl font-bold text-blue-400 mb-4'>💡 How it works</p>
                    <div className='flex flex-col gap-1.5'>
                        {[
                            'Click "Manage Permissions" to open the modal',
                            'Select or deselect users to grant or revoke access',
                            'Selected users can access and manage assigned tasks',
                            'Changes take effect immediately after saving',
                        ].map((text, i) => (
                            <p key={i} className='text-sm text-gray-500'>{text}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center'>
                    {/* Backdrop */}
                    <div
                        className='absolute inset-0 bg-black/30 backdrop-blur-sm'
                        onClick={handleCancel}
                    />

                    {/* Modal Box */}
                    <div className='relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4 z-10'>
                        <h2 className='text-lg font-bold text-gray-900 mb-1'>Permission Member</h2>
                        <p className='text-sm text-gray-400 mb-5'>Select secondary users to grant or update permission access.</p>

                        {/* Member List */}
                        <div className='flex flex-col gap-2 mb-6'>
                            {allMembers.map((member) => {
                                const isSelected = tempSelectedId === member.id;
                                return (
                                    <div
                                        key={member.id}
                                        onClick={() => setTempSelectedId(member.id)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors border
                                            ${isSelected
                                                ? 'bg-blue-50 border-blue-200'
                                                : 'border-transparent hover:bg-gray-50'
                                            }`}
                                    >
                                        {/* Radio */}
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                                            ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}
                                        >
                                            {isSelected && (
                                                <div className='w-2.5 h-2.5 rounded-full bg-blue-500' />
                                            )}
                                        </div>

                                        {/* Avatar */}
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className='w-9 h-9 rounded-full object-cover flex-shrink-0'
                                        />

                                        {/* Info */}
                                        <div className='flex flex-col leading-tight'>
                                            <span className='text-sm font-semibold text-gray-900'>{member.name}</span>
                                            <span className='text-xs text-gray-400'>{member.role}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Footer Buttons */}
                        <div className='flex items-center justify-end gap-3'>
                            <button
                                onClick={handleCancel}
                                className='px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer'
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className='px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-colors cursor-pointer'
                            >
                                Save & Change
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PrivacyTab;