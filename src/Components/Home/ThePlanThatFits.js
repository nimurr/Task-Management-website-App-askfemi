// "use client";
// import { useGetSubscriptionQuery } from '@/redux/fetures/subscription/subscription';
// import React, { useState } from 'react';
// import {
//     FaCheckCircle,
//     FaUsers,
//     FaUserAlt,
//     FaUserFriends,
//     FaChevronDown,
//     FaChevronUp,
// } from 'react-icons/fa';

// const individualFeatures = [
//     'Single-user account',
//     'Create personal tasks',
//     'Single-user account',
//     'Start tasks anytime',
//     'Mark tasks as completed',
//     'Private task visibility',
//     'No shared tasks or assignments',
// ];

// const groupFeatures = [
//     { icon: <FaUsers className="text-[#4A90E2] text-base" />, label: 'Up to 5 users per group' },
//     { icon: <FaUserAlt className="text-[#4A90E2] text-base" />, label: '1 Primary account' },
//     { icon: <FaUserFriends className="text-[#4A90E2] text-base" />, label: 'Up to 4 Secondary accounts' },
// ];

// const ThePlanThatFits = () => {
//     const { data } = useGetSubscriptionQuery();
//     const fullSub = data?.data?.attributes;
//     console.log(fullSub)
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <section className="w-full  py-14">

//             {/* Outer relative wrapper for badge overlap */}
//             <div className="container mx-auto relative pt-6">

//                 {/* Badge overlapping top border */}
//                 <div
//                     className="absolute left-0 right-0 flex justify-center z-10"
//                     style={{ top: '-1px' }}
//                 >
//                     <span
//                         className="text-white text-sm font-semibold px-8 py-4 border-8 border-white -mt-1 rounded-full text-center whitespace-nowrap"
//                         style={{
//                             background: 'linear-gradient(135deg, #5BA4F5 0%, #4A8FDE 100%)',
//                         }}
//                     >
//                         Manage Subscriptions
//                     </span>
//                 </div>

//                 {/* Bordered container */}
//                 <div
//                     className="w-full bg-[#F0F4FA]  px-4 sm:px-8 pt-10 pb-8"
//                     style={{
//                         border: '1.5px solid #D6E4F5',
//                         borderRadius: '28px',
//                     }}
//                 >

//                     {/* Heading */}
//                     <div className="my-10">
//                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight text-center flex flex-wrap items-center justify-center gap-2">
//                             <span
//                                 className="text-gray-100 -rotate-12 px-3 py-0.5 rounded-md bg-primary"
//                             >
//                                 Choose
//                             </span>
//                             <span>The Plan That Fits Your Needs</span>
//                         </h2>
//                         <p className="text-center text-gray-400 text-sm mt-2 mb-8">
//                             Manage tasks efficiently — for yourself or your entire group.
//                         </p>
//                     </div>

//                     {/* Cards Row */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto max-w-5xl">

//                         {/* ── Individual Subscription Card ── */}
//                         <div
//                             className="flex flex-col overflow-hidden"
//                             style={{ border: '1.5px solid #E2EBF6', borderRadius: '20px' }}
//                         >
//                             {/* Dark header */}
//                             <div className="bg-gray-900 px-5 py-5">
//                                 <h3 className="text-white font-bold text-lg mb-1">Individual Subscription</h3>
//                                 <p className="text-gray-400 text-xs leading-relaxed">
//                                     Perfect for individuals who want to manage their own tasks with focus and simplicity.
//                                 </p>
//                             </div>

//                             {/* Body */}
//                             <div className="bg-white flex flex-col flex-1 px-5 py-5">

//                                 {/* Price */}
//                                 <div className="flex items-end gap-1 mb-0.5">
//                                     <span className="text-4xl font-extrabold text-gray-900">$10.99</span>
//                                     <span className="text-gray-500 text-sm mb-1.5">/ Month</span>
//                                 </div>
//                                 <p className="text-gray-400 text-xs mb-4">Basic Monthly Package</p>

