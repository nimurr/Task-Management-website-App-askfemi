import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const DownloadtheApp = () => {
    return (
        <section className="container mx-auto lg:my-20 my-10 px-4">

            {/* Outer wrapper */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #EEF3FA 0%, #F5F8FF 100%)',
                    borderRadius: '24px',
                    minHeight: '320px',
                }}
            >

                {/* ── Decorative starburst — top left (YOUR original image) ── */}
                <img
                    className="absolute top-0 left-0 w-24 sm:w-40 select-none pointer-events-none"
                    src="/images/Home/offer_image.png"
                    alt=""
                    style={{ zIndex: 1 }}
                />
                <div className='h-[300px]'></div>

                {/* Content layout */}
                <div className="flex flex-col lg:flex-row items-end justify-between h-full border-l-2 border-t-2 rounded-2xl border-green-500 bg-gradient-to-l from-[#d9e1fc] to-[#d6f2e0]">

                    {/* ── Left: Text + Buttons ── */}
                    <div className="relative z-10 flex-1 px-6 sm:px-10 pt-24 pb-8 lg:pb-10 lg:pt-16 max-w-lg">

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
                            Download the App &amp; Stay in Control
                        </h2>
                        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                            Manage your tasks anytime, anywhere — for yourself or your entire group.
                        </p>

                        {/* Download label */}
                        <p className="text-xs font-bold text-gray-800 tracking-widest uppercase mb-3">
                            Download Our App
                        </p>

                        {/* Store buttons */}
                        <div className="flex flex-wrap gap-3">

                            {/* Google Play */}
                            <a
                                href="#"
                                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-opacity hover:opacity-80"
                                style={{
                                    background: '#1A1A1A',
                                    border: '1px solid #333',
                                    minWidth: '140px',
                                    textDecoration: 'none',
                                }}
                            >
                                <FaGooglePlay className="text-white text-2xl shrink-0" />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-gray-400 text-[10px]">GET IT ON</span>
                                    <span className="text-white text-sm font-bold">Google Play</span>
                                </div>
                            </a>

                            {/* App Store */}
                            <a
                                href="#"
                                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-opacity hover:opacity-80"
                                style={{
                                    background: '#1A1A1A',
                                    border: '1px solid #333',
                                    minWidth: '140px',
                                    textDecoration: 'none',
                                }}
                            >
                                <FaApple className="text-white text-3xl shrink-0" />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-gray-400 text-[10px]">Download on the</span>
                                    <span className="text-white text-sm font-bold">App Store</span>
                                </div>
                            </a>

                        </div>
                    </div>

                    <img
                        src="/Images/Home/HandandiPhone16Pro.png"
                        alt="App preview on phone"
                        className="absolute z-10 right-0 bottom-0 w-[500px] lg:block hidden select-none pointer-events-none"
                    />

                </div>

                {/* Green L-shaped border accent — bottom-left corner */}
                <div
                    className="absolute bottom-0 left-0 pointer-events-none "
                    style={{
                        width: '120px',
                        height: '120px',
                        borderLeft: '2.5px solid #4ADE80',
                        borderBottom: '2.5px solid #4ADE80',
                        borderBottomLeftRadius: '22px',
                        zIndex: 0,
                    }}
                />

            </div>
        </section>
    );
};

export default DownloadtheApp;