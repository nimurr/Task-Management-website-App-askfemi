import React from 'react';
import { FaUsers, FaTasks, FaUserPlus, FaChartLine } from 'react-icons/fa';

const steps = [
    {
        number: '1',
        icon: <FaUsers className="text-xl text-white" />,
        iconBg: '#22C55E',
        title: 'Create Group Account',
        description: 'Sign up as the primary account holder and set up your group workspace in minutes.',
        col: 'left',
    },
    {
        number: '2',
        icon: <FaTasks className="text-xl text-white" />,
        iconBg: '#F59E0B',
        title: 'Assign & Manage Tasks',
        description: 'Create tasks, set deadlines, assign to members, and track everything from your dashboard.',
        col: 'right',
    },
    {
        number: '3',
        icon: <FaUserPlus className="text-xl text-white" />,
        iconBg: '#4A90E2',
        title: 'Add Up to 4 Members',
        description: 'Invite team members via email and assign them secondary account roles.',
        col: 'left',
    },
    {
        number: '4',
        icon: <FaChartLine className="text-xl text-white" />,
        iconBg: '#9333EA',
        title: 'Track Progress in Real Time',
        description: 'Monitor task completion, team performance, and celebrate achievements together.',
        col: 'right',
    },
];

const HowItWorks = () => {
    return (
        <section className="w-full sm:py-20 lg:py-28">

            {/* Outer relative wrapper for badge overlap */}
            <div className="container mx-auto border border-[#DDE6F0] rounded-3xl bg-[#e5f2ff]  relative">

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
                        Get started in four simple steps
                    </span>
                </div>

                {/* Bordered container */}
                <div
                    className="w-full  px-4 sm:px-10 pt-14 pb-10 relative overflow-hidden"

                >

                    {/* Heading */}
                    <h2 className="text-center text-3xl sm:text-4xl my-14 lg:text-[2.6rem] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                        How It Works
                    </h2>

                    {/* Dashed arc SVG between heading and steps */}
                    <div className="flex justify-center mb-6 w-full overflow-hidden">
                        <svg
                            viewBox="0 0 700 90"
                            className="w-full max-w-2xl"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M 30 80 Q 350 -20 670 80"
                                stroke="#A8C8E8"
                                strokeWidth="1.5"
                                strokeDasharray="8 6"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Steps — 2 column grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20">
                        {steps.map(({ number, icon, iconBg, title, description }) => (
                            <div key={number} className="flex items-start gap-4 relative">

                                {/* Faded large step number background */}
                                <div
                                    className="absolute select-none pointer-events-none font-extrabold leading-none"
                                    style={{
                                        fontSize: '110px',
                                        color: 'rgba(160,180,210,0.25)',
                                        top: '-20px',
                                        left: '-10px',
                                        lineHeight: 1,
                                        zIndex: 0,
                                    }}
                                >
                                    {number}
                                </div>

                                {/* Icon + text — above the faded number */}
                                <div className="relative z-10 flex items-start gap-4 pl-10 sm:pl-16">
                                    {/* Icon box */}
                                    <div
                                        className="flex items-center justify-center shrink-0 mt-1"
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: iconBg,
                                            boxShadow: `0 4px 12px ${iconBg}55`,
                                        }}
                                    >
                                        {icon}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 leading-snug">
                                            {title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                            {description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};

export default HowItWorks;