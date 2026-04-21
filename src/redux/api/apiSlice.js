import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import url from "./baseUrl";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: url + "/api/v1",

    prepareHeaders: (headers) => {

      // ✅ Safe check for Next.js
      if (typeof window !== "undefined") {

        const token = localStorage.getItem("token"); // ❌ no JSON.parse

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);

          // timezone (optional but good)
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          headers.set("X-Time-Zone", timeZone);
        }
      }

      return headers;
    },
  }),

  tagTypes: ["Users", "Profile"],

  endpoints: () => ({}),
});