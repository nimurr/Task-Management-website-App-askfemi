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
        getMyAllMembers: builder.query({
            query: ({ page, limit }) => ({
                url: `/children-business-users/my-children?page=${page}&limit=${limit}`,
                method: "GET",
            }),
        }),
        createTaskForChildren: builder.mutation({
            query: (data) => ({
                url: `/tasks/v2`,
                method: "POST",
                body: data,
            }),
        })
    }),
})

export const { useGetAllTaskActivityQuery, useGetAllOverviewQuery, useGetMyAllMembersQuery , useCreateTaskForChildrenMutation } = taskMonitoring