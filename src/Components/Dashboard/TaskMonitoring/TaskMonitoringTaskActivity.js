'use client';

import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

const TaskMonitoringTaskActivity = () => {
    const [view, setView] = useState('annually');

    const labels = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const values = [
        130, 170, 220, 170, 115, 170,
        90, 110, 150, 190, 95, 145
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Tasks',
                data: values,
                backgroundColor: labels.map((label) =>
                    label === 'Mar' ? '#2563eb' : '#93c5fd'
                ),
                borderRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false, // 🔥 prevents any animation-related crashes
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#111827',
                padding: 10,
                cornerRadius: 6,
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#6b7280' },
            },
            y: {
                grid: {
                    color: '#e5e7eb',
                    borderDash: [5, 5],
                },
                ticks: { color: '#6b7280' },
            },
        },
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 my-5 w-full">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-700">
                    Task Activity
                </h2>

                <div className="flex items-center bg-gray-100 rounded-md p-1">
                    <button
                        onClick={() => setView('monthly')}
                        className={`px-3 py-1 text-sm rounded-md transition ${view === 'monthly'
                                ? 'bg-white shadow text-gray-700'
                                : 'text-gray-500'
                            }`}
                    >
                        Monthly
                    </button>

                    <button
                        onClick={() => setView('annually')}
                        className={`px-3 py-1 text-sm rounded-md transition ${view === 'annually'
                                ? 'bg-blue-500 text-white shadow'
                                : 'text-gray-500'
                            }`}
                    >
                        Annually
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="w-full h-[350px]">
                <Bar key={view} data={data} options={options} />
            </div>
        </div>
    );
};

export default TaskMonitoringTaskActivity;