//                                 {/* CTA */}
//                                 <button
//                                     className="w-full py-2.5 rounded-xl text-sm font-semibold text-[#4A90E2] transition-all duration-200 mb-5"
//                                     style={{ border: '1.5px solid #4A90E2', background: 'transparent' }}
//                                     onMouseEnter={e => {
//                                         e.currentTarget.style.background = '#EEF5FD';
//                                     }}
//                                     onMouseLeave={e => {
//                                         e.currentTarget.style.background = 'transparent';
//                                     }}
//                                 >
//                                     Get Started Now
//                                 </button>

//                                 {/* Features */}
//                                 <ul className="flex flex-col gap-2.5">
//                                     {individualFeatures.map((feat, i) => (
//                                         <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
//                                             <FaCheckCircle className="text-[#4A90E2] shrink-0 text-base" />
//                                             {feat}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>

//                         {/* ── Group Plan Card ── */}
//                         <div
//                             className="flex flex-col overflow-hidden"
//                             style={{ border: '1.5px solid #E2EBF6', borderRadius: '20px' }}
//                         >
//                             {/* Green header */}
//                             <div
//                                 className="px-5 py-5"
//                                 style={{ background: 'linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)' }}
//                             >
//                                 <h3 className="text-white font-bold text-lg mb-1">Group Plan</h3>
//                                 <p className="text-green-100 text-xs leading-relaxed">
//                                     Designed for teachers, parents, and business managers to manage multiple users from one place.
//                                 </p>
//                             </div>

//                             {/* Body */}
//                             <div className="bg-white flex flex-col flex-1 px-5 py-5">

//                                 {/* Price */}
//                                 <div className="flex items-end gap-1 mb-0.5">
//                                     <span className="text-4xl font-extrabold text-gray-900">$29.99</span>
//                                     <span className="text-gray-500 text-sm mb-1.5">/ Month</span>
//                                 </div>
//                                 <p className="text-gray-400 text-xs mb-4">Premium Monthly Package</p>

//                                 {/* CTA */}
//                                 <button
//                                     className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 mb-5"
//                                     style={{ background: '#4A90E2' }}
//                                     onMouseEnter={e => { e.currentTarget.style.background = '#3A80D2'; }}
//                                     onMouseLeave={e => { e.currentTarget.style.background = '#4A90E2'; }}
//                                 >
//                                     Get Started Now
//                                 </button>

//                                 {/* Account Structure section */}
//                                 <div
//                                     className="rounded-xl p-4 mb-4"
//                                     style={{ background: '#F4F8FD', border: '1px solid #E2EBF6' }}
//                                 >
//                                     <div className="flex items-center gap-2 mb-3">
//                                         <FaUsers className="text-[#4A90E2] text-base" />
//                                         <span className="text-sm font-bold text-gray-800">Account Structure</span>
//                                     </div>
//                                     <ul className="flex flex-col gap-2">
//                                         {groupFeatures.map(({ icon, label }, i) => (
//                                             <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
//                                                 <FaCheckCircle className="text-[#4A90E2] shrink-0 text-sm" />
//                                                 {label}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 {/* View More toggle */}
//                                 <button
//                                     onClick={() => setShowMore(!showMore)}
//                                     className="flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#4A90E2] transition-colors duration-200 mx-auto"
//                                 >
//                                     {showMore ? 'View Less' : 'View More'}
//                                     {showMore
//                                         ? <FaChevronUp className="text-xs" />
//                                         : <FaChevronDown className="text-xs" />
//                                     }
//                                 </button>

