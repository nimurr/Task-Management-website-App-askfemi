import { apiSlice } from "../../api/apiSlice";

const taskManagementTabs = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTaskManagementTabs: builder.query({
            query: ({status , taskType}) =>  ({
                url: `/tasks/dashboard/children-tasks/v3?status=${status}&taskType=${taskType}`,
                method: "GET",
            })
        }),
    }),
});

export const { useGetTaskManagementTabsQuery } = taskManagementTabs;