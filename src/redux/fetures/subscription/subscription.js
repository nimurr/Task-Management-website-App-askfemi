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
        }),
        getMySubscriptionHistory: builder.query({
            query: () => ({
                url: "/user-subs",
                method: "GET",
            }),
        }),
        getMyActiveSubscription: builder.query({
            query: () => ({
                url: "/user-subscriptions/my-active",
                method: "GET",
            }),
        }),
        cancelSubscription: builder.mutation({
            query: (data) => ({
                url: `/user-subs/cancel`,
                method: "POST",
                body: data
            }),
        }),
    }),
});

export const { 
    useGetSubscriptionQuery, 
    useTakeSubscriptionMutation , 
    useGetMySubscriptionHistoryQuery , 
    useGetMyActiveSubscriptionQuery , 
    useCancelSubscriptionMutation } = subscription;