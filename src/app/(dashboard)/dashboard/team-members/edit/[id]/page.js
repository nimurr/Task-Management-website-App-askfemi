'use client'
import { useUpdateChieldProfileMutation } from "@/redux/fetures/profile/profile";
import { useParams } from "next/navigation";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {

    const { id } = useParams() // 🔥 get dynamic id from route

    const [updateCliendProfile, { isLoading }] = useUpdateChieldProfileMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const formData = {
            name: form.name.value,
            email: form.email.value, // ⚠️ read-only
            phoneNumber: form.phoneNumber.value,
            location: form.location.value,
            gender: form.gender.value.toLowerCase(),
            supportMode: form.supportMode.value.toLowerCase(),
            dateOfBirth: form.dateOfBirth.value,
            password: form.password.value,
            note: form.note.value
        };


        try {
            const response = await updateCliendProfile({
                id: id, // 🔥 use dynamic id
                data: formData
            }).unwrap();
            console.log(response)

            toast.success("Profile updated successfully!");

        } catch (error) {
            console.error(error);
            toast.error(error?.data?.message || "Update failed");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <ToastContainer />

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-semibold">Edit Member</h1>
                    <p className="text-sm text-gray-500">
                        Update and manage team member
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
                    />

                    {/* 🔒 Email disabled */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        disabled
                        className="w-full border px-4 py-3 rounded-lg bg-gray-100 cursor-not-allowed"
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
                        placeholder="New Password"
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <textarea
                        name="note"
                        placeholder="Note"
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-500 text-white py-3 rounded-lg"
                    >
                        {isLoading ? "Updating..." : "Update Profile"}
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Page;