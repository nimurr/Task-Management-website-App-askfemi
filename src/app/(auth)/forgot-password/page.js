'use client'
import Link from 'next/link';
import React from 'react';
import { FaBrain } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoSend } from 'react-icons/io5';

const Page = () => {
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

            {/* ── RIGHT: Forgot Password Form ── */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-6 sm:px-12 bg-[#F0F4FA]">

                <div className="w-full max-w-sm">

                    {/* Logo */}
                    <div className="mb-6">
                        <img src="/Images/Auth/logo.png" alt="Z3ns Logo" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Forgot Password?</h2>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                        Please enter your email address to reset your password.
                    </p>

                    {/* Form */}
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

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
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
                            />
                        </div>

                        {/* Send OTP Button */}
                        <Link href="/verify-otp" className="w-full mt-1">
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90 active:scale-[0.98]"
                                style={{ background: '#4A90E2' }}
                            >
                                Send OTP
                                <IoSend className="text-base" />
                            </button>
                        </Link>

                    </form>

                    {/* Back to Sign In */}
                    <p className="text-center text-sm text-gray-500 mt-5">
                        Remember your password?{' '}
                        <Link href="/login" className="text-[#4A90E2] font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Page;