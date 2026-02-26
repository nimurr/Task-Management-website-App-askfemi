import React from 'react';
import { FaUsers, FaUserShield, FaTasks, FaHandshake, FaBell, FaChartPie } from 'react-icons/fa';

const benefits = [
    {
        icon: <FaUsers className="text-3xl" style={{ color: '#E05A5A' }} />,
        iconBg: '#FFF0F0',
        title: 'Up to 5 users in one group',
        description:
            'Build your team with one primary account and up to 4 secondary members working together seamlessly.',
    },
    {
        icon: <FaUserShield className="text-3xl" style={{ color: '#4A90E2' }} />,
        iconBg: '#EEF5FD',
        title: 'Primary & Secondary roles',
        description:
            'Clear role management with admin controls for the primary account and guided access for team members.',
    },
    {
        icon: <FaTasks className="text-3xl" style={{ color: '#4A90E2' }} />,
        iconBg: '#EEF5FD',
        title: 'Assign, track & complete',
        description:
            'Create tasks, assign to members, track progress in real-time, and celebrate completions together.',
    },
    {
        icon: <FaHandshake className="text-3xl" style={{ color: '#E8834A' }} />,
        iconBg: '#FFF4EE',
        title: 'Collaborative support',
        description:
            'Team members can help each other, share updates, and work together on complex tasks.',
    },
    {
        icon: <FaBell className="text-3xl" style={{ color: '#4A90E2' }} />,
        iconBg: '#EEF5FD',
        title: 'Real-time notifications',
        description:
            'Stay updated with instant notifications for task assignments, completions, and important updates.',
    },
    {
        icon: <FaChartPie className="text-3xl" style={{ color: '#E8834A' }} />,
        iconBg: '#FFF4EE',
        title: 'Progress Analytics',
        description:
            'Visualize team performance, track completion rates, and identify areas for improvement.',
    },
];

const GroupSubscriptionBenefits = () => {
    return (
        <section className="w-full py-10 lg:py-20">

            {/* Outer wrapper with faint rounded border — matches the large container border in the screenshot */}
            <div
                className="container bg-[#f0f8ff] mx-auto rounded-3xl px-4 sm:px-8 py-10"
                style={{ border: '1px solid #DDE6F0' }}
            >

                {/* Badge */}
                <div className="flex justify-center mb-7">
                    <span
                        className="text-white border-8 border-white -mt-1 text-sm font-semibold px-7 py-4 rounded-full text-center"
                        style={{ background: 'linear-gradient(90deg, #5BA4F5 0%, #4A90E2 100%)' }}
                    >
                        Everything you need to manage your group effectively
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 mb-10 leading-tight tracking-tight">
                    Group Subscription Benefits
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    {benefits.map(({ icon, iconBg, title, description }, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col gap-5 p-6 sm:p-7 transition-shadow duration-300 hover:shadow-sm"
                            style={{
                                borderRadius: '16px',
                                border: '1.5px solid #E2EBF6',
                            }}
                        >
                            {/* Icon Box */}
                            <div
                                className="flex items-center justify-center shrink-0"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '14px',
                                    background: iconBg,
                                    border: '1px solid rgba(0,0,0,0.05)',
                                }}
                            >
                                {icon}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-[1.05rem] sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                                    {title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GroupSubscriptionBenefits;