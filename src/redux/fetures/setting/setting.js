import { apiSlice } from "../../api/apiSlice";
const setting = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPermisstionUsers: builder.query({
            query: () => ({
                url: `/children-business-users/my-children?page=1&limit=100`,
                method: "GET",
            }),
        }),
        addCliedrenPermisstion: builder.mutation({
            query: ({ data, id }) => ({
                url: `/children-business-users/children/${id}/secondary-user/v2`,
                method: "PUT",
                body: data,
            }),
        }),
    }),
})
export const { useGetPermisstionUsersQuery, useAddCliedrenPermisstionMutation } = setting
