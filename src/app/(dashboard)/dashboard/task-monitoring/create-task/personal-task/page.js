'use client';

import React, { useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCreateTaskForChildrenMutation } from '@/redux/fetures/taskMonitoring/taskMonitoring';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const [createTask, { isLoading }] = useCreateTaskForChildrenMutation();

  // ✅ Form States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // ✅ Subtasks (multiple)
  const [subTasks, setSubTasks] = useState([
    { title: '' }
  ]);

  // Add Subtask
  const addSubTask = () => {
    setSubTasks([...subTasks, { title: '' }]);
  };

  // Update Subtask
  const updateSubTask = (index, value) => {
    const updated = [...subTasks];
    updated[index].title = value;
    setSubTasks(updated);
  };

  // Remove Subtask
  const removeSubTask = (index) => {
    const updated = subTasks.filter((_, i) => i !== index);
    setSubTasks(updated);
  };



  // ✅ Submit Handler
  const handleSubmit = async () => {
    if (!title || !description || !date || !time) {
      return toast.error('Please fill all fields');
    }

    const startDateTime = new Date(`${date}T${time}`);

    const payload = {
      title,
      description,
      taskType: 'personal',
      priority: 'medium',
      startTime: startDateTime.toISOString(),
      scheduledTime: time,
      dueDate: new Date(date).toISOString(),
      subtasks: subTasks.map((sub, index) => ({
        title: sub.title,
        order: index + 1,
      })),
    };

    console.log('Payload:', payload);

    try {
      const res = await createTask(payload).unwrap();

      if (res?.code === 201) {
        toast.success(res?.message || 'Task Created Successfully');
        router.push('/dashboard/task-monitoring');
      } else {
        toast.error(res?.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to create task');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Personal Task
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Create and manage your personal tasks
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border rounded-xl p-6 shadow-sm max-w-lg">

        <h2 className="text-base font-semibold mb-6">
          Create Task
        </h2>

        {/* Title */}
        <div className="mb-5">
          <label className="text-sm font-medium mb-2 block">
            Task Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="text-sm font-medium mb-2 block">
            Task Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Enter description"
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border px-3 py-2 rounded-md"
          />
        </div>

        {/* Subtasks */}
        <div className="mb-6">
          <p className="font-medium mb-2">Subtasks</p>

          {subTasks.map((task, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                value={task.title}
                onChange={(e) => updateSubTask(index, e.target.value)}
                placeholder={`Subtask ${index + 1}`}
                className="flex-1 border px-3 py-2 rounded-md"
              />

              {subTasks.length > 1 && (
                <button
                  onClick={() => removeSubTask(index)}
                  className="text-red-500"
                >
                  <FiTrash2 size={16} />
                </button>
              )}
            </div>
          ))}

          <button
            onClick={addSubTask}
            className="w-full border border-blue-500 text-blue-600 py-2 rounded flex items-center justify-center gap-2 mt-2"
          >
            <FiPlus /> Add Subtask
          </button>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-3 rounded-md"
        >
          {isLoading ? 'Creating...' : 'Create Task'}
        </button>

      </div>
    </div>
  );
};

export default Page;