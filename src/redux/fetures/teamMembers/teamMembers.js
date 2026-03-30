import { apiSlice } from "../../api/apiSlice";

const teamMembers = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeamMembersStatistics: builder.query({
            query: () => ({
                url: `/children-business-users/team-members/statistics`,
                method: "GET",
            }),
        }),
        getTeamMembersUsersInfo: builder.query({
            query: ({ page, limit }) => ({
                url: `/children-business-users/team-members/list/v2?page=${page}&limit=${limit}`,
                method: "GET",
            }),
        }),
        getTeamMembersUserDetialsInfo: builder.query({
            query: (id) => ({
                url: `/children-business-users/team-members/${id}/v2`,
                method: "GET",
            }),
        }),
    }),
})

export const { useGetTeamMembersStatisticsQuery, useGetTeamMembersUsersInfoQuery, useGetTeamMembersUserDetialsInfoQuery } = teamMembers;