import React from 'react';
import Link from 'next/link';
import { FaBrain } from 'react-icons/fa';

const SiteFooter = () => {
    return (
        <footer className="w-full px-4">
            <div
                className="container mx-auto  "

            >
                <div className='bg-[#F0F4FA] overflow-hidden rounded-tl-2xl rounded-tr-2xl border-t-2 border-l-2 border-r-2 border-[#C8D9EF]'>

                    {/* Top row — logo left, nav links right */}
                    <div className="flex  flex-col sm:flex-row items-start sm:items-center justify-between px-8 sm:px-10 pt-8 pb-4 gap-6">

                        {/* Logo */}
                        <div className="flex flex-col items-start">
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-1"
                                    style={{ background: '#EEF5FD' }}
                                >
                                    <FaBrain className="text-[#4A90E2] text-3xl" />
                                </div>
                                <span className="text-[#4A90E2] font-extrabold text-base tracking-wide">Z3ns</span>
                            </div>
                            <p className="text-[#4A90E2] text-sm font-medium mt-2">
                                Manage task. Guide your group
                            </p>
                        </div>

                        {/* Nav links */}
                        <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-600 text-sm hover:text-[#4A90E2] transition-colors duration-200"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-600 text-sm hover:text-[#4A90E2] transition-colors duration-200"
                            >
                                Terms &amp; Conditions
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-600 text-sm hover:text-[#4A90E2] transition-colors duration-200"
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>

                    {/* Dashed divider */}
                    <div
                        className="mx-8 sm:mx-10"
                        style={{
                            borderTop: '1.5px dashed #C8D9EF',
                        }}
                    />

                    {/* Copyright */}
                    <div className="px-8 sm:px-10 py-4 text-center">
                        <p className="text-gray-500 text-sm">
                            © 2026 Z3ns Ltd. All rights reserved.
                        </p>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default SiteFooter;