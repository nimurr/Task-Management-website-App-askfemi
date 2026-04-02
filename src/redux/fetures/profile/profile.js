import { apiSlice } from "../../api/apiSlice";

const profile = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: `/users/profile`,
                method: "GET",
            }),
        }),
        getChildProfilebyId: builder.query({
            query: (id) => ({
                url: `/children-business-users/team-members/${id}/edit`,
                method: "GET",
            }),
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: `/users/profile`,
                method: "PUT",
                body: data,
            }),
        }),
        updateChieldProfile: builder.mutation({
            query: ({ data, id }) => ({
                url: `/children-business-users/children/${id}/v2`,
                method: "PATCH",
                body: data,
            }),
        }),
    }),
})

export const { useGetProfileQuery, useGetChildProfilebyIdQuery, useUpdateProfileMutation, useUpdateChieldProfileMutation } = profile