//                                 {/* Expandable features */}
//                                 {showMore && (
//                                     <ul className="flex flex-col gap-2.5 mt-4 border-t border-gray-100 pt-4">
//                                         {[
//                                             'Task assignment to members',
//                                             'Real-time progress tracking',
//                                             'Role-based access control',
//                                             'Shared team notifications',
//                                             'Progress Analytics dashboard',
//                                         ].map((feat, i) => (
//                                             <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
//                                                 <FaCheckCircle className="text-[#22C55E] shrink-0 text-base" />
//                                                 {feat}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ThePlanThatFits;



"use client";
import { useGetSubscriptionQuery, useTakeSubscriptionMutation } from '@/redux/fetures/subscription/subscription';
import React, { useState } from 'react';
import {
    FaCheckCircle,
    FaUsers,
    FaUserAlt,
    FaUserFriends,
    FaChevronDown,
    FaChevronUp,
    FaMobile,
    FaGlobe,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

// Card style based on subscription type
const getCardStyle = (type) => {
    switch (type) {
        case 'individual':
            return {
                header: 'bg-gray-900',
                headerText: 'text-gray-400',
                checkColor: 'text-[#4A90E2]',
                btnStyle: { border: '1.5px solid #4A90E2', background: 'transparent', color: '#4A90E2' },
                btnHover: { background: '#EEF5FD' },
                btnLeave: { background: 'transparent' },
            };
        case 'business_starter':
            return {
                header: 'bg-gradient-to-br from-green-400 to-green-600',
                headerText: 'text-green-100',
                checkColor: 'text-green-500',
                btnStyle: { background: '#4A90E2', color: '#fff' },
                btnHover: { background: '#3A80D2' },
                btnLeave: { background: '#4A90E2' },
            };
        case 'business_level1':
            return {
                header: 'bg-gradient-to-br from-blue-400 to-blue-600',
                headerText: 'text-blue-100',
                checkColor: 'text-blue-400',
                btnStyle: { background: '#3B82F6', color: '#fff' },
                btnHover: { background: '#2563EB' },
                btnLeave: { background: '#3B82F6' },
            };
        case 'business_level2':
            return {
                header: 'bg-gradient-to-br from-purple-500 to-purple-700',
                headerText: 'text-purple-100',
                checkColor: 'text-purple-400',
                btnStyle: { background: '#7C3AED', color: '#fff' },
                btnHover: { background: '#6D28D9' },
                btnLeave: { background: '#7C3AED' },
            };
        default:
            return {
                header: 'bg-gray-800',
                headerText: 'text-gray-400',
                checkColor: 'text-[#4A90E2]',
                btnStyle: { border: '1.5px solid #4A90E2', background: 'transparent', color: '#4A90E2' },
                btnHover: { background: '#EEF5FD' },
                btnLeave: { background: 'transparent' },
            };
    }
};

const getTypeDescription = (type) => {
    switch (type) {
        case 'individual':
            return 'Perfect for individuals who want to manage their own tasks with focus and simplicity.';
        case 'business_starter':
            return 'Designed for small teams and startups to manage tasks and collaborate efficiently.';
        case 'business_level1':
            return 'For growing businesses that need advanced task management and team collaboration.';
        case 'business_level2':
            return 'Enterprise-grade solution for large teams with powerful management tools.';
        default:
            return 'Manage tasks efficiently with this subscription plan.';
    }
};

const getFeatures = (sub) => {
    const features = [];
    if (sub.maxChildrenAccount > 0) {
        features.push(`Up to ${sub.maxChildrenAccount} sub-accounts`);
    }
    if (sub.freeTrialEnabled) features.push('Free trial included');
    features.push(`Billed ${sub.renewalFrequncy}`);
    features.push(`Available on: ${sub.availablePlatforms?.join(', ')}`);
    if (sub.purchaseChannel === 'stripe') features.push('Stripe secure payments');
    if (sub.purchaseChannel === 'revenuecat') features.push('In-app purchase (iOS & Android)');
    return features;
};

// Single subscription card
const SubscriptionCard = ({ sub }) => {

    const [takeSubscripton] = useTakeSubscriptionMutation();


    const [showMore, setShowMore] = useState(false);
    const style = getCardStyle(sub.subscriptionType);
    const features = getFeatures(sub);



    const handleTakeSub = async (id) => {
        try {
            const res = await takeSubscripton({ id }).unwrap();
            console.log(res)
            if(res?.code === 200){
                toast.success(res?.message || 'Subscribed Successfully');
                window.location.href = res?.data?.attributes;
            }
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div
            className='flex flex-col overflow-hidden'
            style={{ border: '1.5px solid #E2EBF6', borderRadius: '20px' }}
        >
            {/* Header */}
            <div className={`${style.header} px-5 py-5`}>
                <div className='flex items-start justify-between gap-2 mb-1'>
                    <h3 className='text-white font-bold text-lg'>{sub.subscriptionName}</h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0 ${sub.isActive ? 'bg-green-400/20 text-green-200' : 'bg-red-400/20 text-red-200'}`}>
                        {sub.isActive ? 'Active' : 'Inactive'}
                    </span>
                </div>
                <p className={`${style.headerText} text-xs leading-relaxed`}>
                    {getTypeDescription(sub.subscriptionType)}
                </p>
            </div>

            {/* Body */}
            <div className='bg-white flex flex-col flex-1 px-5 py-5'>

                {/* Price */}
                <div className='flex items-end gap-1 mb-0.5'>
                    <span className='text-4xl font-extrabold text-gray-900'>${sub.amount}</span>
                    <span className='text-gray-500 text-sm mb-1.5'>/ {sub.renewalFrequncy}</span>
                </div>
                <p className='text-gray-400 text-xs mb-4 capitalize'>{sub.initialDuration} billing • {sub.currency?.toUpperCase()}</p>

                {/* CTA */}
                <button
                    className='w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 mb-5'
                    style={style.btnStyle}
                    onClick={() => handleTakeSub(sub._subscriptionId)}
                // onMouseEnter={e => Object.assign(e.currentTarget.style, style.btnHover)}
                // onMouseLeave={e => Object.assign(e.currentTarget.style, style.btnLeave)}
                >
                    Get Started Now
                </button>

                {/* Platforms */}
                <div className='flex items-center gap-2 mb-4'>
                    {sub.availablePlatforms?.map((p) => (
                        <span key={p} className='flex items-center gap-1 text-xs font-semibold bg-blue-50 text-blue-500 px-2.5 py-1 rounded-full capitalize'>
                            {p === 'web' ? <FaGlobe className='text-xs' /> : <FaMobile className='text-xs' />}
                            {p}
                        </span>
                    ))}
                </div>

                {/* Max Children */}
                {sub.maxChildrenAccount > 0 && (
                    <div
                        className='rounded-xl p-4 mb-4'
                        style={{ background: '#F4F8FD', border: '1px solid #E2EBF6' }}
                    >
                        <div className='flex items-center gap-2 mb-3'>
                            <FaUsers className='text-[#4A90E2] text-base' />
                            <span className='text-sm font-bold text-gray-800'>Account Structure</span>
                        </div>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center gap-2.5 text-sm text-gray-600'>
                                <FaCheckCircle className={`${style.checkColor} shrink-0 text-sm`} />
                                Up to {sub.maxChildrenAccount} sub-accounts
                            </li>
                            <li className='flex items-center gap-2.5 text-sm text-gray-600'>
                                <FaCheckCircle className={`${style.checkColor} shrink-0 text-sm`} />
                                1 Primary account
                            </li>
                            <li className='flex items-center gap-2.5 text-sm text-gray-600'>
                                <FaCheckCircle className={`${style.checkColor} shrink-0 text-sm`} />
                                {sub.maxChildrenAccount} Secondary accounts
                            </li>
                        </ul>
                    </div>
                )}

                {/* Base Features */}
                <ul className='flex flex-col gap-2.5'>
                    {features.slice(0, 3).map((feat, i) => (
                        <li key={i} className='flex items-center gap-2.5 text-sm text-gray-600'>
                            <FaCheckCircle className={`${style.checkColor} shrink-0 text-base`} />
                            {feat}
                        </li>
                    ))}
                </ul>

                {/* View More toggle */}
                {features.length > 3 && (
                    <>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className='flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#4A90E2] transition-colors duration-200 mx-auto mt-4'
                        >
                            {showMore ? 'View Less' : 'View More'}
                            {showMore
                                ? <FaChevronUp className='text-xs' />
                                : <FaChevronDown className='text-xs' />
                            }
                        </button>

                        {showMore && (
                            <ul className='flex flex-col gap-2.5 mt-4 border-t border-gray-100 pt-4'>
                                {features.slice(3).map((feat, i) => (
                                    <li key={i} className='flex items-center gap-2.5 text-sm text-gray-600'>
                                        <FaCheckCircle className={`${style.checkColor} shrink-0 text-base`} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

const ThePlanThatFits = () => {
    const { data, isLoading } = useGetSubscriptionQuery();
    const subscriptions = data?.data?.attributes || [];

    return (
        <section className='w-full py-14'>
            <div className='container mx-auto relative pt-6'>

                {/* Badge */}
                <div className='absolute left-0 right-0 flex justify-center z-10' style={{ top: '-1px' }}>
                    <span
                        className='text-white text-sm font-semibold px-8 py-4 border-8 border-white -mt-1 rounded-full text-center whitespace-nowrap'
                        style={{ background: 'linear-gradient(135deg, #5BA4F5 0%, #4A8FDE 100%)' }}
                    >
                        Manage Subscriptions
                    </span>
                </div>

                {/* Bordered container */}
                <div
                    className='w-full bg-[#F0F4FA] px-4 sm:px-8 pt-10 pb-8'
                    style={{ border: '1.5px solid #D6E4F5', borderRadius: '28px' }}
                >
                    {/* Heading */}
                    <div className='my-10'>
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight text-center flex flex-wrap items-center justify-center gap-2'>
                            <span className='text-gray-100 -rotate-12 px-3 py-0.5 rounded-md bg-primary'>
                                Choose
                            </span>
                            <span>The Plan That Fits Your Needs</span>
                        </h2>
                        <p className='text-center text-gray-400 text-sm mt-2 mb-8'>
                            Manage tasks efficiently — for yourself or your entire group.
                        </p>
                    </div>

                    {/* Loading skeleton */}
                    {isLoading && (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-5xl'>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className='rounded-2xl overflow-hidden animate-pulse' style={{ border: '1.5px solid #E2EBF6' }}>
                                    <div className='bg-gray-200 h-28' />
                                    <div className='bg-white p-5 flex flex-col gap-3'>
                                        <div className='h-8 w-1/2 bg-gray-100 rounded-lg' />
                                        <div className='h-4 w-1/3 bg-gray-100 rounded' />
                                        <div className='h-10 bg-gray-100 rounded-xl' />
                                        <div className='h-4 bg-gray-100 rounded w-3/4' />
                                        <div className='h-4 bg-gray-100 rounded w-2/3' />
                                        <div className='h-4 bg-gray-100 rounded w-1/2' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Empty */}
                    {!isLoading && subscriptions.length === 0 && (
                        <div className='flex flex-col items-center justify-center py-16 text-gray-300'>
                            <FaUsers size={40} />
                            <p className='text-sm mt-3'>No subscription plans available yet.</p>
                        </div>
                    )}

                    {/* Cards */}
                    {!isLoading && subscriptions.length > 0 && (
                        <div className={`grid grid-cols-1 gap-5 mx-auto max-w-5xl ${subscriptions.length === 1 ? 'sm:grid-cols-1 max-w-sm' : subscriptions.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
                            {subscriptions.map((sub) => (
                                <SubscriptionCard key={sub._subscriptionId} sub={sub} />
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default ThePlanThatFits;