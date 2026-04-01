import url from '@/redux/api/baseUrl';
import { useGetProfileQuery } from '@/redux/fetures/profile/profile';
import React, { useRef, useState } from 'react';
import { FiCamera, FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ProfileComponent = () => {

    const { data } = useGetProfileQuery();
    const user = data?.data?.attributes;


    // Image preview state
    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);

    // Handle image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);

            // 👉 Later: API integration here
            // const formData = new FormData();
            // formData.append("image", file);
        }
    };


    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmitForm} className='flex flex-col gap-6'>
            {/* Avatar Section */}
            <div className='bg-white rounded-2xl p-6 border border-gray-100 shadow-sm'>
                <h2 className='text-base font-bold text-gray-800 mb-5'>Profile Photo</h2>

                <div className='flex items-center gap-6'>
                    <div className='relative'>
                        <img
                            src={previewImage || (url + user?.profileImage?.imageUrl)}
                            alt='Profile'
                            className='w-20 h-20 rounded-full object-cover'
                        />

                        {/* Hidden File Input */}
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            className="hidden"
                        />

                        {/* Camera Button */}
                        <button
                            type="button"
                            onClick={() => fileInputRef.current.click()}
                            className='absolute bottom-0 right-0 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white cursor-pointer hover:bg-blue-600 transition-colors'
                        >
                            <FiCamera size={13} className='text-white' />
                        </button>
                    </div>

                    <div>
                        <p className='text-sm font-semibold text-gray-800'>{user?.name}</p>
                        <p className='text-xs text-gray-400 mt-0.5 capitalize'>{user?.role} Account</p>

                        <button
                            type="button"
                            onClick={() => fileInputRef.current.click()}
                            className='mt-2 text-xs text-blue-500 hover:text-blue-600 font-medium cursor-pointer'
                        >
                            Change Photo
                        </button>
                    </div>
                </div>
            </div>

            {/* Personal Info */}
            <div className='bg-white rounded-2xl p-6 border border-gray-100 shadow-sm'>
                <h2 className='text-base font-bold text-gray-800 mb-5'>Personal Information</h2>

                <div className='grid grid-cols-2 gap-4'>
                    {/* Full Name */}
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-xs font-semibold text-gray-500'>Full Name</label>
                        <div className='flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5'>
                            <FiUser size={15} className='text-gray-400 flex-shrink-0' />
                            <input
                                type='text'
                                defaultValue={user?.name}
                                className='text-sm text-gray-700 outline-none w-full bg-transparent'
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-xs font-semibold text-gray-500'>Email Address</label>
                        <div className='flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5'>
                            <FiMail size={15} className='text-gray-400 flex-shrink-0' />
                            <input
                                type='email'
                                defaultValue={user?.email}
                                className='text-sm text-gray-700 outline-none w-full bg-transparent'
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-xs font-semibold text-gray-500'>Phone Number</label>
                        <div className='flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5'>
                            <FiPhone size={15} className='text-gray-400 flex-shrink-0' />
                            <input
                                type='tel'
                                defaultValue={user?.phoneNumber || '***-***-****'}
                                className='text-sm text-gray-700 outline-none w-full bg-transparent'
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-xs font-semibold text-gray-500'>Location</label>
                        <div className='flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5'>
                            <FiMapPin size={15} className='text-gray-400 flex-shrink-0' />
                            <input
                                type='text'
                                defaultValue={user?.location || "*********"}
                                className='text-sm text-gray-700 outline-none w-full bg-transparent'
                            />
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className='flex justify-end mt-5'>
                    <button
                        type="submit"
                        className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors cursor-pointer'
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ProfileComponent;