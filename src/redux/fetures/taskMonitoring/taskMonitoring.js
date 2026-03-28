import { apiSlice } from "../../api/apiSlice";
const taskMonitoring = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTaskActivity: builder.query({
            query: () => "/task-monitoring",
        }),
    }),
})

export const { useGetAllTaskActivityQuery } = taskMonitoring