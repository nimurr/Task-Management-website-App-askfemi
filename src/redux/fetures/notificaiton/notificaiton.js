import { apiSlice } from "../../api/apiSlice";


export const notificationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getNotifications: builder.query({
            query: () => ({
                url: "/activitys/my",
                method: "GET",
            }),
        }),
        readSingleNotification: builder.mutation({
            query: (id) => ({
                url: `/activitys/${id}/read`,
                method: "POST",
            }),
        }),
        readAllNotifications: builder.mutation({
            query: () => ({
                url: "/activitys/read-all",
                method: "POST",
            }),
        }),
    }),
})

export const { useGetNotificationsQuery, useReadSingleNotificationMutation, useReadAllNotificationsMutation } = notificationApi;