'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBrain, FaLock, FaEye, FaEyeSlash, FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { useSignUpMutation } from '@/redux/fetures/auth/signUp';
import { message } from 'antd';
import ButtonLoading from '@/Components/Common/ButtonLoading';
import { toast } from 'react-toastify';

const Page = () => {

    const [signup, { isLoading }] = useSignUpMutation();

    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(true);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const formData = e.target;
        const name = formData.username.value;
        const email = formData.email.value;
        const phone = formData.phone.value;
        const password = formData.password.value;
        const data = { name, email, phone, password };

        try {
            const response = await signup(data);
            console.log(response);
             if(response?.error){
                toast.error(response.error.data.message || 'Something went wrong');
             }
             else{
                toast.success('Registration successful');
             }
        } catch (error) {
            console.log(error)
            toast.error(error.data.message || 'Something went wrong');

        }



        console.log(data)
    }

    return (
        <div className="h-screen flex overflow-hidden bg-[#F0F4FA]">

            {/* ── LEFT: Banner Image ── */}
            <div className="hidden md:block w-1/2 h-full">
                <img
                    src="/Images/Auth/authBanner_image.png"
                    alt="Auth Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* ── RIGHT: Sign Up Form ── */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-6 sm:px-12 bg-[#F0F4FA] overflow-y-auto">

                <div className="w-full max-w-sm py-10">

                    {/* Logo */}
                    <div className="mb-6">
                        <img src="/Images/Auth/logo.png" alt="Z3ns Logo" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Create an account</h2>
                    <p className="text-gray-500 text-sm mb-5">Hello there, Let's start your journey with us.</p>

                    {/* Form */}
                    <form className="flex flex-col gap-3" onSubmit={handleSubmitForm}>

                        {/* Username */}
                        <div
                            className="flex items-center gap-3 px-3 py-2.5 bg-white"
                            style={{ border: '1.5px solid #D6E4F5', borderRadius: '10px' }}
                        >
                            <FaUser className="text-gray-400 text-sm shrink-0" />
                            <div className="w-px h-5 bg-gray-200 shrink-0" />
                            <input
                                type="text"
                                name="username"
                                placeholder="User name"
                                className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
                            />
                        </div>

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

                        {/* Phone Number */}
                        <div
                            className="flex items-center gap-3 px-3 py-2.5 bg-white"
                            style={{ border: '1.5px solid #D6E4F5', borderRadius: '10px' }}
                        >
                            <FaPhoneAlt className="text-gray-400 text-sm shrink-0" />
                            <div className="w-px h-5 bg-gray-200 shrink-0" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
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

                        {/* Terms checkbox */}
                        <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                            <div className="relative mt-0.5 shrink-0">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={e => setAgreed(e.target.checked)}
                                    className="sr-only hidden"
                                />
                                <div
                                    className="w-4 h-4 rounded flex items-center justify-center transition-colors"
                                    style={{
                                        background: agreed ? '#4A90E2' : 'white',
                                        border: `1.5px solid ${agreed ? '#4A90E2' : '#D6E4F5'}`,
                                    }}
                                >
                                    {agreed && (
                                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                                            <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <span className="text-xs text-gray-500 leading-relaxed">
                                By creating an account, I accept the{' '}
                                <Link href="/terms" className="text-gray-700 font-medium hover:text-[#4A90E2]">
                                    Terms &amp; Conditions
                                </Link>{' '}
                                &amp;{' '}
                                <Link href="/privacy-policy" className="text-gray-700 font-medium hover:text-[#4A90E2]">
                                    Privacy Policy
                                </Link>.
                            </span>
                        </label>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90 active:scale-[0.98] mt-1 flex items-center justify-center gap-2.5"
                            style={{ background: '#4A90E2' }}
                        >
                            Sign up {isLoading && <ButtonLoading />}
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

                    {/* Log In link */}
                    <p className="text-center text-sm text-gray-500 mt-5">
                        Already have an account?{' '}
                        <Link href="/login" className="text-[#4A90E2] font-bold hover:underline">
                            Log In
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Page;