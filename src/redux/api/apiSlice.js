import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import url from "./baseUrl";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: url + "/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        headers.set("X-Time-Zone", timeZone);
      }
      return headers;
    },


  }),
  tagTypes: ["Users", "Profile"],

  endpoints: () => ({}),
});