import { apiSlice } from "../../api/apiSlice";

const profile = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: `/users/profile`,
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
                url: `/children-business-user/children/${id}`,
                method: "PUT",
                body: data,
            }),
        }),
    }),
})

export const { useGetProfileQuery, useUpdateProfileMutation, useUpdateChieldProfileMutation } = profile