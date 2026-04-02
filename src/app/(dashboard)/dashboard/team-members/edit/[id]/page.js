'use client'
import CardLoading from "@/Components/Common/CardLoading";
import { useGetChildProfilebyIdQuery, useUpdateChieldProfileMutation } from "@/redux/fetures/profile/profile";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {
    const { id } = useParams(); // 🔥 get dynamic id from route

    const { data, isLoading: isFetching } = useGetChildProfilebyIdQuery(id); // 🔥 fetch profile data by id
    const profile = data?.data?.attributes;

    const [formValues, setFormValues] = useState({
        name: "",
        phoneNumber: "",
        location: "",
        gender: "",
        supportMode: "",
        dateOfBirth: "",
        password: "",
        note: ""
    });

    useEffect(() => {
        if (profile) {
            setFormValues({
                name: profile.name || "",
                phoneNumber: profile.phoneNumber || "",
                location: profile.location || "",
                gender: profile.gender || "",
                supportMode: profile.supportMode || "",
                dateOfBirth: profile.dateOfBirth || "",
                password: "",
                note: profile.note || ""
            });
        }
    }, [profile]);

    const [updateCliendProfile, { isLoading }] = useUpdateChieldProfileMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await updateCliendProfile({
                id,
                data: {
                    ...formValues,
                    gender: formValues.gender.toLowerCase(),
                    supportMode: formValues.supportMode.toLowerCase()
                }
            }).unwrap();

            console.log(response)

            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error(error?.data?.message || "Update failed");
        }
    };

    if (isFetching) return <div className="space-y-4 p-5">
        {
            [1, 2, 3, 4].map((i) => (
                <CardLoading key={i} />
            ))
        }
    </div>;

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
                        value={formValues.name}
                        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    {/* 🔒 Email disabled */}
                    {/* <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        disabled
                        className="w-full border px-4 py-3 rounded-lg bg-gray-100 cursor-not-allowed"
                    /> */}

                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone number"
                        value={formValues.phoneNumber}
                        onChange={(e) => setFormValues({ ...formValues, phoneNumber: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formValues.location}
                        onChange={(e) => setFormValues({ ...formValues, location: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <select
                        name="gender"
                        value={formValues.gender || ""}
                        onChange={(e) => setFormValues({ ...formValues, gender: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg"
                    >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formValues.dateOfBirth || ""}
                        onChange={(e) => setFormValues({ ...formValues, dateOfBirth: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <select
                        name="supportMode"
                        value={formValues.supportMode || ""}
                        onChange={(e) => setFormValues({ ...formValues, supportMode: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg"
                    >
                        <option value="">Support Mode</option>
                        <option value="calm">Calm</option>
                        <option value="encouraging">Encouraging</option>
                        <option value="logical">Logical</option>
                    </select>

                    <input
                        type="password"
                        name="password"
                        placeholder="New Password"
                        value={formValues.password}
                        onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg"
                    />

                    <textarea
                        name="note"
                        placeholder="Note"
                        value={formValues.note}
                        onChange={(e) => setFormValues({ ...formValues, note: e.target.value })}
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