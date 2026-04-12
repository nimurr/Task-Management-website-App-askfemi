import { apiSlice } from "../../api/apiSlice";

const subscription = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSubscription: builder.query({
            query: () => ({
                url: "/subscription-plan",
                method: "GET",
            }),
        }),
        takeSubscription: builder.mutation({
            query: ({ id }) => ({
                url: `/subscription-plan/purchase/${id}`,
                method: "POST"
            }),
        })
    }),
});

export const { useGetSubscriptionQuery , useTakeSubscriptionMutation } = subscription;