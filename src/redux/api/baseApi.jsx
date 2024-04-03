import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-management-backend-psi.vercel.app",
  // baseUrl: "http://localhost:5000", \\ https://task-management-backend-psi.vercel.app
    prepareHeaders: (headers) => {
      // Get the token from localStorage
      const auth = JSON.parse(localStorage.getItem("auth"));
      const token = auth ? auth.accessToken : null;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["auth", "tasks","admin"],
});

export default baseApi;