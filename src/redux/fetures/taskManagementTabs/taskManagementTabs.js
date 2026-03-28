import { apiSlice } from "../../api/apiSlice";

const taskManagementTabs = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTaskManagementTabs: builder.query({
            query: ({ status, taskType }) => ({
                url: `/tasks/dashboard/children-tasks/v4?status=${status}&taskType=${taskType}`,
                method: "GET",
            })
        }),
        getTaskDetials: builder.query({
            query: ({ id }) => ({
                url: `/tasks/${id}/parent-details`,
                method: "GET",
            })
        }),
        getAllLiveActivity: builder.query({
            query: () => ({
                url: `/notifications/dashboard/activity-feed`,
                method: "GET",
            })
        }),
    }),
});

export const { useGetTaskManagementTabsQuery, useGetTaskDetialsQuery, useGetAllLiveActivityQuery } = taskManagementTabs;