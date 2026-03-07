import React from "react";

const Page = () => {
    return (
        <div className="bg-gray-100 rounded-lg min-h-screen p-6">
            <div className=" mx-auto space-y-6">

                {/* Profile Header */}
                <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between flex-wrap">
                    <div className="flex items-center flex-wrap gap-4">
                        <img
                            src="https://i.pravatar.cc/100"
                            alt="profile"
                            className="w-14 h-14 rounded-full"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">Alax Morgn</h2>
                            <p className="text-gray-500 text-sm">Secondary User</p>
                        </div>
                    </div>

                    <div className="flex items-center flex-wrap gap-4">
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Support Mode</p>
                            <p className="text-sm font-medium text-gray-700">Calm</p>
                        </div>

                        <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                            Change Mode
                        </button>

                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Personal Info */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-6">Personal Information</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                        <div>
                            <p className="text-gray-500">User name</p>
                            <p className="font-medium">Alax Morgan</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Email</p>
                            <p className="font-medium">AlaxMorgn12@gmail.com</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Phone number</p>
                            <p className="font-medium">141641631</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Address</p>
                            <p className="font-medium">USA</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Gender</p>
                            <p className="font-medium">Male</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Date of Birth</p>
                            <p className="font-medium">12/12/2021</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Age</p>
                            <p className="font-medium">6 Years</p>
                        </div>
                    </div>
                </div>

                {/* Task Card 1 */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">Complete Math Homework</h3>
                        <span className="text-white bg-green-600 text-xs px-3 py-2 rounded-full">
                            Completed
                        </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-3">
                        Task Start Date & Time : 12/10/2026 - 08:30 AM
                    </p>

                    <p className="text-sm text-gray-600">
                        Finish exercises 1–10 from chapter 5. This call is scheduled to align
                        the design team on current progress and clarify open points.
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                        <img
                            src="https://i.pravatar.cc/40"
                            className="w-8 h-8 rounded-full"
                        />
                        <p className="text-sm text-gray-600">
                            Assigned to <span className="font-medium">Alax Morgn</span>
                        </p>
                    </div>
                </div>

                {/* Task Card 2 */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">Reading Book</h3>
                        <span className="text-white bg-green-600 text-xs px-3 py-2 rounded-full">
                            Completed
                        </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-3">
                        Task Start Date & Time : 12/10/2026 - 08:30 AM
                    </p>

                    <p className="text-sm text-gray-600 mb-4">
                        Finish exercises 1–10 from chapter 5. This call is scheduled to align
                        the design team on current progress and clarify open points.
                    </p>

                    {/* Sub Tasks */}
                    <div className="bg-blue-50 p-3 rounded-md mb-4">
                        <p className="text-sm font-medium mb-2">Sub-Tasks (03)</p>

                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>✔ Call with design team</li>
                            <li>✔ Review project milestones</li>
                            <li>✔ Update client on progress</li>
                        </ul>
                    </div>

                    {/* Assigned Users */}
                    <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                            <img
                                src="https://i.pravatar.cc/40?img=1"
                                className="w-8 h-8 rounded-full border"
                            />
                            <img
                                src="https://i.pravatar.cc/40?img=2"
                                className="w-8 h-8 rounded-full border"
                            />
                            <img
                                src="https://i.pravatar.cc/40?img=3"
                                className="w-8 h-8 rounded-full border"
                            />
                        </div>

                        <div className="flex items-center gap-3">

                            {/* Progress Bar */}
                            <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[80%]"></div>
                            </div>

                            {/* Text */}
                            <span className="text-sm text-gray-500">80% Completed</span>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;