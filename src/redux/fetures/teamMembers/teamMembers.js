import { apiSlice } from "../../api/apiSlice";

const teamMembers = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeamMembersStatistics: builder.query({
            query: () => ({
                url: `/children-business-users/team-members/statistics`,
                method: "GET",
            }),
        }),
    }),
})

export const { useGetTeamMembersStatisticsQuery } = teamMembers;