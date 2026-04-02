'use client';
import { useCreateMemberProfileMutation } from "@/redux/fetures/profile/profile";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {
    const [createMemberProfile, { isLoading }] = useCreateMemberProfileMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        // ✅ MATCH API STRUCTURE EXACTLY
        const formData = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            phoneNumber: form.phoneNumber.value,
            location: form.location.value,
            gender: form.gender.value.toLowerCase(),
            dateOfBirth: form.dateOfBirth.value,
            supportMode: form.supportMode.value.toLowerCase()
        };

        console.log("Payload:", formData);

        try {
            await createMemberProfile(formData).unwrap();

            toast.success("Member created successfully!");

            form.reset(); // 🔥 clear form

        } catch (error) {
            console.error(error);
            toast.error(error?.data?.message || "Failed to create member");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 rounded-lg p-8">
            <ToastContainer />

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-semibold">Create Member</h1>
                    <p className="text-sm text-gray-500">
                        Create and manage team members
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex justify-center">

                <div className="bg-white max-w-xl w-full p-6 rounded-xl shadow-sm space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="User name"
                        className="w-full border px-4 py-3 rounded-lg"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border px-4 py-3 rounded-lg"
                        required
                    />

                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone number"
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <select name="gender" className="w-full border px-4 py-3 rounded-lg">
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <input
                        type="date"
                        name="dateOfBirth"
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <select name="supportMode" className="w-full border px-4 py-3 rounded-lg">
                        <option value="">Support Mode</option>
                        <option value="calm">Calm</option>
                        <option value="encouraging">Encouraging</option>
                        <option value="logical">Logical</option>
                    </select>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="w-full border px-4 py-3 rounded-lg"
                        required
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-500 text-white py-3 rounded-lg disabled:opacity-50"
                    >
                        {isLoading ? "Creating..." : "Create Member"}
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Page;