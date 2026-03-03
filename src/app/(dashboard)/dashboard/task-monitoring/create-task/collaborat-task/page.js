'use client';

import React, { useState } from 'react';
import { FiCalendar, FiClock, FiPlus, FiX } from 'react-icons/fi';

const initialMembers = [
  { id: 1, name: 'Alax Morgn' },
  { id: 2, name: 'Jamie Chen' },
  { id: 3, name: 'Sam Rivera' },
  { id: 4, name: 'Casey Lin' },
];

const Page = () => {
  const [selectedMembers, setSelectedMembers] = useState([1, 2, 3]);
  const [subTasks, setSubTasks] = useState([
    'Client meeting 10 min',
    'Client meeting 10 min',
    'Client meeting 10 min',
  ]);

  const toggleMember = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((m) => m !== id)
        : [...prev, id]
    );
  };

  const addSubTask = () => {
    setSubTasks([...subTasks, '']);
  };

  const updateSubTask = (index, value) => {
    const updated = [...subTasks];
    updated[index] = value;
    setSubTasks(updated);
  };

  const removeSubTask = (index) => {
    setSubTasks(subTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Collaborative Task
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track and analyze task performance across your team
          </p>
        </div>

        <div className="text-sm text-gray-500">
          <span className="hover:text-blue-600 cursor-pointer">
            Dashboard
          </span>
          <span className="mx-2">›</span>
          <span className="text-blue-600 font-medium">
            Create Task
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Section */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

          <h2 className="text-base font-semibold text-gray-800 mb-6">
            Create Task
          </h2>

          {/* Task Title */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Title
            </label>
            <input
              defaultValue="Complete Math Homework"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Task Description */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Description
            </label>
            <textarea
              rows="4"
              defaultValue="Finish exercises 1-10 from chapter 5 This call is scheduled to align the design team on current progress, clarify open points, Finish exercises 1-10 from chapter 5 This call is scheduled to align the design team on current progress."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Task Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2026-12-10"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <FiCalendar className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  defaultValue="08:30"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <FiClock className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

          </div>

          {/* Sub Tasks */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Sub Task
            </label>

            <div className="space-y-3">
              {subTasks.map((task, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    value={task}
                    onChange={(e) => updateSubTask(index, e.target.value)}
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <button
                    onClick={() => removeSubTask(index)}
                    className="text-red-500"
                  >
                    <FiX />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={addSubTask}
              className="mt-4 w-full border border-blue-500 text-blue-600 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition"
            >
              <FiPlus />
              Add Sub Task
            </button>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium transition">
            Create Task
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-800 mb-6">
            Assign To
          </h2>

          <div className="space-y-3">
            {initialMembers.map((member) => {
              const selected = selectedMembers.includes(member.id);

              return (
                <div
                  key={member.id}
                  onClick={() => toggleMember(member.id)}
                  className={`cursor-pointer px-4 py-2 rounded-md border transition ${
                    selected
                      ? 'bg-blue-100 border-blue-500 text-blue-700'
                      : 'border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {member.name}
                </div>
              );
            })}
          </div>

          <button className="mt-4 w-full border border-dashed border-blue-400 text-blue-600 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition">
            + Add Member
          </button>
        </div>

      </div>
    </div>
  );
};

export default Page;