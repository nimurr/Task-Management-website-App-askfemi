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
                url: `/users/update/v2`,
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
        deleteChieldProfile: builder.mutation({
            query: (id) => ({
                url: `/children-business-users/children/${id}`,
                method: "DELETE",
            }),
        }),
        createMemberProfile: builder.mutation({
            query: (data) => ({
                url: `/children-business-users/children/v2`,
                method: "POST",
                body: data,
            }),
        }),
    }),
})

export const { useGetProfileQuery, useGetChildProfilebyIdQuery, useUpdateProfileMutation, useUpdateChieldProfileMutation, useDeleteChieldProfileMutation , useCreateMemberProfileMutation } = profile