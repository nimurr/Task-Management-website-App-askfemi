import { apiSlice } from "../../api/apiSlice";

const taskManagementTabs = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTaskManagementTabs: builder.query({
            query: ({status , taskType}) =>  ({
                url: `/tasks/dashboard/children-tasks/v3?status=${status}&taskType=${taskType}`,
                method: "GET",
            })
        }),
        getAllLiveActivity: builder.query({
            query: () =>  ({
                url: `/notifications/dashboard/activity-feed`,
                method: "GET",
            })
        }),
    }),
});

export const { useGetTaskManagementTabsQuery , useGetAllLiveActivityQuery } = taskManagementTabs;