import { apiSlice } from "../../api/apiSlice";

const profile = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: `/users/profile`,
                method: "GET",
            }),
        }),
    }),
})

export const { useGetProfileQuery } = profile