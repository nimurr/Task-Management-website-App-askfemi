import { apiSlice } from "../../api/apiSlice";

const subscription = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSubscription: builder.query({
            query: () => ({
                url: "/subscription-plan",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetSubscriptionQuery } = subscription;