import { apiSlice } from "../../api/apiSlice";
const taskMonitoring = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTaskActivity: builder.query({
            query: ({ period }) => ({
                url: `/analytics/task-monitoring/activity?period=${period}`,
                method: "GET",
            }),
        }),
        getAllOverview: builder.query({
            query: () => ({
                url: `/analytics/task-monitoring/summary`,
                method: "GET",
            }),
        }),
    }),
})

export const { useGetAllTaskActivityQuery , useGetAllOverviewQuery } = taskMonitoring