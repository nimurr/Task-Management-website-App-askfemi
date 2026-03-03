'use client';

import React, { useState } from 'react';
import { FiCalendar, FiClock, FiPlus, FiTrash2 } from 'react-icons/fi';

const Page = () => {
  const [subTasks, setSubTasks] = useState([
    'Client meeting 10 min',
  ]);

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
            Single Assignment
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track and analyze task performance across your team
          </p>
        </div>

        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span className="hover:text-blue-600 cursor-pointer">Dashboard</span>
          <span className="text-gray-400">›</span>
          <span className="text-blue-600 font-medium">Create Task</span>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-lg">

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
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-700"
          />
        </div>

        {/* Task Description */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Task Description
          </label>
          <textarea
            rows="4"
            defaultValue="Finish exercises 1-10 from chapter 5 This call is scheduled to align the design team on current progress, clarify open points. Finish exercises 1-10 from chapter 5 This call is scheduled to align the design team on current progress."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-700 resize-none"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Date
            </label>
            <div className="relative">
              <input
                type="date"
                defaultValue="2026-12-10"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-700"
              />
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
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Sub Tasks */}
        <div className="mb-6">
          <div className="space-y-3">
            {subTasks.map((task, index) => (
              <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                {/* Sub Task Badge */}
                <div className="px-3 pt-2">
                  <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded">
                    Sub Task
                  </span>
                </div>
                {/* Sub Task Row */}
                <div className="flex items-center gap-2 px-3 pb-2 pt-1">
                  <input
                    value={task}
                    onChange={(e) => updateSubTask(index, e.target.value)}
                    className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
                    placeholder="Enter sub task..."
                  />
                  <button
                    onClick={() => removeSubTask(index)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <FiTrash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addSubTask}
            className="mt-4 w-full border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-600 py-2.5 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition"
          >
            <FiPlus size={15} />
            Add Sub Task
          </button>
        </div>

        {/* Create Task Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium transition text-sm">
          Create Task
        </button>

      </div>
    </div>
  );
};

export default Page;