'use client';
import React from "react";

const Page = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const formData = {
            username: form.username.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            gender: form.gender.value,
            dob: form.dob.value,
            age: form.age.value,
            supportMode: form.supportMode.value,
            password: form.password.value
        };

        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 rounded-lg p-8">
            <div>

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold">Create Member</h1>
                        <p className="text-sm text-gray-500">
                            Create and manage team members
                        </p>
                    </div>

                    <div className="text-sm text-gray-500">
                        Dashboard <span className="mx-2">›</span>
                        <span className="text-blue-500">Create Member</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex gap-8 justify-center">

                    <div className="bg-white max-w-xl p-6 rounded-xl shadow-sm space-y-4">

                        <input
                            type="text"
                            name="username"
                            placeholder="User name"
                            className="w-full border rounded-lg px-4 py-3 text-sm"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full border rounded-lg px-4 py-3 text-sm"
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            className="w-full border rounded-lg px-4 py-3 text-sm"
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className="w-full border rounded-lg px-4 py-3 text-sm"
                        />

                        <select name="gender" className="w-full border rounded-lg px-4 py-3 text-sm">
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other gender</option>
                        </select>

                        <input
                            type="date"
                            name="dob"
                            className="w-full border rounded-lg px-4 py-3 text-sm"
                        />

                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            className="w-full border rounded-lg px-4 py-3 text-sm"
                        />

                        <select name="supportMode" className="w-full border rounded-lg px-4 py-3 text-sm">
                            <option value="">Support Mode</option>
                            <option value="Calm">Calm</option>
                            <option value="Encouraging">Encouraging</option>
                            <option value="Logical">Logical</option>
                        </select>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="w-full border rounded-lg px-4 py-3 text-sm"
                        />

                        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium">
                            Create an account
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;