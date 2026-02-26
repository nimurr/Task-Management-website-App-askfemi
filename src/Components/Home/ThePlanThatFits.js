"use client";
import React, { useState } from 'react';
import {
    FaCheckCircle,
    FaUsers,
    FaUserAlt,
    FaUserFriends,
    FaChevronDown,
    FaChevronUp,
} from 'react-icons/fa';

const individualFeatures = [
    'Single-user account',
    'Create personal tasks',
    'Single-user account',
    'Start tasks anytime',
    'Mark tasks as completed',
    'Private task visibility',
    'No shared tasks or assignments',
];

const groupFeatures = [
    { icon: <FaUsers className="text-[#4A90E2] text-base" />, label: 'Up to 5 users per group' },
    { icon: <FaUserAlt className="text-[#4A90E2] text-base" />, label: '1 Primary account' },
    { icon: <FaUserFriends className="text-[#4A90E2] text-base" />, label: 'Up to 4 Secondary accounts' },
];

const ThePlanThatFits = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="w-full  py-14 px-4">

            {/* Outer relative wrapper for badge overlap */}
            <div className="container mx-auto   relative pt-6">

                {/* Badge overlapping top border */}
                <div
                    className="absolute left-0 right-0 flex justify-center z-10"
                    style={{ top: '-1px' }}
                >
                    <span
                        className="text-white text-sm font-semibold px-8 py-4 border-8 border-white -mt-1 rounded-full text-center whitespace-nowrap"
                        style={{
                            background: 'linear-gradient(135deg, #5BA4F5 0%, #4A8FDE 100%)',
                        }}
                    >
                        Manage Subscriptions
                    </span>
                </div>

                {/* Bordered container */}
                <div
                    className="w-full bg-[#F0F4FA]  px-4 sm:px-8 pt-10 pb-8"
                    style={{
                        border: '1.5px solid #D6E4F5',
                        borderRadius: '28px',
                    }}
                >

                    {/* Heading */}
                    <div className="my-10">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight text-center flex flex-wrap items-center justify-center gap-2">
                            <span
                                className="text-gray-100 -rotate-12 px-3 py-0.5 rounded-md bg-primary" 
                            >
                                Choose
                            </span>
                            <span>The Plan That Fits Your Needs</span>
                        </h2>
                        <p className="text-center text-gray-400 text-sm mt-2 mb-8">
                            Manage tasks efficiently — for yourself or your entire group.
                        </p>
                    </div>

                    {/* Cards Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto max-w-5xl">

                        {/* ── Individual Subscription Card ── */}
                        <div
                            className="flex flex-col overflow-hidden"
                            style={{ border: '1.5px solid #E2EBF6', borderRadius: '20px' }}
                        >
                            {/* Dark header */}
                            <div className="bg-gray-900 px-5 py-5">
                                <h3 className="text-white font-bold text-lg mb-1">Individual Subscription</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Perfect for individuals who want to manage their own tasks with focus and simplicity.
                                </p>
                            </div>

                            {/* Body */}
                            <div className="bg-white flex flex-col flex-1 px-5 py-5">

                                {/* Price */}
                                <div className="flex items-end gap-1 mb-0.5">
                                    <span className="text-4xl font-extrabold text-gray-900">$10.99</span>
                                    <span className="text-gray-500 text-sm mb-1.5">/ Month</span>
                                </div>
                                <p className="text-gray-400 text-xs mb-4">Basic Monthly Package</p>

                                {/* CTA */}
                                <button
                                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-[#4A90E2] transition-all duration-200 mb-5"
                                    style={{ border: '1.5px solid #4A90E2', background: 'transparent' }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = '#EEF5FD';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    Get Started Now
                                </button>

                                {/* Features */}
                                <ul className="flex flex-col gap-2.5">
                                    {individualFeatures.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                                            <FaCheckCircle className="text-[#4A90E2] shrink-0 text-base" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* ── Group Plan Card ── */}
                        <div
                            className="flex flex-col overflow-hidden"
                            style={{ border: '1.5px solid #E2EBF6', borderRadius: '20px' }}
                        >
                            {/* Green header */}
                            <div
                                className="px-5 py-5"
                                style={{ background: 'linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)' }}
                            >
                                <h3 className="text-white font-bold text-lg mb-1">Group Plan</h3>
                                <p className="text-green-100 text-xs leading-relaxed">
                                    Designed for teachers, parents, and business managers to manage multiple users from one place.
                                </p>
                            </div>

                            {/* Body */}
                            <div className="bg-white flex flex-col flex-1 px-5 py-5">

                                {/* Price */}
                                <div className="flex items-end gap-1 mb-0.5">
                                    <span className="text-4xl font-extrabold text-gray-900">$29.99</span>
                                    <span className="text-gray-500 text-sm mb-1.5">/ Month</span>
                                </div>
                                <p className="text-gray-400 text-xs mb-4">Premium Monthly Package</p>

                                {/* CTA */}
                                <button
                                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 mb-5"
                                    style={{ background: '#4A90E2' }}
                                    onMouseEnter={e => { e.currentTarget.style.background = '#3A80D2'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = '#4A90E2'; }}
                                >
                                    Get Started Now
                                </button>

                                {/* Account Structure section */}
                                <div
                                    className="rounded-xl p-4 mb-4"
                                    style={{ background: '#F4F8FD', border: '1px solid #E2EBF6' }}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaUsers className="text-[#4A90E2] text-base" />
                                        <span className="text-sm font-bold text-gray-800">Account Structure</span>
                                    </div>
                                    <ul className="flex flex-col gap-2">
                                        {groupFeatures.map(({ icon, label }, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                                                <FaCheckCircle className="text-[#4A90E2] shrink-0 text-sm" />
                                                {label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* View More toggle */}
                                <button
                                    onClick={() => setShowMore(!showMore)}
                                    className="flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#4A90E2] transition-colors duration-200 mx-auto"
                                >
                                    {showMore ? 'View Less' : 'View More'}
                                    {showMore
                                        ? <FaChevronUp className="text-xs" />
                                        : <FaChevronDown className="text-xs" />
                                    }
                                </button>

                                {/* Expandable features */}
                                {showMore && (
                                    <ul className="flex flex-col gap-2.5 mt-4 border-t border-gray-100 pt-4">
                                        {[
                                            'Task assignment to members',
                                            'Real-time progress tracking',
                                            'Role-based access control',
                                            'Shared team notifications',
                                            'Progress Analytics dashboard',
                                        ].map((feat, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                                                <FaCheckCircle className="text-[#22C55E] shrink-0 text-base" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThePlanThatFits;