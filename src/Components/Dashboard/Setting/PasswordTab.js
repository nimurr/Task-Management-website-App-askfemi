import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useChangPasswordMutation } from '@/redux/fetures/auth/changePassword';
import { toast, ToastContainer } from 'react-toastify';

const PasswordTab = () => {

    const [changePassword, { isLoading }] = useChangPasswordMutation();

    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const togglePassword = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field]
        });
    };

    const handleSubmit = async () => {
        const { currentPassword, newPassword, confirmPassword } = formData;

        if (!currentPassword || !newPassword || !confirmPassword) {
            toast.error('All fields are required');
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error('New password and confirm password do not match');
            return;
        }

        try {
            await changePassword({
                currentPassword,
                newPassword
            }).unwrap();

            toast.success('Password updated successfully');

            setFormData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });

        } catch (error) {
            toast.error(error?.data?.message || 'Something went wrong');
        }
    };

    const inputFields = [
        { label: 'Current Password', name: 'currentPassword' },
        { label: 'New Password', name: 'newPassword' },
        { label: 'Confirm New Password', name: 'confirmPassword' }
    ];

    return (
        <div>
            <ToastContainer />
            <div className='bg-white rounded-2xl p-6 border border-gray-100 shadow-sm'>
                <h2 className='text-base font-bold text-gray-800 mb-5'>
                    Change Password
                </h2>

                <div className='flex flex-col gap-4 max-w-md'>

                    {inputFields?.map((field) => (
                        <div key={field.name} className='flex flex-col gap-1.5'>
                            <label className='text-xs font-semibold text-gray-500'>
                                {field.label}
                            </label>

                            <div className='relative'>
                                <input
                                    type={showPassword[field.name] ? 'text' : 'password'}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder='••••••••'
                                    className='w-full border border-gray-200 rounded-xl px-3 py-2.5 pr-10 text-sm text-gray-700 outline-none focus:border-blue-400 transition-colors'
                                />

                                {/* 👇 React Icons */}
                                <span
                                    onClick={() => togglePassword(field.name)}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500'
                                >
                                    {showPassword[field.name] ? (
                                        <FiEyeOff size={18} />
                                    ) : (
                                        <FiEye size={18} />
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}

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