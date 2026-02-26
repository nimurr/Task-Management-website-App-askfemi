'use client';
import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

const ContactSections = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        description: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <section className="w-full  py-14 px-4">
            <div className="container mx-auto  ">

                {/* Outer bordered card */}
                <div
                    className="w-full bg-[#F0F4FA] grid grid-cols-1 lg:grid-cols-2"
                    style={{
                        border: '1.5px solid #D6E4F5',
                        borderRadius: '24px',
                        overflow: 'hidden',
                    }}
                >

                    {/* ══════════════════════════════════════
              LEFT COLUMN
          ══════════════════════════════════════ */}
                    <div className="px-8 sm:px-10 py-10 flex flex-col gap-6">

                        {/* Big heading */}
                        <h1
                            className="font-extrabold leading-none"
                            style={{
                                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                                color: '#4A90E2',
                                lineHeight: 1.05,
                            }}
                        >
                            Let's get<br />in touch
                        </h1>

                        {/* Contact Information block */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Contact Information</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                We're here to help you succeed with AI. Reach out to us through any of these
                                channels, and we'll get back to you promptly.
                            </p>

                            {/* Green CTA bar */}
                            <div
                                className="w-full py-3 px-4 rounded-md text-white text-sm font-medium"
                                style={{ background: '#22C55E' }}
                            >
                                Don't be afraid to say hello with us
                            </div>
                        </div>

                        {/* Divider */}
                        <hr style={{ borderColor: '#E2EBF6' }} />

                        {/* Email */}
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-2">Email</h4>
                            <div className="flex items-center gap-2 mb-1">
                                <MdOutlineMailOutline className="text-gray-600 text-lg shrink-0" />
                                <span className="text-gray-800 text-sm font-medium">Support@gmail.com</span>
                            </div>
                            <p className="text-gray-400 text-xs">We respond within 24 hours</p>
                        </div>

                        <hr style={{ borderColor: '#E2EBF6' }} />

                        {/* Phone Number */}
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-2">Phone Number</h4>
                            <div className="flex items-center gap-2 mb-1">
                                <FaPhoneAlt className="text-gray-600 text-sm shrink-0" />
                                <span className="text-gray-800 text-sm font-medium">53416416341614</span>
                            </div>
                            <p className="text-gray-400 text-xs">Remote consultations available</p>
                        </div>

                        <hr style={{ borderColor: '#E2EBF6' }} />

                        {/* Response Time */}
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-2">Response Time</h4>
                            <div className="flex items-center gap-2 mb-1">
                                <FaRegClock className="text-gray-600 text-sm shrink-0" />
                                <span className="text-gray-800 text-sm font-medium">24 hours</span>
                            </div>
                            <p className="text-gray-400 text-xs">Average response time</p>
                        </div>

                    </div>

                    {/* ══════════════════════════════════════
              RIGHT COLUMN
          ══════════════════════════════════════ */}
                    <div
                        className="flex flex-col bg-[#F4F8FD] px-6 sm:px-8 py-10"
                        style={{ borderLeft: '1.5px solid #D6E4F5' }}
                    >

                        {/* Arrow + support text */}
                        <div className="flex items-start gap-3 mb-10">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Have questions or need support? Our team is ready to help you anytime.
                            </p>
                        </div>

                        {/* Form card */}
                        <div
                            className="flex-1 bg-white p-6 sm:p-8 flex flex-col gap-6"
                            style={{
                                border: '1.5px solid #4A90E2',
                                borderRadius: '20px',
                            }}
                        >
                            <h3 className="text-lg font-bold text-gray-900">Send us a message</h3>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                {/* Full Name */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-gray-700">
                                        Full Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent outline-none text-sm text-gray-800 pb-2"
                                        style={{ borderBottom: '1.5px solid #D1D9E8' }}

                                    />
                                </div>

                                {/* Email Address */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-gray-700">
                                        Email Address <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent outline-none text-sm text-gray-800 pb-2"
                                        style={{ borderBottom: '1.5px solid #D1D9E8' }}

                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="w-full bg-transparent outline-none text-sm text-gray-800 pb-2"
                                        style={{ borderBottom: '1.5px solid #D1D9E8' }}
                                        placeholder=" +1 (123) 456-7890"
                                    />
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-gray-700">Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        className="w-full bg-transparent outline-none text-sm text-gray-800 pb-2"
                                        style={{ borderBottom: '1.5px solid #D1D9E8' }}
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90 active:scale-[0.98] mt-1"
                                    style={{ background: '#4A90E2' }}
                                >
                                    Send Message
                                    <IoSend className="text-base" />
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSections;