// import Link from 'next/link';
// import React from 'react';
// import { MdOutlineMailOutline } from 'react-icons/md';
// import { FaPhoneAlt } from "react-icons/fa";


// const Header = () => {
//     return (
//         <div>
//             <div className='bg-primary text-white py-3 text-xl flex items-center justify-end '>
//                 <div className='flex items-center sm:justify-end sm:gap-5 gap-2 flex-wrap container mx-auto'>
//                     <Link href='mailto:nimurnerob404@gmail.com' className='flex items-center'>
//                         <MdOutlineMailOutline className='text-2xl' />
//                         <span className='ml-2 text-sm'>nimurnerob404@gmail.com</span>
//                     </Link>
//                     <Link href='mailto:nimurnerob404@gmail.com' className='flex items-center'>
//                         <FaPhoneAlt className='text-xl' />
//                         <span className='ml-2 text-sm'>+8801717-xxxxxx</span>
//                     </Link>
//                 </div>
//             </div>
//             {/* navbar here */}
//             <div>

//             </div>
//         </div>
//     );
// }

// export default Header;
'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { MdOutlineMailOutline, MdClose } from 'react-icons/md';
import { FaPhoneAlt, FaBrain } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RiArrowRightUpLine } from 'react-icons/ri';

const NAV_LINKS = [
    { label: 'How it work', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    /* Shrink navbar on scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Lock body scroll when mobile menu is open */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <header className="w-full sticky top-0 z-50 font-sans">

            {/* ── Top Contact Bar ────────────────────────────── */}
            <div className="bg-[#4A90E2] text-white py-2">
                <div className="container mx-auto py-2 flex flex-wrap items-center justify-end gap-x-6 gap-y-1">
                    <Link
                        href="mailto:Support@gmail.com"
                        className="flex items-center gap-1.5 text-xs sm:text-sm hover:text-blue-100 transition-colors duration-200"
                    >
                        <MdOutlineMailOutline className="text-base sm:text-lg shrink-0" />
                        <span>Support@gmail.com</span>
                    </Link>
                    <Link
                        href="tel:+12121231223131"
                        className="flex items-center gap-1.5 text-xs sm:text-sm hover:text-blue-100 transition-colors duration-200"
                    >
                        <FaPhoneAlt className="text-sm sm:text-base shrink-0" />
                        <span>+12121231223131</span>
                    </Link>
                </div>
            </div>

            {/* ── Main Navbar ─────────────────────────────────── */}
            <div
                className={`bg-[#EBF4FD] transition-shadow duration-300 container mx-auto rounded-lg my-2 p-2 ${scrolled ? 'shadow-md' : 'shadow-sm'
                    }`}
            >
                <div
                    className={`container mx-auto px-4 xl:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2' : 'py-3 sm:py-4'
                        }`}
                >

                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-center group shrink-0">
                       <img className='md:w-20 w-14 mx-auto md:ml-0' src="/Images/Auth/logo.png" alt="" />
                    </Link>

                    {/* Desktop Nav Pills */}
                    <nav
                        className="hidden md:flex items-center gap-1 bg-blue-100/70 rounded-lg px-4 py-3 border border-blue-200/60"
                        aria-label="Main navigation"
                    >
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setActiveLink(href)}
                                className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeLink === href
                                        ? 'bg-white text-[#4A90E2] shadow-sm'
                                        : 'text-gray-500 hover:text-[#4A90E2] hover:bg-white/60'
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link
                            href="/signin"
                            className="px-5 py-3 text-[#4A90E2] font-semibold text-sm rounded-lg hover:bg-blue-100 transition-colors duration-200"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="flex items-center gap-1.5 px-5 py-3 bg-[#4A90E2] text-white font-semibold text-sm rounded-lg hover:bg-[#3A80D2] active:scale-95 transition-all duration-200 shadow-sm shadow-blue-200"
                        >
                            Sign Up
                            <RiArrowRightUpLine className="text-base" />
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={menuOpen}
                        className="md:hidden p-2 rounded-xl text-[#4A90E2] hover:bg-blue-100 transition-colors duration-200"
                    >
                        <HiMenuAlt3 className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* ── Mobile Drawer Overlay ────────────────────────── */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'
                    }`}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMenuOpen(false)}
                    className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Drawer Panel */}
                <div
                    className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#EBF4FD]">
                        <div className="flex items-center gap-2">
                            <FaBrain className="text-[#4A90E2] text-xl" />
                            <span className="text-[#4A90E2] font-extrabold text-base tracking-wide">Z3ns</span>
                        </div>
                        <button
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                            className="p-1.5 rounded-xl text-gray-400 hover:text-[#4A90E2] hover:bg-blue-50 transition-colors duration-200"
                        >
                            <MdClose className="text-xl" />
                        </button>
                    </div>

                    {/* Drawer Nav Links */}
                    <nav className="flex flex-col px-4 py-4 gap-1 flex-1" aria-label="Mobile navigation">
                        {NAV_LINKS.map(({ label, href }, i) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => { setActiveLink(href); setMenuOpen(false); }}
                                style={{ animationDelay: `${i * 60}ms` }}
                                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeLink === href
                                        ? 'bg-blue-50 text-[#4A90E2]'
                                        : 'text-gray-600 hover:bg-blue-50 hover:text-[#4A90E2]'
                                    }`}
                            >
                                {label}
                                <RiArrowRightUpLine className="text-base opacity-40" />
                            </Link>
                        ))}
                    </nav>

                    {/* Drawer Auth Buttons */}
                    <div className="px-4 py-5 border-t border-gray-100 flex flex-col gap-3">
                        <Link
                            href="/signin"
                            onClick={() => setMenuOpen(false)}
                            className="w-full text-center py-2.5 rounded-xl border-2 border-[#4A90E2] text-[#4A90E2] font-semibold text-sm hover:bg-blue-50 transition-colors duration-200"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            onClick={() => setMenuOpen(false)}
                            className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#4A90E2] text-white font-semibold text-sm hover:bg-[#3A80D2] active:scale-95 transition-all duration-200 shadow-sm shadow-blue-200"
                        >
                            Sign Up
                            <RiArrowRightUpLine className="text-base" />
                        </Link>
                    </div>

                    {/* Drawer Contact Info */}
                    <div className="px-4 py-4 bg-[#EBF4FD] border-t border-blue-100 flex flex-col gap-2">
                        <Link href="mailto:Support@gmail.com" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#4A90E2] transition-colors">
                            <MdOutlineMailOutline className="text-base text-[#4A90E2] shrink-0" />
                            Support@gmail.com
                        </Link>
                        <Link href="tel:+12121231223131" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#4A90E2] transition-colors">
                            <FaPhoneAlt className="text-sm text-[#4A90E2] shrink-0" />
                            +12121231223131
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;