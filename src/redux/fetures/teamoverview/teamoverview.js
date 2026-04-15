import { apiSlice } from "../../api/apiSlice";

const teamoverview = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeamOverview: builder.query({
            query: () => ({
                url: `/analytics/charts/child-progress/as-parent`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetTeamOverviewQuery } = teamoverview;   