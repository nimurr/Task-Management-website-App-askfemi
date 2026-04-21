'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import ButtonLoading from '@/Components/Common/ButtonLoading';
import { useLoginMutation } from '@/redux/fetures/auth/login';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginUser, { isLoading }] = useLoginMutation();
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;

        try {
            const response = await loginUser({ email, password }).unwrap();

            // ✅ success case
            const user = response?.data?.attributes?.userWithoutPassword;
            const token = response?.data?.attributes?.tokens?.accessToken;

            if (!user || !token) {
                toast.error('Invalid response from server');
                return;
            }

            // ✅ store safely (NO JSON.stringify)
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            toast.success('Login successful');

            // ✅ redirect
            if (user.role === 'business' || user.role === 'super-admin') {
                router.push('/dashboard');
            } else {
                router.push('/');
            }

        } catch (error) {
            console.log(error);

            toast.error(
                error?.data?.message ||
                error?.message ||
                'Login failed'
            );
        }
    };

    return (
        <div className="h-screen flex overflow-hidden bg-[#F0F4FA]">

            {/* LEFT */}
            <div className="hidden md:block w-1/2 h-full relative">
                <img
                    src="/Images/Auth/authBanner_image.png"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* RIGHT */}
            <div className="w-full md:w-1/2 flex justify-center items-center px-6 sm:px-12">

                <div className="w-full max-w-sm">

                    {/* Logo */}
                    <div className="mb-6">
                        <img src="/Images/Auth/logo.png" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        Sign in your account
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                        Welcome back! Please enter your details.
                    </p>

                    {/* Form */}
                    <form className="flex flex-col gap-4" onSubmit={handleLogin}>

                        {/* Email */}
                        <div className="flex items-center gap-3 px-3 py-2.5 bg-white border rounded-lg">
                            <MdOutlineMailOutline className="text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="flex-1 bg-transparent text-sm outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex items-center gap-3 px-3 py-2.5 bg-white border rounded-lg">
                            <FaLock className="text-gray-400" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                required
                                placeholder="Password"
                                className="flex-1 bg-transparent text-sm outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(p => !p)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Forgot */}
                        <div className="flex justify-end">
                            <Link href="/forgot-password" className="text-xs text-gray-500">
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-white font-semibold bg-[#4A90E2]"
                        >
                            Sign in {isLoading && <ButtonLoading />}
                        </button>

                        {/* Google */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border"
                        >
                            <FcGoogle />
                            Login With Google
                        </button>
                    </form>

                    {/* Signup */}
                    <p className="text-center text-sm text-gray-500 mt-5">
                        Already have an account?{' '}
                        <Link href="/signup" className="text-[#4A90E2] font-bold">
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Page;