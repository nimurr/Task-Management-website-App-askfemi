import React from 'react';

const PasswordTab = () => {
    return (
        <div>
            <div className='bg-white rounded-2xl p-6 border border-gray-100 shadow-sm'>
                <h2 className='text-base font-bold text-gray-800 mb-5'>Change Password</h2>
                <div className='flex flex-col gap-4 max-w-md'>
                    {['Current Password', 'New Password', 'Confirm New Password'].map((label) => (
                        <div key={label} className='flex flex-col gap-1.5'>
                            <label className='text-xs font-semibold text-gray-500'>{label}</label>
                            <input
                                type='password'
                                placeholder='••••••••'
                                className='border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition-colors'
                            />
                        </div>
                    ))}
                    <div className='flex justify-end mt-2'>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors cursor-pointer'>
                            Update Password
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PasswordTab;
