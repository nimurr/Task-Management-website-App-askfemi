


'use client';

import CardLoading from '@/Components/Common/CardLoading';
import url from '@/redux/api/baseUrl';
import {
    useCreateTaskForChildrenMutation,
    useGetMyAllMembersQuery
} from '@/redux/fetures/taskMonitoring/taskMonitoring';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Page = () => {
    const [page, setPage] = useState(1);
    const limit = 5;

    const { data, isLoading } = useGetMyAllMembersQuery({ page, limit });
    const [createChildrenTask, { isLoading: isCreating }] =  useCreateTaskForChildrenMutation();

    const fullChildren = data?.data?.attributes?.children || [];
    const total = data?.data?.attributes?.total || 0;
    const totalPages = Math.ceil(total / limit);

    // ✅ FORM STATES
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [selectedMember, setSelectedMember] = useState(null);

    // ✅ Subtasks (multiple)
    const [subtasks, setSubtasks] = useState([
        { title: '' }
    ]);

    const handleSubtaskChange = (index, value) => {
        const updated = [...subtasks];
        updated[index].title = value;
        setSubtasks(updated);
    };

    const addSubtask = () => {
        setSubtasks([...subtasks, { title: '' }]);
    };

    const removeSubtask = (index) => {
        const updated = subtasks.filter((_, i) => i !== index);
        setSubtasks(updated);
    };

    const router = useRouter();
    // ✅ Submit Handler
    const handleSubmit = async () => {
        if (!selectedMember) {
            toast.error(' Please select a member');
            return;
        }

        const startDateTime = new Date(`${date}T${time}`);

        const payload = {
            title,
            description,
            taskType: 'singleAssignment',
            priority: 'high',
            startTime: startDateTime.toISOString(),
            scheduledTime: time,
            assignedUserIds: [selectedMember],
            dueDate: new Date(date).toISOString(),
            subtasks: subtasks.map((sub, index) => ({
                title: sub.title,
                order: index + 1,
            })),
        };

        console.log('Payload:', payload);

        try {
            const res = await createChildrenTask(payload).unwrap();
            console.log(res)
            if (res?.code == 201) {
                toast.success(res?.message);
                router.push('/dashboard/task-monitoring/create-task');
            }
            else {
                toast.success(res?.message);
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to create task');
        }
    };

    return (
        <div className="bg-gray-100 rounded-lg p-5">

            {/* Header */}
            <h1 className="text-2xl font-semibold mb-6">
                Single Assignment
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT FORM */}
                <div className="lg:col-span-2 bg-white border rounded-xl p-6 shadow-sm">

                    <h2 className="font-semibold mb-5">Create Task</h2>

                    {/* Title */}
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Task Title"
                        className="w-full border px-4 py-2 rounded mb-4"
                    />

                    {/* Description */}
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Task Description"
                        className="w-full border px-4 py-2 rounded mb-4"
                    />

                    {/* Date & Time */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            className="border px-3 py-2 rounded"
                        />
                        <input
                            type="time"
                            onChange={(e) => setTime(e.target.value)}
                            className="border px-3 py-2 rounded"
                        />
                    </div>

                    {/* Subtasks */}
                    <div className="mb-4">
                        <p className="font-medium mb-2">Subtasks</p>

                        {subtasks.map((sub, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    value={sub.title}
                                    onChange={(e) =>
                                        handleSubtaskChange(index, e.target.value)
                                    }
                                    placeholder={`Subtask ${index + 1}`}
                                    className="flex-1 border px-3 py-2 rounded"
                                />

                                {subtasks.length > 1 && (
                                    <button
                                        onClick={() => removeSubtask(index)}
                                        className="text-red-500"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        ))}

                        <button
                            onClick={addSubtask}
                            className="w-full border border-blue-500 text-blue-600 py-2 rounded flex justify-center items-center gap-2"
                        >
                            <FiPlus /> Add Subtask
                        </button>
                    </div>

                    {/* Submit */}
                    <button
                        onClick={handleSubmit}
                        disabled={isCreating}
                        className="w-full bg-blue-500 text-white py-3 rounded"
                    >
                        {isCreating ? 'Creating...' : 'Create Task'}
                    </button>
                </div>

                {/* RIGHT MEMBERS */}
                <div className="bg-white border rounded-xl p-6 shadow-sm">
                    <h2 className="font-semibold mb-5">
                        Assign To (Single)
                    </h2>

                    {isLoading ? (
                        [...Array(3)].map((_, i) => <CardLoading key={i} />)
                    ) : (
                        <>
                            <div className="space-y-3">
                                {fullChildren.map((child) => (
                                    <label
                                        key={child._id}
                                        className="flex items-center gap-3 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            checked={selectedMember === child.childUserId}
                                            onChange={() =>
                                                setSelectedMember(child.childUserId)
                                            }
                                        />

                                        <img
                                            src={url + child.profileImage?.imageUrl}
                                            className="w-8 h-8 rounded-full"
                                        />

                                        <span>{child.name}</span>
                                    </label>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-between mt-5">
                                <button
                                    onClick={() => setPage((p) => p - 1)}
                                    disabled={page === 1}
                                    className="px-3 py-1 bg-gray-200 rounded"
                                >
                                    Prev
                                </button>

                                <span>
                                    {page} / {totalPages || 1}
                                </span>

                                <button
                                    onClick={() => setPage((p) => p + 1)}
                                    disabled={page === totalPages}
                                    className="px-3 py-1 bg-gray-200 rounded"
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;