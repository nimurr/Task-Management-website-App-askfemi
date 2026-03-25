'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBrain, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import ButtonLoading from '@/Components/Common/ButtonLoading';
import { useLoginMutation } from '@/redux/fetures/auth/login';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginUser, { isLoading }] = useLoginMutation();
    const navigate = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;
        const data = { email, password };

        try {
            const response = await loginUser(data).unwrap();


            if (response?.error) {
                toast.error(response.error.data.message || 'Something went wrong');
            }
            else {
                toast.success('Login successful');
                localStorage.setItem('user', JSON.stringify(response?.data?.attributes?.userWithoutPassword));
                localStorage.setItem('token', JSON.stringify(response?.data?.attributes?.tokens?.accessToken));
                if (response?.data?.attributes?.userWithoutPassword?.role === 'business' || response?.data?.attributes?.userWithoutPassword?.role === 'super-admin') {
                    // window.location.href = '/dashboard';
                    navigate.push('/dashboard');
                }

            }
        } catch (error) {
            console.log(error)
            toast.error(error.data.message || 'Something went wrong');
        }

    };

    return (
        <div className="h-screen flex overflow-hidden bg-[#F0F4FA]">

            {/* ── LEFT: Banner Image (half screen) ── */}
            <div className="hidden md:block w-1/2 h-full relative">
                <img
                    src="/Images/Auth/authBanner_image.png"
                    alt="Auth Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* ── RIGHT: Sign In Form ── */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-6 sm:px-12 bg-[#F0F4FA]">

                <div className="w-full max-w-sm">

                    {/* Logo */}
                    <div className="mb-6">
                        <img src="/Images/Auth/logo.png" alt="Z3ns Logo" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Sign in your account</h2>
                    <p className="text-gray-500 text-sm mb-6">Welcome back! Please enter your details.</p>

                    {/* Form */}
                    <form className="flex flex-col gap-4" onSubmit={handleLogin}>

                        {/* Email */}
                        <div
                            className="flex items-center gap-3 px-3 py-2.5 bg-white"
                            style={{ border: '1.5px solid #D6E4F5', borderRadius: '10px' }}
                        >
                            <MdOutlineMailOutline className="text-gray-400 text-lg shrink-0" />
                            <div className="w-px h-5 bg-gray-200 shrink-0" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
                            />
                        </div>

                        {/* Password */}
                        <div
                            className="flex items-center gap-3 px-3 py-2.5 bg-white"
                            style={{ border: '1.5px solid #D6E4F5', borderRadius: '10px' }}
                        >
                            <FaLock className="text-gray-400 text-sm shrink-0" />
                            <div className="w-px h-5 bg-gray-200 shrink-0" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter Password"
                                className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(p => !p)}
                                className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                            >
                                {showPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end -mt-1">
                            <Link
                                href="/forgot-password"
                                className="text-xs text-gray-500 hover:text-[#4A90E2] transition-colors underline underline-offset-2"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-white text-sm font-semibold transition-opacity hover:opacity-90 active:scale-[0.98]"
                            style={{ background: '#4A90E2' }}
                        >
                            Sign in {isLoading && <ButtonLoading />}
                        </button>

                        {/* Google Login */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-xl bg-white text-sm font-medium text-gray-700 transition-shadow hover:shadow-sm"
                            style={{ border: '1.5px solid #D6E4F5' }}
                        >
                            <FcGoogle className="text-xl shrink-0" />
                            Login With Google
                        </button>

                    </form>

                    {/* Sign Up link */}
                    <p className="text-center text-sm text-gray-500 mt-5">
                        Already have an account?{' '}
                        <Link href="/signup" className="text-[#4A90E2] font-bold hover:underline">
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Page;