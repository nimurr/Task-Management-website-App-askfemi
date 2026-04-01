import { useState } from 'react';
import { useChangPasswordMutation } from '@/redux/fetures/auth/changePassword';

const PasswordTab = () => {

    const [changePassword, { isLoading }] = useChangPasswordMutation();

    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        const { currentPassword, newPassword, confirmPassword } = formData;

        // ✅ simple validation
        if (!currentPassword || !newPassword || !confirmPassword) {
            alert('All fields are required');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match');
            return;
        }

        try {
            const res = await changePassword({
                currentPassword,
                newPassword
            }).unwrap();

            alert('Password updated successfully');

            // reset form
            setFormData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
            alert(error?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div>
            <div className='bg-white rounded-2xl p-6 border border-gray-100 shadow-sm'>
                <h2 className='text-base font-bold text-gray-800 mb-5'>
                    Change Password
                </h2>

                <div className='flex flex-col gap-4 max-w-md'>

                    {/* Current Password */}
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-xs font-semibold text-gray-500'>
                            Current Password
                        </label>
                        <input
                            type='password'
                            name='currentPassword'
                            value={formData.currentPassword}
                            onChange={handleChange}
                            placeholder='••••••••'
                            className='border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition-colors'
                        />
                    </div>

                    {/* New Password */}
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-xs font-semibold text-gray-500'>
                            New Password
                        </label>
                        <input
                            type='password'
                            name='newPassword'
                            value={formData.newPassword}
                            onChange={handleChange}
                            placeholder='••••••••'
                            className='border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition-colors'
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-xs font-semibold text-gray-500'>
                            Confirm New Password
                        </label>
                        <input
                            type='password'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='••••••••'
                            className='border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition-colors'
                        />
                    </div>

                    <div className='flex justify-end mt-2'>
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors cursor-pointer disabled:opacity-50'
                        >
                            {isLoading ? 'Updating...' : 'Update Password'}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PasswordTab;