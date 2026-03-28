// 'use client';

// import React, { useState } from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { useGetAllTaskActivityQuery } from '@/redux/fetures/taskMonitoring/taskMonitoring';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Tooltip,
//     Legend
// );

// const TaskMonitoringTaskActivity = () => {
//     const [view, setView] = useState('monthly');

//     const { data: taskActivity } = useGetAllTaskActivityQuery({
//         period: view === 'annually' ? 'annual' : 'monthly',
//     });
//     const fullData = taskActivity?.data?.attributes?.chartData || [];
//     console.log(taskActivity)

//     const labels = [
//         'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//     ];

//     const values = [
//         130, 170, 220, 170, 115, 170,
//         90, 110, 150, 190, 95, 145
//     ];

//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: 'Tasks',
//                 data: values,
//                 backgroundColor: labels.map((label) =>
//                     label === 'Mar' ? '#2563eb' : '#93c5fd'
//                 ),
//                 borderRadius: 6,
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//         animation: false, // 🔥 prevents any animation-related crashes
//         plugins: {
//             legend: { display: false },
//             tooltip: {
//                 backgroundColor: '#111827',
//                 padding: 10,
//                 cornerRadius: 6,
//             },
//         },
//         scales: {
//             x: {
//                 grid: { display: false },
//                 ticks: { color: '#6b7280' },
//             },
//             y: {
//                 grid: {
//                     color: '#e5e7eb',
//                     borderDash: [5, 5],
//                 },
//                 ticks: { color: '#6b7280' },
//             },
//         },
//     };

//     return (
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 my-5 w-full">

//             {/* Header */}
//             <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-lg font-semibold text-gray-700">
//                     Task Activity
//                 </h2>

//                 <div className="flex items-center bg-gray-100 rounded-md p-1">
//                     <button
//                         onClick={() => setView('monthly')}
//                         className={`px-3 py-1 text-sm rounded-md transition ${view === 'monthly'
//                             ? 'bg-white shadow text-gray-700'
//                             : 'text-gray-500'
//                             }`}
//                     >
//                         Monthly
//                     </button>

//                     <button
//                         onClick={() => setView('annually')}
//                         className={`px-3 py-1 text-sm rounded-md transition ${view === 'annually'
//                             ? 'bg-blue-500 text-white shadow'
//                             : 'text-gray-500'
//                             }`}
//                     >
//                         Annually
//                     </button>
//                 </div>
//             </div>

//             {/* Chart */}
//             <div className="w-full h-[350px]">
//                 <Bar key={view} data={data} options={options} />
//             </div>
//         </div>
//     );
// };

// export default TaskMonitoringTaskActivity;


'use client';

import React, { useState, useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useGetAllTaskActivityQuery } from '@/redux/fetures/taskMonitoring/taskMonitoring';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TaskMonitoringTaskActivity = () => {
    const [view, setView] = useState('monthly');

    // API call
    const { data: taskActivity } = useGetAllTaskActivityQuery({
        period: view === 'annually' ? 'annual' : 'monthly',
    });

    const chartDataFromApi = taskActivity?.data?.attributes?.chartData;
    const statistics = taskActivity?.data?.attributes?.statistics;

    // Prepare chart data
    const data = useMemo(() => {
        if (!chartDataFromApi) return { labels: [], datasets: [] };

        const labels = chartDataFromApi.labels || [];
        const dataset = chartDataFromApi.datasets?.[0];

        // Highlight peak month
        const peakMonth = statistics?.peakPeriod;

        return {
            labels,
            datasets: [
                {
                    label: dataset?.label || 'Tasks',
                    data: dataset?.data || [],
                    backgroundColor: labels.map((label) =>
                        label === peakMonth ? '#2563eb' : dataset?.color || '#93c5fd'
                    ),
                    borderRadius: 6,
                },
            ],
        };
    }, [chartDataFromApi, statistics]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#111827',
                padding: 10,
                cornerRadius: 6,
            },
        },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#6b7280' } },
            y: { 
                grid: { color: '#e5e7eb', borderDash: [5, 5] },
                ticks: { color: '#6b7280' }
            },
        },
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 my-5 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-700">Task Activity</h2>

                <div className="flex items-center bg-gray-100 rounded-md p-1">
                    <button
                        onClick={() => setView('monthly')}
                        className={`px-3 py-1 text-sm rounded-md transition ${view === 'monthly'
                            ? 'bg-white shadow text-gray-700'
                            : 'text-gray-500'}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setView('annually')}
                        className={`px-3 py-1 text-sm rounded-md transition ${view === 'annually'
                            ? 'bg-blue-500 text-white shadow'
                            : 'text-gray-500'}`}
                    >
                        Annually
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="w-full h-[350px]">
                <Bar key={view} data={data} options={options} />
            </div>

            {/* Statistics */}
            {statistics && (
                <div className="mt-5 flex flex-col md:flex-row justify-between gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center flex-1">
                        <span className="text-gray-400 text-sm">Total Tasks</span>
                        <p className="text-lg font-semibold">{statistics.totalTasks}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center flex-1">
                        <span className="text-gray-400 text-sm">Average per Period</span>
                        <p className="text-lg font-semibold">{statistics.averagePerPeriod}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center flex-1">
                        <span className="text-gray-400 text-sm">Peak Period</span>
                        <p className="text-lg font-semibold">{statistics.peakPeriod}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center flex-1">
                        <span className="text-gray-400 text-sm">Growth %</span>
                        <p className="text-lg font-semibold">{statistics.growthPercentage}%</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskMonitoringTaskActivity;